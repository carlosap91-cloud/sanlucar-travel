import React from 'react';
import { Link } from 'react-router-dom';

const GastronomyHubPage = () => {
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

                <div className="grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {categories.map((cat, idx) => (
                        <Link key={idx} to={cat.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="category-card glass" style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease',
                                height: '100%',
                                cursor: 'pointer',
                                border: '3px solid var(--color-secondary)',
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'white'
                            }}
                                onMouseEnter={(e) => {
                                    if (window.innerWidth > 768) e.currentTarget.style.transform = 'translateY(-10px)'
                                }}
                                onMouseLeave={(e) => {
                                    if (window.innerWidth > 768) e.currentTarget.style.transform = 'translateY(0)'
                                }}
                            >
                                <div className="cat-image-wrapper" style={{ height: '200px', margin: '15px', borderRadius: '15px', overflow: 'hidden' }}>
                                    <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="cat-content" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    <h3 style={{ fontSize: 'clamp(1.1rem, 5vw, 1.6rem)', marginBottom: '0.5rem', color: 'var(--color-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} className="cat-title">{cat.title}</h3>
                                    <p style={{ color: '#666' }} className="cat-desc">{cat.description}</p>
                                    <div style={{ marginTop: 'auto', paddingTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 700 }} className="cat-action">
                                        Explorar ➝
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile Optimization for Categories */}
                <style>{`
                    @media (max-width: 768px) {
                        .grid {
                            grid-template-columns: 1fr !important;
                            gap: 1rem !important;
                        }
                        .category-card {
                            flex-direction: row !important;
                            height: 120px !important;
                            align-items: center !important;
                            border-radius: 16px !important;
                            margin: 0 !important;
                        }
                        .cat-image-wrapper {
                            height: 100% !important;
                            width: 120px !important;
                            margin: 0 !important;
                            border-radius: 0 !important;
                            flex-shrink: 0;
                        }
                        .cat-content {
                            padding: 0 1rem !important;
                            align-items: flex-start !important;
                            text-align: left !important;
                        }
                        .cat-title {
                            font-size: 1.2rem !important;
                            margin-bottom: 0.2rem !important;
                        }
                        .cat-desc {
                            font-size: 0.85rem !important;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            margin: 0 !important;
                        }
                        .cat-action {
                            display: none !important; /* Hide button text for cleanliness */
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default GastronomyHubPage;
