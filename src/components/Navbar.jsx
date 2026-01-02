import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo_new.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            padding: '1rem 0',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                <Link to="/" className="logo" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img
                        src={logoImg}
                        alt="Sanlúcar Travel"
                        style={{
                            height: '65px',
                            width: '65px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                    />
                    Sanlúcar<span style={{ color: 'var(--color-secondary)' }}>Travel</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.8rem',
                        color: 'var(--color-primary)',
                        cursor: 'pointer',
                        zIndex: 1002
                    }}
                    aria-label="Menu"
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>

                {/* Desktop/Mobile Links */}
                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(0.8rem, 1.5vw, 2rem)'
                }}>
                    <ul style={{
                        display: 'flex',
                        gap: 'clamp(0.8rem, 1.5vw, 2rem)',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                    }}>
                        <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>Inicio</Link></li>
                        <li><Link to="/alojamiento" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>Alojamientos</Link></li>
                        <li><Link to="/gastronomia" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>Gastronomía</Link></li>
                        <li><Link to="/experiencias" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>Experiencias</Link></li>
                        <li><Link to="/movilidad" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>Movilidad</Link></li>
                    </ul>

                    <Link to="/planear-viaje" className="btn btn-secondary" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', fontSize: '0.9rem' }}>
                        Planear Viaje
                    </Link>
                </div>
            </div>

            {/* Mobile Styles Injection */}
            <style>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .nav-links::-webkit-scrollbar {
                    display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                .nav-links {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }

                @media (max-width: 1050px) {
                    .mobile-menu-btn {
                        display: block !important;
                    }
                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        bottom: 0;
                        width: 50%;
                        min-width: 200px;
                        align-items: flex-start !important;
                        height: 100vh;
                        background: white;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        padding: 6rem 2rem 2rem;
                        box-shadow: -5px 0 20px rgba(0,0,0,0.1);
                        transition: right 0.3s ease;
                        z-index: 1001;
                        overflow-y: auto;
                    }
                    .nav-links.active {
                        right: 0;
                    }
                    .nav-links ul {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1.5rem !important;
                        margin-bottom: 2rem !important;
                        width: 100%;
                    }
                    .nav-links ul a {
                        font-size: 1.2rem;
                        display: block;
                        padding: 0.5rem 0;
                        color: var(--color-primary);
                        font-weight: 500;
                        border-bottom: 1px solid #f0f0f0;
                        width: 100%;
                    }
                    .nav-links .btn {
                        width: fit-content;
                        margin: 1rem 0 0;
                        display: flex;
                        justify-content: flex-start;
                        color: white !important;
                        border-bottom: none !important;
                        padding: 0.8rem 2rem;
                        font-weight: 700;
                        text-align: left;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
