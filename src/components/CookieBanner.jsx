import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    // Cookie Preferences State
    const [preferences, setPreferences] = useState({
        technical: true, // Always true
        analytics: true,
        social: true
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const savePreferences = (status) => {
        localStorage.setItem('cookieConsent', status);
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        setIsVisible(false);
        setShowSettings(false);
    };

    const handleAcceptAll = () => {
        setPreferences({ technical: true, analytics: true, social: true });
        savePreferences('accepted');
    };

    const handleRejectAll = () => {
        setPreferences({ technical: true, analytics: false, social: false });
        savePreferences('rejected'); // Keep technical enabled logic internally
    };

    const handleSaveSettings = () => {
        savePreferences('custom');
    };

    const togglePreference = (key) => {
        if (key === 'technical') return;
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    if (!isVisible) return null;

    // --- Settings Modal View ---
    if (showSettings) {
        return (
            <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(0,0,0,0.5)', zIndex: 10000,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div style={{
                    background: 'white', padding: '2rem', borderRadius: '12px',
                    maxWidth: '600px', width: '90%', maxHeight: '90vh', overflowY: 'auto',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}>
                    <h2 style={{ marginTop: 0 }}>Panel de Configuración de Cookies</h2>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>
                        Puedes cambiar tus preferencias de cookies en cualquier momento.
                        Para más información, consulta nuestra <Link to="/cookies">Política de Cookies</Link>.
                    </p>

                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Technical */}
                        <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <strong>Cookies técnicas (Necesarias)</strong>
                                <span style={{ color: 'green', fontSize: '0.8rem', fontWeight: 'bold' }}>SIEMPRE ACTIVAS</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', margin: '0.5rem 0', color: '#555' }}>
                                Son aquellas que permiten navegar a través del sitio Web y utilizar sus diferentes funciones, como el buscador, y no pueden ser desactivadas.
                            </p>
                        </div>

                        {/* Analysis */}
                        <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <strong>Cookies de análisis o medición</strong>
                                <button
                                    onClick={() => togglePreference('analytics')}
                                    style={{
                                        background: preferences.analytics ? 'var(--color-primary)' : '#ccc',
                                        color: 'white', border: 'none', padding: '0.4rem 1rem', borderRadius: '20px', cursor: 'pointer'
                                    }}
                                >
                                    {preferences.analytics ? 'ACTIVADO' : 'DESACTIVADO'}
                                </button>
                            </div>
                            <p style={{ fontSize: '0.85rem', margin: '0.5rem 0', color: '#555' }}>
                                Permiten medir y analizar la utilización del sitio web para mejorarlo.
                            </p>
                        </div>

                        {/* Social */}
                        <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <strong>Cookies sociales</strong>
                                <button
                                    onClick={() => togglePreference('social')}
                                    style={{
                                        background: preferences.social ? 'var(--color-primary)' : '#ccc',
                                        color: 'white', border: 'none', padding: '0.4rem 1rem', borderRadius: '20px', cursor: 'pointer'
                                    }}
                                >
                                    {preferences.social ? 'ACTIVADO' : 'DESACTIVADO'}
                                </button>
                            </div>
                            <p style={{ fontSize: '0.85rem', margin: '0.5rem 0', color: '#555' }}>
                                Establecidas por las redes sociales para permitir compartir contenido con amigos y redes.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <button onClick={handleRejectAll} style={{ border: 'none', background: 'transparent', color: '#666', cursor: 'pointer', textDecoration: 'underline' }}>
                            Rechazar Todo
                        </button>
                        <button
                            onClick={handleSaveSettings}
                            className="btn btn-primary"
                        >
                            Guardar Preferencias
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // --- Simple Banner View ---
    return (
        <div style={{
            position: 'fixed', bottom: 0, left: 0, width: '100%',
            background: 'white', borderTop: '1px solid #eee', padding: '1.5rem',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.1)', zIndex: 9999
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                        El sitio Web <strong>https://www.sanlucarturismo.com</strong> utiliza cookies propias y de terceros para su correcto funcionamiento y para fines analíticos.
                        Al hacer clic en el botón Aceptar, acepta el uso de estas tecnologías y el procesamiento de sus datos para estos propósitos.
                        Más info en <Link to="/cookies">Política de Cookies</Link>.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <button
                        onClick={() => setShowSettings(true)}
                        style={{
                            padding: '0.6rem 1.2rem', background: 'transparent',
                            border: '1px solid #999', borderRadius: '5px', cursor: 'pointer'
                        }}
                    >
                        Configurar
                    </button>
                    <button
                        onClick={handleRejectAll}
                        style={{
                            padding: '0.6rem 1.2rem', background: 'transparent',
                            border: '1px solid #999', borderRadius: '5px', cursor: 'pointer'
                        }}
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={handleAcceptAll}
                        className="btn btn-primary"
                    >
                        ACEPTAR TODAS LAS COOKIES
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
