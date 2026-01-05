import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo_new.png';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-primary)', color: 'white', padding: '2rem 0 1rem', fontSize: '0.85rem' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: '1.5rem', gap: '1.5rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                            <div style={{
                                width: '48px',
                                minWidth: '48px', // Prevent shrinking
                                height: '48px',
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                overflow: 'hidden',
                                padding: '6px', // Balanced padding
                                flexShrink: 0 // Crucial: prevents circle from squashing on mobile
                            }}>
                                <img
                                    src={logoImg}
                                    alt="Sanlúcar Travel"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        display: 'block',
                                        transform: 'translateX(-2px)' // Increased offset for better optical centering
                                    }}
                                />
                            </div>
                            <h3 style={{ color: 'white', fontSize: '1.2rem', margin: 0, letterSpacing: '0.5px' }}>SANLÚCAR TRAVEL</h3>
                        </div>
                        <p style={{ opacity: 0.7, lineHeight: '1.4' }}>
                            Tu guía definitiva para descubrir los tesoros de Sanlúcar de Barrameda.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.8rem', fontSize: '1rem' }}>Menú</h4>
                        <ul style={{ opacity: 0.7, lineHeight: '1.8' }}>
                            <li><a href="#gastronomia">Gastronomía</a></li>
                            <li><a href="#experiencias">Experiencias</a></li>
                            <li><Link to="/mapa" style={{ color: 'white' }}>Mapa</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.8rem', fontSize: '1rem' }}>Legal</h4>
                        <ul style={{ opacity: 0.7, lineHeight: '1.8' }}>
                            <li><Link to="/privacidad" style={{ color: 'white' }}>Privacidad</Link></li>
                            <li><Link to="/cookies" style={{ color: 'white' }}>Cookies</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.8rem', fontSize: '1rem' }}>Contacto</h4>
                        <ul style={{ opacity: 0.7, lineHeight: '1.8' }}>
                            <li>Plaza del Cabildo, s/n</li>
                            <li>info@sanlucartravel.com</li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', textAlign: 'center', opacity: 0.5, fontSize: '0.75rem' }}>
                    <p>&copy; 2025 Sanlúcar Travel. Todos los derechos reservados. <span style={{ opacity: 0.3, fontSize: '0.6rem' }}>v2.0</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
