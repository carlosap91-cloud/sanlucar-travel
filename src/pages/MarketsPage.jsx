import React from 'react';
import { useData } from '../context/DataContext';
import ListingLayout from '../components/ListingLayout';
import SidebarFilters from '../components/SidebarFilters';
import ListingCard from '../components/ListingCard';

const MarketsPage = () => {
    const { markets } = useData();

    return (
        <ListingLayout
            title={<>Mercados <span style={{ color: 'var(--color-secondary)' }}>Locales</span></>}
            subtitle="El producto fresco de la huerta y el mar."
            sidebar={<SidebarFilters title="Filtros" filters={[]} />}
            content={
                <div className="listing-grid">
                    {markets.map(market => (
                        <ListingCard
                            key={market.id}
                            className="compact-card-mobile"
                            image={market.image}
                            title={market.name}
                            subtitle={market.address}
                            rating={5}
                            description={market.description}
                            price={market.price}
                            socials={market.socials}
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

export default MarketsPage;
