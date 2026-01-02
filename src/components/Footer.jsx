import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo_new.png';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-primary)', color: 'white', padding: '2rem 0 1rem', fontSize: '0.85rem' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: '1.5rem', gap: '1.5rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                            <img src={logoImg} alt="Sanlúcar Travel" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                            <h3 style={{ color: 'white', fontSize: '1.1rem', margin: 0 }}>SANLÚCAR TRAVEL</h3>
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
                    <p>&copy; 2025 Sanlúcar Travel. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
