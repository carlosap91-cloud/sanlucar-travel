import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero_sunset.png';

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/mapa?q=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <section id="inicio" className="container" style={{
            marginTop: '100px',
            marginBottom: '4rem'
        }}>
            <div className="hero-card" style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                backgroundColor: '#000',
                borderRadius: '30px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                border: '3px solid var(--color-primary)'
            }}>
                <style>{`
                    .hero-card {
                        height: 55vh;
                        min-height: 400px;
                    }
                    .hero-content {
                        padding: 0 clamp(1.5rem, 5vw, 4rem);
                    }
                    .hero-actions {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 1rem;
                        align-items: center;
                    }
                    .search-container {
                        flex: 1 1 300px;
                        max-width: 450px;
                    }
                    
                    @media (max-width: 768px) {
                        .hero-card {
                            height: auto !important;
                            min-height: auto !important;
                            padding: 3rem 1.5rem !important;
                            flex-direction: column;
                            text-align: center;
                        }
                        .hero-content {
                            padding: 0 !important;
                            width: 100%;
                        }
                        .hero-actions {
                            flex-direction: column;
                            align-items: stretch !important;
                            gap: 1.5rem !important;
                        }
                        .search-container {
                            flex: none !important;
                            width: 100% !important;
                            max-width: 100% !important;
                        }
                        h1 {
                            font-size: 2.5rem !important; 
                        }
                        /* Button full width on mobile */
                        a[href="/planear-viaje"] {
                            justify-content: center;
                            width: 100%;
                        }
                    }
                `}</style>

                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}>
                    {/* Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                    }}></div>
                </div>

                {/* Content Container */}
                <div className="hero-content" style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h1 style={{
                            color: 'white',
                            marginBottom: '1.5rem',
                        }}>
                            Descubre la Magia de <span style={{ color: '#FF8C00' }}>Sanlúcar</span>
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: 'rgba(255,255,255,0.95)',
                            marginBottom: '2.5rem',
                            maxWidth: '600px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}>
                            Gastronomía única, atardeceres infinitos y el alma de Doñana te esperan en la desembocadura del Guadalquivir.
                        </p>

                        {/* Action Area: Search + Trip Planner */}
                        <div className="hero-actions">
                            {/* Search Bar */}
                            <form onSubmit={handleSearch} className="search-container" style={{
                                display: 'flex',
                                background: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '100px',
                                padding: '5px 5px 5px 20px',
                                alignItems: 'center',
                                border: '1px solid rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(10px)',
                            }}>
                                <input
                                    type="text"
                                    placeholder="¿Qué buscas? (ej. Bajo de Guía)"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{
                                        border: 'none',
                                        background: 'transparent',
                                        outline: 'none',
                                        flex: 1,
                                        fontSize: '0.95rem',
                                        color: '#333',
                                        minWidth: 0
                                    }}
                                />
                                <button type="submit" style={{
                                    background: 'var(--color-secondary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    marginLeft: '10px',
                                    flexShrink: 0
                                }}>
                                    🔍
                                </button>
                            </form>

                            {/* Plan Trip CTA */}
                            <Link to="/planear-viaje" style={{
                                textDecoration: 'none',
                                background: 'rgba(255,255,255,0.2)',
                                border: '1px solid white',
                                color: 'white',
                                padding: '0.8rem 1.5rem',
                                borderRadius: '50px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                backdropFilter: 'blur(5px)',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'white';
                                    e.currentTarget.style.color = 'var(--color-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                                    e.currentTarget.style.color = 'white';
                                }}
                            >
                                ✨ Diseña tu Viaje
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
