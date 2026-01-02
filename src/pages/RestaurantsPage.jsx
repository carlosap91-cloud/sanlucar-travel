import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import ListingLayout from '../components/ListingLayout';
import SidebarFilters from '../components/SidebarFilters';
import ListingCard from '../components/ListingCard';

const RestaurantsPage = () => {
    const navigate = useNavigate();
    const { restaurants } = useData();
    const [selectedFilters, setSelectedFilters] = useState({});

    // Define Filters
    const filters = [
        {
            id: 'cuisine',
            label: 'Tipo de Cocina',
            options: [
                { value: 'Mariscos', label: 'Mariscos' },
                { value: 'Tradicional', label: 'Tradicional' },
                { value: 'Innovación', label: 'Innovación' },
                { value: 'Tapas', label: 'Tapas' },
                { value: 'Vinos', label: 'Vinos' }
            ]
        },
        {
            id: 'services',
            label: 'Características',
            options: [
                { value: 'Terraza', label: 'Terraza' },
                { value: 'Vistas al mar', label: 'Vistas al mar' },
                { value: 'Para llevar', label: 'Para llevar' }
            ]
        }
    ];

    const handleFilterChange = (groupId, value) => {
        setSelectedFilters(prev => {
            const groupSelections = prev[groupId] || [];
            if (groupSelections.includes(value)) {
                return { ...prev, [groupId]: groupSelections.filter(v => v !== value) };
            } else {
                return { ...prev, [groupId]: [...groupSelections, value] };
            }
        });
    };

    const handleResetFilters = () => {
        setSelectedFilters({});
    };

    // Filter Logic 
    const filteredRestaurants = restaurants.filter(rest => {
        if (!selectedFilters.cuisine || selectedFilters.cuisine.length === 0) return true;
        return rest.cuisine.some(c => selectedFilters.cuisine.includes(c));
    });

    return (
        <ListingLayout
            title={<>Gastronomía <span style={{ color: 'var(--color-secondary)' }}>Sanluqueña</span></>}
            subtitle="Descubre los sabores únicos de nuestra tierra, desde el langostino de Sanlúcar hasta la Manzanilla."
            sidebar={
                <SidebarFilters
                    title="Filtros"
                    filters={filters}
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                    onResetFilters={handleResetFilters}
                />
            }
            content={
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredRestaurants.map(rest => (
                        <ListingCard
                            key={rest.id}
                            image={rest.image}
                            title={rest.name}
                            subtitle={rest.cuisine.join(' • ')}
                            rating={5}
                            description={rest.description}
                            price={rest.price}
                            socials={rest.socials}
                            borderColor="var(--color-secondary)"
                            onAction={() => navigate(`/restaurantes/${rest.id}`)}
                            actionLabel="Ver carta y reservar"
                        />
                    ))}
                </div>
            }
        />
    );
};

export default RestaurantsPage;