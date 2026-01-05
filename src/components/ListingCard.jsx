import React from 'react';

const ListingCard = ({ image, title, subtitle, rating, description, price, onAction, actionLabel = "Ver disponibilidad", actions, socials, borderColor, className = "" }) => {
    return (
        <>
            <div className={`listing-card card-hover-effect ${className}`} style={{
                background: 'white',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
                border: borderColor ? `3px solid ${borderColor}` : '1px solid #f3f4f6',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative'
            }}>
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
                            <h3 className="card-title" style={{ margin: 0, fontSize: '1.25rem', color: 'var(--color-primary)' }}>{title}</h3>
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
                                    <a key={net} href={link} target="_blank" rel="noreferrer" aria-label={`Visitar ${net}`} style={{
                                        width: '32px', height: '32px', background: '#f3f4f6', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280',
                                        fontSize: '0.9rem', textDecoration: 'none', transition: '0.2s'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = 'white' }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.color = '#6b7280' }}
                                    >
                                        <i className={net === 'website' ? "fas fa-globe" : `fab fa-${net}`}></i>
                                    </a>
                                ))}
                            </div>
                        )}

                        {actions ? (
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {actions.map((action, idx) => (
                                    <button
                                        key={idx}
                                        onClick={action.onClick}
                                        className="card-button"
                                        style={{
                                            flex: 1,
                                            padding: '0.8rem',
                                            background: action.secondary ? '#f3f4f6' : 'var(--color-primary)',
                                            color: action.secondary ? '#4b5563' : 'white',
                                            border: 'none',
                                            borderRadius: 'var(--radius-btn)',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s'
                                        }}
                                        onMouseEnter={(e) => !action.secondary && (e.currentTarget.style.background = 'var(--color-primary-dark)')}
                                        onMouseLeave={(e) => !action.secondary && (e.currentTarget.style.background = 'var(--color-primary)')}
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <button
                                onClick={onAction}
                                aria-label={`${actionLabel} para ${title}`}
                                className="card-button"
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 'var(--radius-btn)',
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
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Optimization Styles */}
            <style>{`
                /* Default Desktop Styles (preserved by inline styles mostly, but defaults here) */
                .card-image-container { height: 220px; width: 100%; }
                
                @media (max-width: 768px) {
                    /* Only apply horizontal layout if NOT compact mode */
                    .listing-card:not(.compact-card):not(.compact-card-mobile) {
                        flex-direction: row !important;
                        height: 140px !important; /* Fixed height for horizontal layout */
                        align-items: center !important;
                        margin-bottom: 1rem;
                        border-radius: 16px;
                    }
                    
                    .listing-card:not(.compact-card):not(.compact-card-mobile) .card-image-container {
                        width: 130px !important;
                        height: 100% !important;
                        flex-shrink: 0;
                    }

                    .listing-card:not(.compact-card):not(.compact-card-mobile) .card-content {
                        padding: 0.8rem 1rem !important;
                        display: flex !important;
                        flex-direction: column !important;
                        justify-content: center !important;
                        text-align: left !important;
                    }
                    
                    /* Common mobile adjustments that apply to BOTH modes but might need tweaking */
                    .card-title {
                        font-size: 1.1rem !important;
                    }

                    .card-subtitle {
                        font-size: 0.85rem !important;
                    }

                    /* Hide description on mobile to save space */
                    .card-description {
                        display: none !important;
                    }

                    /* Hide social buttons on mobile to save space */
                    .card-socials {
                        display: none !important;
                    }
                    
                    /* Compact mode specific adjustments - ONLY FOR MOBILE OR WHEN EXPLICITLY COMPACT */
                    .listing-card.compact-card-mobile .card-image-container {
                         height: 120px !important;
                    }
                    
                    .listing-card.compact-card-mobile .card-content {
                        padding: 0.8rem !important;
                    }
                    
                    .listing-card.compact-card-mobile .card-button {
                        padding: 0.4rem !important;
                        font-size: 0.8rem !important;
                    }

                    /* On Desktop, revert compact-card-mobile to normal if screen is large */
                    @media (min-width: 769px) {
                        .listing-card.compact-card-mobile .card-image-container {
                            height: 220px !important;
                        }
                        .listing-card.compact-card-mobile .card-content {
                            padding: 1.5rem !important;
                        }
                        .listing-card.compact-card-mobile .card-button {
                            padding: 0.8rem !important;
                            font-size: 1rem !important;
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default ListingCard;
