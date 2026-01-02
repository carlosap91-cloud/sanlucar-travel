import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import ListingLayout from '../components/ListingLayout';
import SidebarFilters from '../components/SidebarFilters';
import ListingCard from '../components/ListingCard';

const AccommodationPage = () => {
    const { accommodations } = useData();
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = [
        {
            id: 'type',
            label: 'Tipo de Alojamiento',
            options: [
                { value: 'Hotel', label: 'Hotel' },
                { value: 'Apartamento', label: 'Apartamento' },
                { value: 'Boutique', label: 'Hotel Boutique' },
                { value: 'Rural', label: 'Casa Rural' },
                { value: 'Hostal', label: 'Hostal' }
            ]
        },
        {
            id: 'price',
            label: 'Precio',
            options: [
                { value: '€', label: 'Económico' },
                { value: '€€', label: 'Medio' },
                { value: '€€€', label: 'Lujo' }
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

    const filteredAcc = accommodations.filter(acc => {
        // Filter by Type
        if (selectedFilters.type && selectedFilters.type.length > 0) {
            // If the accommodation type isn't in the selected types, skip it
            // Note: DataContext types are strings (e.g. 'Hotel'). 
            // If acc.type matches one of the selected values.
            const typeMatch = selectedFilters.type.some(t => acc.type.toLowerCase().includes(t.toLowerCase()));
            if (!typeMatch) return false;
        }
        // Filter by Price
        if (selectedFilters.price && selectedFilters.price.length > 0) {
            if (!selectedFilters.price.includes(acc.price)) return false;
        }
        return true;
    });

    return (
        <ListingLayout
            title={<>Dónde <span style={{ color: 'var(--color-secondary)' }}>Dormir</span></>}
            subtitle="Hoteles con encanto, apartamentos en la playa y palacios históricos."
            sidebar={
                <SidebarFilters
                    title="Filtrar por"
                    filters={filters}
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                />
            }
            content={
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredAcc.map(acc => (
                        <ListingCard
                            key={acc.id}
                            image={acc.image}
                            title={acc.name}
                            subtitle={acc.type}
                            rating={acc.price === '€€€' ? 5 : acc.price === '€€' ? 4 : 3}
                            description={acc.description}
                            price={acc.price}
                            socials={acc.socials}
                            borderColor="var(--color-secondary)"
                            onAction={() => { }}
                            actionLabel="Solicitar reserva"
                        />
                    ))}
                </div>
            }
        />
    );
};

export default AccommodationPage;
