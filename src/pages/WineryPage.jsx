import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import ListingLayout from '../components/ListingLayout';
import SidebarFilters from '../components/SidebarFilters';
import ListingCard from '../components/ListingCard';

const WineryPage = () => {
    const { wineries } = useData();
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = [
        {
            id: 'style',
            label: 'Estilo',
            options: [
                { value: 'Tradición', label: 'Tradicional' },
                { value: 'Museografía', label: 'Con Museo' },
                { value: 'Familiar', label: 'Familiar' }
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

    // Simplistic filter for demo
    const filteredWineries = wineries;

    return (
        <ListingLayout
            title={<>Bodegas <span style={{ color: 'var(--color-secondary)' }}>Históricas</span></>}
            subtitle="Catedrales del vino donde nace la Manzanilla."
            sidebar={
                <SidebarFilters
                    title="Filtros"
                    filters={filters}
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                />
            }
            content={
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredWineries.map(winery => (
                        <ListingCard
                            key={winery.id}
                            image={winery.image}
                            title={winery.name}
                            subtitle={winery.style}
                            rating={5}
                            description={winery.description}
                            price={winery.price}
                            socials={winery.socials}
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

export default WineryPage;
