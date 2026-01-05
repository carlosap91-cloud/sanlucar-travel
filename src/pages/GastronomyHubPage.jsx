import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ListingCard from '../components/ListingCard';

const GastronomyHubPage = () => {
    const navigate = useNavigate();
    const categories = [
        {
            title: 'Restaurantes',
            description: 'Los mejores langostinos y guisos marineros.',
            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
            link: '/restaurantes'
        },
        {
            title: 'Bodegas',
            description: 'Catedrales del vino Manzanilla.',
            image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
            link: '/bodegas'
        },
        {
            title: 'Mercados',
            description: 'Producto fresco local de la plaza de abastos.',
            image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800',
            link: '/gastronomia/mercados'
        },
        {
            title: 'Tiendas Típicas',
            description: 'Pastelerías, ultramarinos y sabores de siempre.',
            image: 'https://placehold.co/800x600?text=Tiendas+Tipicas', // Temporary Placeholder
            link: '/gastronomia/tiendas'
        }
    ];

    return (
        <div style={{ paddingTop: '2rem', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                        Gastronomía <span style={{ color: 'var(--color-secondary)' }}>Sanluqueña</span>
                    </h1>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto' }}>
                        Capital Española de la Gastronomía. Descubre dónde comer, beber y comprar los productos que hacen única a nuestra tierra.
                    </p>
                </div>

                <div className="listing-grid">
                    {categories.map((cat, idx) => (
                        <div key={idx} onClick={() => navigate(cat.link)} style={{ cursor: 'pointer' }}>
                            <ListingCard
                                image={cat.image}
                                title={cat.title}
                                description={cat.description}
                                actionLabel="Explorar"
                                onAction={() => navigate(cat.link)}
                                className="compact-card-mobile"
                                borderColor="var(--color-secondary)"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GastronomyHubPage;
