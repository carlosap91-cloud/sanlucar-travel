import React from 'react';
import { useData } from '../context/DataContext';
import ListingLayout from '../components/ListingLayout';
import SidebarFilters from '../components/SidebarFilters';
import ListingCard from '../components/ListingCard';

const ShopsPage = () => {
    const { shops } = useData();

    return (
        <ListingLayout
            title={<>Comercios con <span style={{ color: 'var(--color-secondary)' }}>Alma</span></>}
            subtitle="Apoya al comercio local de Sanlúcar."
            sidebar={<SidebarFilters title="Filtros" filters={[]} />}
            content={
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {shops.map(shop => (
                        <ListingCard
                            key={shop.id}
                            image={shop.image}
                            title={shop.name}
                            subtitle={shop.address}
                            rating={5}
                            description={shop.description}
                            price={shop.price}
                            socials={shop.socials}
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

export default ShopsPage;
