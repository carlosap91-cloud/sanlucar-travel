import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const ServiceDetailPage = ({ collectionName }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dataContext = useData();

    // Select the correct list based on prop
    const list = dataContext[collectionName] || [];
    const item = list.find(i => String(i.id) === id);

    const [activeTab, setActiveTab] = useState('info');

    if (!item) {
        return <div style={{ padding: '4rem', textAlign: 'center' }}>Cargando o no encontrado...</div>;
    }

    const tabs = [
        { id: 'info', label: 'Información' },
        { id: 'menu', label: 'Carta / Menú' },
        { id: 'photos', label: 'Fotos' },
        { id: 'reviews', label: 'Opiniones' }
    ];

    return (
        <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingBottom: '80px' }}>
            {/* 1. HERO IMAGE */}
            <div style={{ position: 'relative', height: '40vh', minHeight: '300px' }}>
                <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        position: 'absolute', top: '20px', left: '20px',
                        background: 'white', border: 'none', borderRadius: '50%',
                        width: '40px', height: '40px', cursor: 'pointer',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.2)', fontSize: '1.2rem'
                    }}
                >
                    ←
                </button>
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, width: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '2rem 1.5rem 1rem', color: 'white'
                }}>
                    <h1 style={{ margin: 0, fontSize: '2rem' }}>{item.name}</h1>
                    <p style={{ opacity: 0.9, marginTop: '0.5rem' }}>{item.address}</p>
                </div>
            </div>

            {/* 2. TABS NAV */}
            <div style={{ background: 'white', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <div className="container" style={{ display: 'flex', overflowX: 'auto' }}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                flex: 1,
                                padding: '1rem',
                                border: 'none',
                                background: 'none',
                                borderBottom: activeTab === tab.id ? '3px solid var(--color-primary)' : '3px solid transparent',
                                color: activeTab === tab.id ? 'var(--color-primary)' : '#666',
                                fontWeight: activeTab === tab.id ? 700 : 400,
                                whiteSpace: 'nowrap',
                                cursor: 'pointer'
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3. CONTENT AREA */}
            <div className="container section-padding">

                {/* INFO TAB */}
                {activeTab === 'info' && (
                    <div className="fade-in">
                        <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                            <h3 style={{ marginTop: 0 }}>Sobre este lugar</h3>
                            <p style={{ lineHeight: '1.8', color: '#555' }}>
                                {item.description || 'Sin descripción disponible.'}
                            </p>

                            {item.cuisine && (
                                <div style={{ marginTop: '1rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {item.cuisine.map(tag => (
                                        <span key={tag} style={{ background: '#eee', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 style={{ marginTop: 0 }}>Ubicación y Contacto</h3>
                            {item.mapLink && (
                                <a href={item.mapLink} target="_blank" rel="noreferrer" style={{ display: 'block', marginBottom: '1rem', color: 'var(--color-primary)', textDecoration: 'underline' }}>
                                    📍 Ver en Google Maps
                                </a>
                            )}
                            {item.socials && (
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {Object.entries(item.socials).map(([net, link]) => (
                                        <a key={net} href={link} className="btn-social">
                                            <i className={`fab fa-${net}`}></i>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* MENU TAB */}
                {activeTab === 'menu' && (
                    <div className="fade-in">
                        {item.menuLink ? (
                            <div style={{ textAlign: 'center', padding: '2rem' }}>
                                <p>Puedes ver la carta completa aquí:</p>
                                <a href={item.menuLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                                    📜 Ver Carta Digital
                                </a>
                            </div>
                        ) : (
                            <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🍽️</div>
                                <p>Carta digital no disponible por el momento.</p>
                            </div>
                        )}
                    </div>
                )}

                {/* PHOTOS TAB - Placeholder Grid */}
                {activeTab === 'photos' && (
                    <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} style={{ aspectRatio: '1', background: '#ddd', borderRadius: '8px', overflow: 'hidden' }}>
                                <img src={`https://source.unsplash.com/random/400x400?food,restaurant&sig=${i}`} alt="Food" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                )}

                {/* REVIEWS TAB - Simple List */}
                {activeTab === 'reviews' && (
                    <div className="fade-in">
                        {item.reviews && item.reviews.length > 0 ? (
                            item.reviews.map((rev, idx) => (
                                <div key={idx} className="card" style={{ padding: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <strong>{rev.user}</strong>
                                        <span style={{ color: '#fbbf24' }}>{'★'.repeat(rev.rating)}</span>
                                    </div>
                                    <p style={{ margin: 0, color: '#555' }}>"{rev.comment}"</p>
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: 'center', color: '#999' }}>Aún no hay opiniones.</p>
                        )}
                    </div>
                )}
            </div>

            {/* FLOATING ACTION BUTTON (Mobile) */}
            <div style={{
                position: 'fixed', bottom: '0', left: '0', width: '100%', padding: '1rem',
                background: 'white', borderTop: '1px solid #ddd', display: 'flex', gap: '1rem', zIndex: 999
            }}>
                <button
                    onClick={() => window.open(`tel:666111222`, '_self')} // Fake number for demo
                    style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: '#eee', border: 'none', fontWeight: 600, fontSize: '1rem' }}
                >
                    📞 Llamar
                </button>
                <button
                    onClick={() => window.open(`https://wa.me/34600000000?text=Quiero reservar en ${item.name}`, '_blank')}
                    style={{ flex: 2, padding: '1rem', borderRadius: '12px', background: 'var(--color-primary)', color: 'white', border: 'none', fontWeight: 700, fontSize: '1rem' }}
                >
                    📅 Reservar Mesa
                </button>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
