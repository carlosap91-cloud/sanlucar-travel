import React from 'react';

const EventsPage = () => {
    return (
        <div style={{ paddingTop: '2rem', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                        Agenda <span style={{ color: 'var(--color-secondary)' }}>Cultural</span>
                    </h1>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Carreras de caballos, Feria de la Manzanilla, festivales de música... siente el pulso de Sanlúcar.
                    </p>
                </div>

                <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Event 1 */}
                    <div className="glass card-hover-effect" style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)', border: '3px solid var(--color-secondary)' }}>
                        <img src="https://images.unsplash.com/photo-1547623641-82fbc7107e6c?auto=format&fit=crop&q=80&w=800" alt="Feria" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>Mayo 2026</span>
                            <h3 style={{ margin: '1rem 0 0.5rem', color: 'var(--color-primary)' }}>Feria de la Manzanilla</h3>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>La fiesta por excelencia. Casetas, farolillos y el mejor ambiente a orillas del Guadalquivir.</p>
                            <button style={{ marginTop: '1rem', border: 'none', background: 'transparent', color: 'var(--color-secondary)', fontWeight: 600, cursor: 'pointer' }}>Más info →</button>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="glass card-hover-effect" style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)', border: '3px solid var(--color-secondary)' }}>
                        <img src="https://images.unsplash.com/photo-1534317926135-427ae247ec65?auto=format&fit=crop&q=80&w=800" alt="Carreras" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>Agosto 2026</span>
                            <h3 style={{ margin: '1rem 0 0.5rem', color: 'var(--color-primary)' }}>Carreras de Caballos</h3>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>El mayor espectáculo de las playas del sur. Interés Turístico Internacional.</p>
                            <button style={{ marginTop: '1rem', border: 'none', background: 'transparent', color: 'var(--color-secondary)', fontWeight: 600, cursor: 'pointer' }}>Más info →</button>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="glass card-hover-effect" style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)', border: '3px solid var(--color-secondary)' }}>
                        <img src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800" alt="Jazz" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>Julio 2026</span>
                            <h3 style={{ margin: '1rem 0 0.5rem', color: 'var(--color-primary)' }}>Festival de Jazz</h3>
                            <p style={{ color: '#666', fontSize: '0.9rem' }}>Noches mágicas de música en los Jardines del Palacio Municipal.</p>
                            <button style={{ marginTop: '1rem', border: 'none', background: 'transparent', color: 'var(--color-secondary)', fontWeight: 600, cursor: 'pointer' }}>Más info →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
