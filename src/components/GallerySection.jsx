import React, { useState } from 'react';

const GallerySection = () => {
    // Sanlúcar Image Collection
    const images = [
        { id: 1, src: 'https://images.unsplash.com/photo-1596443686812-7f4d0157435f?auto=format&fit=crop&q=80&w=800', alt: 'Carreras de Caballos', span: 'col-span-2 row-span-2' },
        { id: 2, src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800', alt: 'Atardecer en Doñana', span: 'col-span-1 row-span-1' },
        { id: 3, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', alt: 'Plaza del Cabildo', span: 'col-span-1 row-span-2' },
        { id: 4, src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800', alt: 'Manzanilla', span: 'col-span-1 row-span-1' },
        { id: 5, src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', alt: 'Bajo de Guía', span: 'col-span-2 row-span-1' },
        { id: 6, src: 'https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?auto=format&fit=crop&q=80&w=800', alt: 'Palacio Ducal', span: 'col-span-1 row-span-1' }
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="section-padding" style={{ background: '#fff' }}>
            <div style={{ width: '100%', maxWidth: 'calc(1440px + 4rem)', margin: '0 auto', padding: '0 5vw' }}>
                {/* Outer Blue Container */}
                <div className="gallery-card" style={{
                    border: '3px solid var(--color-primary)',
                    borderRadius: '40px',
                    padding: '3rem 2rem',
                    backgroundColor: 'white',
                    boxShadow: 'var(--shadow)'
                }}>
                    <style>{`
                        @media (max-width: 768px) {
                            .gallery-card {
                                padding: 2rem 1.5rem !important;
                            }
                            .gallery-card h2 {
                                font-size: 2rem !important;
                            }
                        }
                    `}</style>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            color: 'var(--color-secondary)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            letterSpacing: '2px'
                        }}>
                            El Encanto Visual
                        </span>
                        <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0', color: 'var(--color-primary)' }}>
                            Sanlúcar en Imágenes
                        </h2>
                        <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                            Perderse por sus calles, saborear sus manjares y contemplar sus atardeceres.
                        </p>
                    </div>

                    {/* CSS Grid Masonry Layout */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1rem',
                        autoRows: '200px'
                    }}>
                        {/* 
                            Note: Inline styles for masonry are tricky without Tailwind classes like 'col-span-2'.
                            We'll use a standard responsible grid for simplicity and robustness in this custom styling.
                        */}
                        {images.map((img, index) => (
                            <div
                                key={img.id}
                                onClick={() => setSelectedImage(img)}
                                style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    cursor: 'zoom-in',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    border: '3px solid var(--color-secondary)', // Inner Warm Border
                                    // Simple alternating pattern for interest
                                    gridColumn: window.innerWidth > 768 && (index === 0 || index === 4) ? 'span 2' : 'span 1',
                                    gridRow: window.innerWidth > 768 && (index === 0 || index === 2) ? 'span 2' : 'span 1',
                                    height: '100%'
                                }}
                                className="gallery-item"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                    color: 'white',
                                    fontWeight: 500,
                                    opacity: 0,
                                    transition: 'opacity 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                                >
                                    {img.alt}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lightbox Modal */}
                    {selectedImage && (
                        <div
                            style={{
                                position: 'fixed',
                                top: 0, left: 0, right: 0, bottom: 0,
                                background: 'rgba(0,0,0,0.9)',
                                zIndex: 9999,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '2rem'
                            }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                style={{
                                    maxWidth: '90%',
                                    maxHeight: '90vh',
                                    borderRadius: '8px',
                                    boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                                    border: '3px solid var(--color-secondary)' // Warm border for lightbox too
                                }}
                            />
                            <button style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '2rem',
                                cursor: 'pointer'
                            }}>✕</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Inject hover effect via style tag for simplicity */}
            <style>{`
                .gallery-item:hover div {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
};

export default GallerySection;
