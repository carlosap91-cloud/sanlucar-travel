import React from 'react';
import { Link } from 'react-router-dom';
import gastronomyImg from '../assets/gastronomy.png';

const GastronomySection = () => {
    return (
        <section id="gastronomia" className="section-padding" style={{ background: 'var(--color-bg-alt)' }}>
            <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 5vw' }}>
                <div style={{
                    border: '3px solid var(--color-primary)',
                    borderRadius: '40px',
                    padding: '3rem 2rem',
                    backgroundColor: 'white',
                    boxShadow: 'var(--shadow)',
                    className: 'gastronomy-card' // Added class for targeting
                }}>
                    {/* Add responsive styles */}
                    <style>{`
                        @media (max-width: 768px) {
                            #gastronomia .container > div {
                                padding: 2rem 1.5rem !important;
                            }
                            #gastronomia h2 {
                                font-size: 2rem;
                            }
                            #gastronomia p {
                                font-size: 1rem !important;
                            }
                        }
                    `}</style>
                    <div className="grid" style={{ alignItems: 'center' }}>
                        <div className="animate-fade-up">
                            <span style={{ color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Capital Española de la Gastronomía 2022</span>
                            <h2 style={{ margin: '1rem 0 1.5rem' }}> Un Festín para <br />los <span style={{ color: 'var(--color-secondary)' }}>Sentidos</span></h2>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                Sanlúcar es mundialmente conocida por sus Langostinos de Sanlúcar y su Manzanilla, criada bajo el velo de flor.
                                Pero su oferta va mucho más allá: guisos marineros, pescados de estero y una tradición culinaria que fusiona historia y sabor en cada tapa.
                                Descubre por qué fuimos Capital Gastronómica.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Link to="/restaurantes" className="btn btn-secondary">Explorar Restaurantes</Link>
                                <Link to="/bodegas" className="btn btn-primary" style={{ fontWeight: 600 }}>Explorar Bodegas</Link>
                            </div>
                        </div>
                        <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                            <img
                                src={gastronomyImg}
                                alt="Gastronomía Sanlúcar"
                                style={{ borderRadius: '30px', boxShadow: 'var(--shadow)', width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block', border: '3px solid var(--color-secondary)' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GastronomySection;
