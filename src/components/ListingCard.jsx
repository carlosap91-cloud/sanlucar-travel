import React from 'react';

const ListingCard = ({ image, title, subtitle, rating, description, price, onAction, actionLabel = "Ver disponibilidad", socials, borderColor }) => {
    return (
        <>
            <div className="listing-card" style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: borderColor ? `3px solid ${borderColor}` : '1px solid #f3f4f6',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative'
            }}
                onMouseEnter={(e) => {
                    if (window.innerWidth > 768) { // Only animate on desktop
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                    }
                }}
                onMouseLeave={(e) => {
                    if (window.innerWidth > 768) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                    }
                }}
            >
                {/* Image Container */}
                <div className="card-image-container" style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                        src={image}
                        alt={title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {price && (
                        <div className="card-price-tag" style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            padding: '5px 12px',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            color: 'var(--color-primary)',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}>
                            {price}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="card-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <div>
                            {rating && (
                                <div style={{ display: 'flex', gap: '2px', color: '#fbbf24', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={i < Math.floor(rating) ? "fas fa-star" : "far fa-star"}></i>
                                    ))}
                                </div>
                            )}
                            <h3 className="card-title" style={{ margin: 0, fontSize: '1.25rem', color: '#1f2937' }}>{title}</h3>
                            {subtitle && <p className="card-subtitle" style={{ margin: '0.3rem 0 0', fontSize: '0.9rem', color: '#9ca3af' }}>{subtitle}</p>}
                        </div>
                    </div>

                    <p className="card-description" style={{
                        color: '#4b5563',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem',
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        flexGrow: 1
                    }}>
                        {description}
                    </p>

                    {/* Socials & Action */}
                    <div style={{ marginTop: 'auto' }}>
                        {socials && (
                            <div className="card-socials" style={{ display: 'flex', gap: '10px', marginBottom: '1.2rem', justifyContent: 'flex-start' }}>
                                {Object.entries(socials).map(([net, link]) => (
                                    <a key={net} href={link} target="_blank" rel="noreferrer" style={{
                                        width: '32px', height: '32px', background: '#f3f4f6', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280',
                                        fontSize: '0.9rem', textDecoration: 'none', transition: '0.2s'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = 'white' }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.color = '#6b7280' }}
                                    >
                                        <i className={`fab fa-${net}`}></i>
                                    </a>
                                ))}
                            </div>
                        )}

                        <button
                            onClick={onAction}
                            className="card-button"
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                background: 'var(--color-primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'background 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-primary-dark)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-primary)'}
                        >
                            {actionLabel}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Optimization Styles */}
            <style>{`
                /* Default Desktop Styles (preserved by inline styles mostly, but defaults here) */
                .card-image-container { height: 220px; width: 100%; }
                
                @media (max-width: 768px) {
                    .listing-card {
                        flex-direction: row !important; /* Horizontal Layout */
                        height: 160px !important; /* Fixed Compact Height */
                        align-items: stretch;
                    }
                    
                    .card-image-container {
                        width: 140px !important; /* Fixed Width for Image */
                        height: 100% !important;
                        flex-shrink: 0;
                    }

                    .card-content {
                        padding: 1rem !important; /* Smaller padding */
                        overflow: hidden; /* Prevent spill */
                    }

                    .card-title {
                        font-size: 1rem !important; /* Smaller Title */
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .card-subtitle {
                        font-size: 0.8rem !important;
                    }

                    .card-description {
                        display: none !important; /* Hide description to save space */
                    }

                    .card-socials {
                        display: none !important; /* Hide socials on list view to save space */
                    }
                    
                    /* Compact Button */
                    .card-button {
                        padding: 0.5rem !important;
                        font-size: 0.8rem !important;
                        margin-top: 0.5rem;
                    }
                    
                    .card-price-tag {
                        padding: 2px 8px !important;
                        font-size: 0.7rem !important;
                        bottom: 5px !important;
                        right: 5px !important;
                    }
                }
            `}</style>
        </>
    );
};

export default ListingCard;
