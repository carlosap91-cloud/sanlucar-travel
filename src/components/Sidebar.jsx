import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo_new.png';

const Sidebar = () => {
    const location = useLocation();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { name: 'Inicio', path: '/', icon: '🏠' },
        { name: 'Gastronomía', path: '/gastronomia', icon: '🍷' },
        { name: 'Alojamientos', path: '/alojamiento', icon: '🏨' },
        { name: 'Experiencias', path: '/experiencias', icon: '✨' },
        { name: 'Agenda / Eventos', path: '/eventos', icon: '📅' },
        { name: 'Historia', path: '/historia', icon: '📜' },
        { name: 'Blog / Noticias', path: '/blog', icon: '📰' },
        { name: 'Movilidad', path: '/movilidad', icon: '🚌' },
        { name: 'Mapa', path: '/mapa', icon: '🗺️' },
        { name: 'Contacto', path: '/contacto', icon: '✉️' },
    ];

    return (
        <>
            {/* Mobile Toggle Button (Fixed on screen) */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                style={{
                    position: 'fixed',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 3000,
                    background: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.5rem',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    display: 'none', // Hidden on desktop via CSS media query
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    width: '45px',
                    height: '45px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#333'
                }}
                className="mobile-toggle"
            >
                {isMobileOpen ? '✕' : '☰'}
            </button>

            {/* Sidebar Container */}
            <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`} style={{
                width: '260px',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                background: 'white',
                borderRight: '1px solid #eee',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 2500,
                transition: 'transform 0.3s ease',
                overflowY: 'auto'
            }}>
                {/* Logo Area - NOW CLICKABLE */}
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', borderBottom: '1px solid #f9f9f9', minHeight: '130px', cursor: 'pointer' }}>
                        {/* Centered Logo & Title */}
                        <img
                            src={logoImg}
                            alt="Logo"
                            style={{ width: '70px', height: 'auto', objectFit: 'contain' }}
                        />
                        <div style={{ textAlign: 'center', lineHeight: 1.2 }}>
                            <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--color-primary)' }}>Sanlúcar</h2>
                            <span style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '1px' }}>TRAVEL</span>
                        </div>
                    </div>
                </Link>

                {/* Navigation Menu */}
                <nav style={{ flex: 1, padding: '1rem 1rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={() => setIsMobileOpen(false)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '0.8rem 1rem',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        color: isActive(item.path) ? 'white' : '#555',
                                        background: isActive(item.path) ? 'var(--color-primary)' : 'transparent',
                                        fontWeight: isActive(item.path) ? 700 : 500,
                                        transition: 'all 0.2s ease',
                                        fontSize: '0.95rem',
                                        borderLeft: isActive(item.path) ? '4px solid var(--color-secondary)' : '4px solid transparent',
                                        boxShadow: isActive(item.path) ? '0 4px 15px rgba(0, 51, 102, 0.2)' : 'none'
                                    }}
                                    className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                                >
                                    <span>{item.icon}</span>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Sidebar Footer / Admin */}
                <div style={{ padding: '1.5rem', borderTop: '1px solid #f9f9f9' }}>
                    <Link to="/admin" style={{
                        display: 'block',
                        padding: '0.8rem',
                        textAlign: 'center',
                        color: 'white',
                        background: '#333',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '0.9rem'
                    }}>
                        🔐 Panel Admin
                    </Link>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    onClick={() => setIsMobileOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 900
                    }}
                />
            )}

            {/* Global CSS Injection for Sidebar Layout */}
            <style>{`
                .nav-item:not(.active):hover {
                    background: #f8f9fa !important;
                    color: var(--color-primary) !important;
                    transform: translateX(5px);
                }
                .nav-item.active:hover {
                    filter: brightness(1.1); /* Subtle highlight for active item */
                }
                @media (max-width: 900px) {
                    .sidebar {
                        transform: translateX(-100%);
                    }
                    .sidebar.open {
                        transform: translateX(0);
                    }
                    .mobile-toggle {
                        display: flex !important; /* Ensure flex for centering */
                    }
                }
            `}</style>
        </>
    );
};

export default Sidebar;
