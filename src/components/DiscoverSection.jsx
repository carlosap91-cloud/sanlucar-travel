import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverSection = () => {
    const cards = [
        {
            title: 'Historia Viva',
            desc: 'Orígenes, leyendas y curiosidades.',
            img: 'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?auto=format&fit=crop&q=80&w=800',
            link: '/historia',
            color: 'var(--color-primary)' // Blue
        },
        {
            title: 'Agenda & Eventos',
            desc: 'Ferias, carreras y conciertos.',
            img: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=800',
            link: '/eventos',
            color: 'var(--color-primary)' // Blue
        },
        {
            title: 'El Rincón del Sanluqueño',
            desc: 'Blog de noticias y consejos locales.',
            img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
            link: '/blog',
            color: 'var(--color-primary)' // Blue
        },
        {
            title: 'Mapa Interactivo',
            desc: 'Explora la ciudad a tu aire.',
            img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800',
            link: '/mapa',
            color: 'var(--color-primary)' // Blue
        }
    ];

    return (
        <section id="descubre" className="section-padding" style={{ background: '#f9fafb', paddingTop: '2rem' }}>
            <div className="container">
                <div style={{
                    border: '3px solid var(--color-primary)',
                    borderRadius: '40px',
                    padding: '3rem 2rem',
                    backgroundColor: 'white',
                    boxShadow: 'var(--shadow)'
                }}>
                    <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            color: 'var(--color-secondary)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            fontSize: '0.8rem',
                            letterSpacing: '2px'
                        }}>
                            Explora a fondo
                        </span>
                        <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>Descubre Sanlúcar</h2>
                        <p style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
                            Más allá de la gastronomía: cultura, actualidad y herramientas.
                        </p>
                    </div>

                    <div className="grid grid-compact" style={{
                        gap: '2rem'
                    }}>
                        {cards.map((card, index) => (
                            <Link to={card.link} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="card-hover" style={{
                                    position: 'relative',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    height: 'clamp(200px, 40vw, 350px)', // Fluid height (smaller on mobile)
                                    boxShadow: 'var(--shadow)',
                                    border: '3px solid var(--color-secondary)'
                                }}>
                                    {/* Background Image */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${card.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.5s ease'
                                    }}></div>

                                    {/* Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
                                    }}></div>

                                    {/* Content */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        padding: '1.5rem', // Reduced padding
                                        color: 'white'
                                    }}>
                                        <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', marginBottom: '0.3rem', color: 'white', lineHeight: 1.2 }}>{card.title}</h3>
                                        <p style={{ fontSize: '0.8rem', opacity: 0.9, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{card.desc}</p>
                                        <div style={{
                                            marginTop: '0.8rem',
                                            display: 'inline-block',
                                            padding: '0.4rem 0.8rem', // Compact button
                                            background: card.color,
                                            borderRadius: '50px',
                                            fontSize: '0.7rem',
                                            fontWeight: 600
                                        }}>
                                            Ver más →
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
