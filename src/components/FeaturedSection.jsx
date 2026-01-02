import React from 'react';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import ListingCard from './ListingCard';

const FeaturedSection = () => {
    const { restaurants, wineries, getRating } = useData();
    const navigate = useNavigate();

    // 1. Combine data types that have ratings
    const allItems = [
        ...restaurants.map(r => ({ ...r, type: 'Restaurante', link: `/restaurantes/${r.id}` })),
        ...wineries.map(w => ({ ...w, type: 'Bodega', link: `/bodegas/${w.id}` }))
    ];

    // 2. Sort Logic: Manual Featured > High Rating > Newest
    const featuredItems = allItems
        .sort((a, b) => {
            // Priority 1: Manually Featured
            if (a.isFeatured && !b.isFeatured) return -1;
            if (!a.isFeatured && b.isFeatured) return 1;

            // Priority 2: Rating
            const ratingA = parseFloat(getRating(a.reviews) || 0);
            const ratingB = parseFloat(getRating(b.reviews) || 0);
            return ratingB - ratingA;
        })
        .slice(0, 3);

    const displayItems = featuredItems.length > 0 ? featuredItems : allItems.slice(0, 3);

    if (allItems.length === 0) return null;

    return (
        <section className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div style={{
                    border: '3px solid var(--color-primary)',
                    borderRadius: '40px',
                    padding: '3rem 2rem',
                    backgroundColor: 'white',
                    boxShadow: 'var(--shadow)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>
                            Lo Mejor de la Semana
                        </span>
                        <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>Favoritos de los Viajeros</h2>
                    </div>

                    <div className="grid grid-three">
                        {displayItems.map(item => (
                            <ListingCard
                                key={`${item.type}-${item.id}`}
                                image={item.image}
                                title={item.name}
                                subtitle={item.type}
                                rating={getRating(item.reviews)}
                                description={item.description}
                                price={item.price}
                                borderColor="var(--color-secondary)"
                                actionLabel="Ver Detalles"
                                onAction={() => navigate(item.link)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
