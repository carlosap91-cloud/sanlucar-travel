import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const ReservationModal = ({ service, onClose }) => {
    const { addReservation } = useData();
    const [step, setStep] = useState(1); // 1: Details, 2: Contact
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        time: '21:00',
        pax: 2,
        name: '',
        email: '',
        phone: '',
        comments: ''
    });

    const today = new Date().toISOString().split('T')[0];

    // Safety check
    if (!service) return null;

    const handleContinue = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReservation = {
            id: Date.now(),
            serviceId: service.id,
            serviceName: service.name,
            ...formData,
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        addReservation(newReservation);

        // WhatsApp Redirection Logic (Attribution)
        const phoneNumber = service.phoneNumber || '34663152674';
        const message = `Hola, solicitud de reserva vía *Sanlúcar Travel*.%0A%0A📅 Fecha: ${formData.date}%0A🕒 Hora: ${formData.time}%0A👤 Personas: ${formData.pax}%0A%0ASoy ${formData.name}. ¿Tenéis disponibilidad?`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        console.log(`[WhatsApp] Redirecting to: ${whatsappUrl}`);
        window.open(whatsappUrl, '_blank');

        onClose();
    };

    // Estilos TheFork-like
    const modalOverlayStyle = {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 2000,
        display: 'flex', justifyContent: 'center', alignItems: 'flex-end', // Bottom on mobile
        backdropFilter: 'blur(2px)'
    };

    // Media Query for centering on desktop would be handled by CSS, hardcoding desktop-first for now with mobile style approximation
    const modalContentStyle = {
        backgroundColor: 'white',
        width: '100%', maxWidth: '500px',
        borderRadius: '16px 16px 0 0', // Rounded top for mobile sheet feel
        padding: '2rem',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
        animation: 'slideUp 0.3s ease-out',
        position: 'relative',
        maxHeight: '90vh', overflowY: 'auto'
    };

    const inputGroupStyle = { marginBottom: '1.2rem' };
    const labelStyle = { display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.4rem', color: '#2c3e50' };
    const inputStyle = {
        width: '100%', padding: '0.9rem', borderRadius: '8px', border: '1px solid #dcdcdc',
        fontSize: '1rem', transition: 'border 0.2s', outline: 'none'
    };

    const socialButtonStyle = {
        width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd',
        background: 'white', color: '#333', fontWeight: 600, fontSize: '0.95rem',
        cursor: 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        marginBottom: '0.8rem', opacity: 0.7
    };

    return (
        <div style={modalOverlayStyle} onClick={onClose}>
            <div style={{ ...modalContentStyle, margin: 'auto', borderRadius: '12px' }} onClick={e => e.stopPropagation()}>

                {/* Header with Close & Back */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    {step === 2 && (
                        <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#333' }}>
                            ←
                        </button>
                    )}
                    <h3 style={{ margin: step === 2 ? '0 auto' : '0', fontSize: '1.2rem', fontWeight: 800 }}>
                        {step === 1 ? `Reservar en ${service.name}` : 'Finalizar Reserva'}
                    </h3>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}>&times;</button>
                </div>

                {/* Summary Banner (Visible in Step 2) */}
                {step === 2 && (
                    <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                        <div>📅 {new Date(formData.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</div>
                        <div>🕒 {formData.time}</div>
                        <div>👤 {formData.pax} Pers.</div>
                    </div>
                )}

                <form onSubmit={step === 1 ? handleContinue : handleSubmit}>

                    {step === 1 && (
                        <>
                            {/* Step 1: Booking Details */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <label style={labelStyle}>Fecha</label>
                                    <input type="date" min={today} value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} style={inputStyle} required />
                                </div>
                                <div>
                                    <label style={labelStyle}>Hora</label>
                                    <select value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} style={inputStyle} required>
                                        <option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option>
                                        <option value="14:30">14:30</option><option value="15:00">15:00</option>
                                        <option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option>
                                        <option value="22:00">22:00</option><option value="22:30">22:30</option>
                                    </select>
                                </div>
                            </div>

                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>Nº Personas</label>
                                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                        <button
                                            key={num}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, pax: num })}
                                            style={{
                                                minWidth: '40px', height: '40px', borderRadius: '50%',
                                                border: formData.pax === num ? '2px solid var(--color-primary)' : '1px solid #ddd',
                                                background: formData.pax === num ? 'var(--color-primary)' : 'white',
                                                color: formData.pax === num ? 'white' : '#333',
                                                cursor: 'pointer', fontWeight: 600
                                            }}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontWeight: 700, marginTop: '1rem', borderRadius: '8px' }}>
                                Continuar
                            </button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            {/* Step 2: Contact Details (TheFork style) */}

                            <div style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
                                <p>Conecta tus redes para reservar más rápido (Demo)</p>
                            </div>

                            <button type="button" style={{ ...socialButtonStyle, color: '#3b5998', borderColor: '#3b5998' }}>
                                🔵 Continuar con Facebook
                            </button>
                            <button type="button" style={{ ...socialButtonStyle, borderColor: '#db4437' }}>
                                🔴 Continuar con Google
                            </button>

                            <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0', color: '#999', fontSize: '0.8rem' }}>
                                <div style={{ flex: 1, height: '1px', background: '#eee' }}></div>
                                <span style={{ padding: '0 10px' }}>o usa tu email</span>
                                <div style={{ flex: 1, height: '1px', background: '#eee' }}></div>
                            </div>

                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>Email</label>
                                <input type="email" placeholder="nombre@correo.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} style={inputStyle} required />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={inputGroupStyle}>
                                    <label style={labelStyle}>Nombre</label>
                                    <input type="text" placeholder="Tu Nombre" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle} required />
                                </div>
                                <div style={inputGroupStyle}>
                                    <label style={labelStyle}>Teléfono</label>
                                    <input type="tel" placeholder="600 000 000" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={inputStyle} required />
                                </div>
                            </div>

                            <div style={inputGroupStyle}>
                                <textarea placeholder="¿Alguna petición especial?" rows="2" value={formData.comments} onChange={e => setFormData({ ...formData, comments: e.target.value })} style={{ ...inputStyle, resize: 'none' }} />
                            </div>

                            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.8rem', color: '#666' }}>
                                <input
                                    type="checkbox"
                                    id="privacy-check"
                                    required
                                    style={{ marginTop: '3px' }}
                                />
                                <label htmlFor="privacy-check" style={{ lineHeight: '1.4' }}>
                                    He leído y acepto la <Link to="/privacidad" target="_blank" style={{ textDecoration: 'underline', fontWeight: 'bold', fontStyle: 'italic', color: 'inherit' }}>Política de Privacidad</Link> y el tratamiento de mis datos para gestionar la reserva.
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontWeight: 700, borderRadius: '8px', background: '#417505' }}>
                                CONFIRMAR SOLICITUD DE RESERVA
                            </button>
                        </>
                    )}

                </form>
            </div>
        </div>
    );
};

export default ReservationModal;
