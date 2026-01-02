import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto. (Simulado)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div style={{ paddingTop: '2rem', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                        Contacta con <span style={{ color: 'var(--color-secondary)' }}>Nosotros</span>
                    </h1>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        ¿Tienes dudas sobre Sanlúcar? ¿Quieres añadir tu negocio? Escríbenos.
                    </p>
                </div>

                <div className="contact-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {/* Contact Info */}
                    <div className="glass" style={{
                        background: 'white',
                        padding: '3rem',
                        borderRadius: '30px',
                        boxShadow: 'var(--shadow)',
                        height: 'fit-content'
                    }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Información</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem', background: '#ffe6cc', padding: '10px', borderRadius: '12px' }}>📍</span>
                                <div>
                                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Dirección</h4>
                                    <p style={{ margin: 0, color: '#666' }}>Plaza del Cabildo, s/n<br />11540 Sanlúcar de Bda.<br />Cádiz, España</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem', background: '#e6f2ff', padding: '10px', borderRadius: '12px' }}>📧</span>
                                <div>
                                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Email</h4>
                                    <p style={{ margin: 0, color: '#666' }}>hola@sanlucartravel.com</p>
                                    <p style={{ margin: 0, color: '#666' }}>soporte@sanlucartravel.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem', background: '#e6ffe6', padding: '10px', borderRadius: '12px' }}>📱</span>
                                <div>
                                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Teléfono</h4>
                                    <p style={{ margin: 0, color: '#666' }}>+34 956 00 00 00</p>
                                    <span style={{ fontSize: '0.85rem', color: '#888' }}>(Lunes a Viernes, 9h - 14h)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass" style={{
                        background: 'white',
                        padding: '3rem',
                        borderRadius: '30px',
                        boxShadow: 'var(--shadow)'
                    }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Envíanos un mensaje</h3>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '1px solid #eee',
                                        background: '#f9f9f9',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '1px solid #eee',
                                        background: '#f9f9f9',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Asunto</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '1px solid #eee',
                                        background: '#f9f9f9',
                                        fontSize: '1rem'
                                    }}
                                >
                                    <option value="">Selecciona un motivo...</option>
                                    <option value="general">Consulta General</option>
                                    <option value="business">Dar de alta mi negocio</option>
                                    <option value="support">Reportar un error</option>
                                    <option value="other">Otro</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Mensaje</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '1px solid #eee',
                                        background: '#f9f9f9',
                                        fontSize: '1rem',
                                        resize: 'vertical'
                                    }}
                                    placeholder="¿En qué podemos ayudarte?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%', fontSize: '1.1rem' }}>
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
