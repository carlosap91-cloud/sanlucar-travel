import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingEngine = () => {
    const navigate = useNavigate();
    const services = [
        {
            id: 1,
            title: 'Restaurantes',
            icon: '🍽️',
            desc: 'Reserva mesa en los mejores restaurantes de Bajo de Guía.',
            tag: 'Más popular',
            path: '/restaurantes'
        },
        {
            id: 2,
            title: 'Alojamientos',
            icon: '🏨',
            desc: 'Desde palacios históricos hasta modernos hoteles con vistas.',
            tag: 'Premium',
            path: '/alojamiento'
        },
        {
            id: 3,
            title: 'Transporte',
            icon: '🚤',
            desc: 'Cruza el Guadalquivir hacia Doñana o reserva un traslado.',
            tag: 'Esencial',
            path: '/transporte'
        },
        {
            id: 4,
            title: 'Bodegas',
            icon: '🍷',
            desc: 'Visitas guiadas y catas en las catedrales de la Manzanilla.',
            tag: 'Cultura',
            path: '/bodegas'
        },
        {
            id: 5,
            title: 'Guías Locales',
            icon: '👤',
            desc: 'Expertos que te descubrirán los secretos mejor guardados.',
            tag: 'Top Ventas',
            path: '/guias'
        },
        {
            id: 6,
            title: 'Rutas a Caballo',
            icon: '🐎',
            desc: 'Un paseo inolvidable por la orilla del mar al atardecer.',
            tag: 'Aventura',
            path: '/caballos'
        }
    ];

    return (
        <section id="reservas" className="section-padding" style={{ background: 'var(--color-bg-alt)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Todo lo que <span style={{ color: 'var(--color-secondary)' }}>Necesitas</span></h2>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
                        Hemos seleccionado los mejores servicios para que tu estancia en Sanlúcar sea perfecta. Reserva directamente aquí.
                    </p>
                </div>

                <div className="grid grid-compact">
                    {services.map((service) => (
                        <div key={service.id} className="glass" style={{
                            padding: 'clamp(1.5rem, 3vw, 3rem) 1.5rem', // Dynamic padding
                            borderRadius: '24px',
                            background: 'white',
                            boxShadow: 'var(--shadow)',
                            transition: 'var(--transition)',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%' // Uniform height
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '0.8rem',
                                right: '0.8rem',
                                background: 'var(--color-secondary)',
                                color: 'white',
                                padding: '0.2rem 0.6rem', // Smaller tag
                                borderRadius: '100px',
                                fontSize: '0.6rem',
                                fontWeight: 700,
                                textTransform: 'uppercase'
                            }}>
                                {service.tag}
                            </div>
                            <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>{service.icon}</div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.85rem', marginBottom: 'auto', lineHeight: 1.3 }}>{service.desc}</p>
                            <button
                                className="btn btn-primary"
                                style={{ width: '100%', marginTop: '1.5rem', padding: '0.6rem', fontSize: '0.85rem' }}
                                onClick={() => service.path && navigate(service.path)}
                            >
                                Reservar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookingEngine;
