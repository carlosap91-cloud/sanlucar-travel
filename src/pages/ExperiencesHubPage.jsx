import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import ListingLayout from '../components/ListingLayout';
import SidebarFilters from '../components/SidebarFilters';
import ListingCard from '../components/ListingCard';

const ExperiencesHubPage = () => {
    const { experiences } = useData();
    const [selectedFilters, setSelectedFilters] = useState({});

    const filters = [
        {
            id: 'type',
            label: 'Categoría',
            options: [
                { value: 'Naturaleza', label: '🌊 Naturaleza' },
                { value: 'Aventura', label: '🛶 Aventura' },
                { value: 'Cultura', label: '🐎 Cultura' },
                { value: 'Gastronomía', label: '🍷 Gastronomía' },
                { value: 'Historia', label: '🏛️ Historia' },
                { value: 'Ocio', label: '⛵ Ocio' }
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

    const filteredExperiences = experiences.filter(exp => {
        if (!selectedFilters.type || selectedFilters.type.length === 0) return true;
        return selectedFilters.type.includes(exp.type);
    });

    return (
        <ListingLayout
            title={<>Experiencias <span style={{ color: 'var(--color-secondary)' }}>Únicas</span></>}
            subtitle="Vive Sanlúcar a través de sus tradiciones y naturaleza."
            sidebar={
                <SidebarFilters
                    title="Filtros"
                    filters={filters}
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                />
            }
            content={
                <div className="listing-grid">
                    {filteredExperiences.map(exp => (
                        <ListingCard
                            key={exp.id}
                            className="compact-card-mobile"
                            image={exp.image}
                            title={exp.name}
                            subtitle={`${exp.type} • ${exp.duration || ''}`}
                            rating={5}
                            description={exp.description}
                            price={exp.price}
                            socials={exp.socials}
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

export default ExperiencesHubPage;
