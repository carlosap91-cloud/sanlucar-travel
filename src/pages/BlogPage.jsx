import React from 'react';

const BlogPage = () => {
    return (
        <div style={{ paddingTop: '2rem', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                        El Rincón del <span style={{ color: 'var(--color-secondary)' }}>Sanluqueño</span>
                    </h1>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Consejos locales, secretos gastronómicos y actualidad de nuestra ciudad.
                    </p>
                </div>

                <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Post 1 */}
                    <div className="glass" style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)', cursor: 'pointer', transition: 'transform 0.3s' }} onClick={() => { }}>
                        <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800" alt="Plaza Cabildo" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span style={{ color: 'var(--color-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>Gastronomía • 2 Ene 2026</span>
                            <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.4rem' }}>La ruta de la tapa perfecta en Plaza Cabildo</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>Descubre qué pedir en cada bar: desde las Tortillitas de Balbino hasta las Papas de La Gitana.</p>
                            <span style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--color-primary)', fontWeight: 600 }}>Leer más →</span>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="glass" style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)', cursor: 'pointer', transition: 'transform 0.3s' }} onClick={() => { }}>
                        <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=800" alt="Puesta de Sol" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span style={{ color: 'var(--color-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>Guías • 28 Dic 2025</span>
                            <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.4rem' }}>Los 5 mejores lugares para ver la puesta de sol</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>No solo Bajo de Guía existe. Te enseñamos rincones secretos para el atardecer perfecto.</p>
                            <span style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--color-primary)', fontWeight: 600 }}>Leer más →</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
