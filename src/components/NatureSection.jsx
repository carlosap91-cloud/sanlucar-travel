import React from 'react';
import { Link } from 'react-router-dom';
import natureImg from '../assets/nature.jpg';

const NatureSection = () => {
    return (
        <section id="experiencias" className="section-padding">
            <div className="container">
                <div style={{
                    border: '3px solid var(--color-primary)',
                    borderRadius: '40px',
                    padding: '3rem 2rem',
                    backgroundColor: '#FDFBFA',
                    boxShadow: 'var(--shadow)',
                    className: 'nature-card'
                }}>
                    {/* Add responsive styles */}
                    <style>{`
                        @media (max-width: 768px) {
                            #experiencias .container > div {
                                padding: 2rem 1.5rem !important;
                            }
                            #experiencias h2 {
                                font-size: 2rem;
                            }
                            #experiencias p {
                                font-size: 1rem !important;
                            }
                        }
                    `}</style>
                    <div className="grid" style={{ alignItems: 'center', direction: 'rtl' }}>
                        <div className="animate-fade-up" style={{ direction: 'ltr' }}>
                            <span style={{ color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>La Naturaleza en Sanlúcar</span>
                            <h2 style={{ fontSize: '3rem', margin: '1rem 0 1.5rem' }}>Entre Salinas, <br />Pinares y <span style={{ color: 'var(--color-secondary)' }}>Doñana</span></h2>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                Un mosaico de paisajes donde la tierra se funde con el mar. Contempla el atardecer en los espejos de agua de las Salinas de Bonanza, respira el aroma del Pinar de la Algaida y siente la inmensidad de Doñana desde la otra orilla.
                                Un entorno vivo que te invita a desconectar y explorar.
                            </p>
                            <Link to="/experiencias" className="btn btn-primary">Ver Experiencias</Link>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src={natureImg}
                                alt="Salinas de Sanlúcar"
                                style={{ borderRadius: '30px', boxShadow: 'var(--shadow)', width: '100%', maxWidth: '500px', margin: '0 auto', aspectRatio: '3/2', objectFit: 'cover', border: '3px solid var(--color-secondary)' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NatureSection;
