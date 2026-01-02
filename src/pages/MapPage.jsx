import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const MapPage = () => {
    const [searchParams] = useSearchParams();
    const initialQuery = searchParams.get('q') || '';

    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [mapUrl, setMapUrl] = useState("https://maps.google.com/maps?q=Sanl%C3%BAcar%20de%20Barrameda&t=&z=14&ie=UTF8&iwloc=&output=embed");

    useEffect(() => {
        if (initialQuery) {
            const encodedQuery = encodeURIComponent(initialQuery + ", Sanlúcar de Barrameda");
            setMapUrl(`https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`);
        }
    }, [initialQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        const encodedQuery = encodeURIComponent(searchQuery + ", Sanlúcar de Barrameda");
        setMapUrl(`https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`);
    };

    const handleDirections = () => {
        if (!searchQuery) return;
        // Opens native Google Maps for directions
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(searchQuery + ", Sanlúcar de Barrameda")}`, '_blank');
    };

    return (
        <div style={{ paddingTop: '2rem', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <section className="container" style={{ position: 'relative', paddingBottom: '4rem' }}>
                <div className="container">
                    {/* Header Text */}
                    <div className="text-center" style={{ marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                            Mapa <span style={{ color: 'var(--color-secondary)' }}>Google</span>
                        </h1>
                        <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                            Busca calles, restaurantes o monumentos directamente en Google Maps.
                        </p>
                    </div>

                    {/* Map Container */}
                    <div style={{
                        position: 'relative',
                        height: '600px',
                        width: '100%',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        border: '4px solid white'
                    }}>
                        {/* Search Overlay - Responsive */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '50%', // Center horizontally
                            transform: 'translateX(-50%)', // Center alignment
                            zIndex: 10,
                            background: 'white',
                            padding: '8px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            display: 'flex',
                            gap: '8px',
                            width: '90%',
                            maxWidth: '400px',
                            flexWrap: 'nowrap', // Keep in one line
                            alignItems: 'center'
                        }}>
                            <form onSubmit={handleSearch} style={{ display: 'flex', flex: 1, gap: '5px' }}>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Buscar en Sanlúcar..."
                                    style={{
                                        flex: 1,
                                        border: '1px solid #eee',
                                        background: '#f9f9f9',
                                        borderRadius: '8px',
                                        padding: '8px 12px',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        width: '100%' // Ensure input takes space
                                    }}
                                />
                                <button type="submit" style={{
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    flexShrink: 0
                                }}>
                                    🔍
                                </button>
                            </form>
                            <button onClick={handleDirections} title="Cómo llegar" style={{
                                background: 'white',
                                color: 'var(--color-primary)',
                                border: '1px solid var(--color-primary)',
                                borderRadius: '8px',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                fontSize: '1.2rem',
                                flexShrink: 0
                            }}>
                                ↱
                            </button>
                        </div>

                        {/* The Iframe */}
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Sanlúcar"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MapPage;
