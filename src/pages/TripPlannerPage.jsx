import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TripPlannerPage = () => {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        dates: '',
        group: '',
        interests: [],
        style: ''
    });

    const handleInterestToggle = (interest) => {
        setSelections(prev => {
            if (prev.interests.includes(interest)) {
                return { ...prev, interests: prev.interests.filter(i => i !== interest) };
            } else {
                return { ...prev, interests: [...prev.interests, interest] };
            }
        });
    };

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = () => {
        const phoneNumber = '34663152674'; // Teléfono del Administrador
        const message = `Hola, quiero diseñar un *Viaje Premium* a Sanlúcar.%0A%0A📅 *Fechas:* ${selections.dates}%0A👥 *Grupo:* ${selections.group}%0A🎭 *Intereses:* ${selections.interests.join(', ')}%0A💎 *Estilo:* ${selections.style}%0A%0A¿Podéis hacerme una propuesta personalizada?`;

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    const [showEmailModal, setShowEmailModal] = useState(false);
    const [emailStatus, setEmailStatus] = useState('idle'); // idle, sending, success, error

    const handleEmailSubmit = () => {
        setShowEmailModal(true);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setEmailStatus('sending');

        const formData = new FormData(e.target);
        const contactEmail = formData.get('email');
        const contactName = formData.get('name');

        const messageData = {
            _subject: `Nuevo Viaje Premium: ${contactName}`,
            _template: 'table', // FormSubmit formatting
            nombre: contactName,
            email: contactEmail,
            telefono: formData.get('phone'), // Optional
            fechas: selections.dates,
            grupo: selections.group,
            intereses: selections.interests.join(', '),
            estilo: selections.style,
            policy_accepted: 'Yes'
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/forzesport91@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(messageData)
            });

            if (response.ok) {
                setEmailStatus('success');
                setTimeout(() => {
                    setShowEmailModal(false);
                    setEmailStatus('idle');
                    setStep(1); // Reset form or show thank you
                    alert("¡Solicitud enviada correctamente! Te contactaremos pronto.");
                    setSelections({
                        dates: '', group: '', interests: [], style: '', privacyAccepted: false
                    });
                }, 2000);
            } else {
                setEmailStatus('error');
            }
        } catch (error) {
            console.error(error);
            setEmailStatus('error');
        }
    };

    // --- Components ---
    const EmailModal = () => (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.6)', zIndex: 10000,
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
        }}>
            <div style={{
                background: 'white', padding: '2rem', borderRadius: 'var(--radius-card)',
                maxWidth: '500px', width: '90%', position: 'relative',
                boxShadow: 'var(--shadow)'
            }}>
                <button
                    onClick={() => setShowEmailModal(false)}
                    aria-label="Cerrar modal"
                    style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
                >
                    &times;
                </button>

                <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Finalizar Solicitud</h2>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Déjanos tu email para enviarte la propuesta de viaje detallada.
                </p>

                {emailStatus === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0', color: 'green' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                        <h3>¡Enviado Correctamente!</h3>
                        <p>Revisa tu correo pronto.</p>
                    </div>
                ) : (
                    <form onSubmit={sendEmail}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Nombre</label>
                            <input type="text" name="name" required placeholder="Tu nombre" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Email de contacto</label>
                            <input type="email" name="email" required placeholder="tu@email.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Teléfono (Opcional)</label>
                            <input type="tel" name="phone" placeholder="Para contactarte más rápido" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                        </div>

                        {emailStatus === 'error' && (
                            <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '1rem' }}>Error al enviar. Por favor prueba con WhatsApp o inténtalo de nuevo.</p>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={emailStatus === 'sending'}
                            style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-btn)', background: emailStatus === 'sending' ? '#999' : 'var(--color-primary)', border: 'none' }}
                        >
                            {emailStatus === 'sending' ? 'Enviando...' : 'ENVIAR SOLICITUD'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );

    const OptionButton = ({ label, selected, onClick, icon }) => (
        <button
            onClick={onClick}
            aria-pressed={selected}
            style={{
                background: selected ? 'var(--color-primary)' : 'white',
                color: selected ? 'white' : '#333',
                border: selected ? 'none' : '1px solid #ddd',
                padding: '1.5rem',
                borderRadius: 'var(--radius-card)', // Unified Radius
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: selected ? '0 10px 20px rgba(0,0,0,0.2)' : 'none'
            }}
        >
            <span style={{ fontSize: '2rem' }}>{icon}</span>
            {label}
        </button>
    );

    return (
        <div className="trip-planner-page" style={{ paddingTop: '2rem', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <style>{`
                @media (max-width: 768px) {
                    .trip-planner-page {
                        padding-top: 2rem !important; /* Mobile spacing fix */
                    }
                    .section-padding {
                        padding-top: 1rem !important;
                        padding-bottom: 2rem !important;
                        padding-left: 1rem !important; /* Ensure side breathing room */
                        padding-right: 1rem !important;
                    }
                    .glass-card {
                        padding: 1.5rem !important; /* Reduce inner padding on mobile */
                    }
                    /* Ensure container doesn't overflow */
                    .container {
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                }
            `}</style>
            {showEmailModal && <EmailModal />}
            <div className="container section-padding" style={{ maxWidth: '800px', margin: '0 auto' }}>

                {/* Header */}
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Diseña tu <span style={{ color: 'var(--color-secondary)' }}>Viaje Perfecto</span>
                    </h1>
                    <p style={{ color: '#666', fontSize: '1.1rem' }}>
                        Nos encargamos de todo: Alojamiento, reservas exclusivas y experiencias a medida.
                        Tú solo disfruta.
                    </p>
                </div>

                {/* Progress Bar */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '3rem' }}>
                    {[1, 2, 3, 4].map(s => (
                        <div key={s} style={{
                            flex: 1, height: '6px', borderRadius: '3px',
                            background: step >= s ? 'var(--color-primary)' : '#e0e0e0'
                        }} />
                    ))}
                </div>

                {/* Form Card */}
                <div className="glass glass-card" style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius-card)' }}>

                    {step === 1 && (
                        <div className="fade-in">
                            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>¿Cuándo te gustaría venir?</h2>
                            <input
                                type="text"
                                aria-label="Fechas de viaje"
                                placeholder="Ej: Mediados de Julio, Puente de Diciembre..."
                                value={selections.dates}
                                onChange={e => setSelections({ ...selections, dates: e.target.value })}
                                style={{
                                    width: '100%', padding: '1.5rem', fontSize: '1.2rem',
                                    borderRadius: '12px', border: '1px solid #ddd', outline: 'none'
                                }}
                            />
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <button className="btn btn-primary" onClick={handleNext} disabled={!selections.dates}>Siguiente ➝</button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="fade-in">
                            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>¿Con quién viajas?</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                                <OptionButton label="En Pareja" icon="💑" selected={selections.group === 'Pareja'} onClick={() => setSelections({ ...selections, group: 'Pareja' })} />
                                <OptionButton label="Familia" icon="👨‍👩‍👧‍👦" selected={selections.group === 'Familia'} onClick={() => setSelections({ ...selections, group: 'Familia' })} />
                                <OptionButton label="Amigos" icon="🥂" selected={selections.group === 'Amigos'} onClick={() => setSelections({ ...selections, group: 'Amigos' })} />
                                <OptionButton label="Solo/a" icon="🎒" selected={selections.group === 'Solo'} onClick={() => setSelections({ ...selections, group: 'Solo' })} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666' }} onClick={handleBack}>← Atrás</button>
                                <button className="btn btn-primary" onClick={handleNext} disabled={!selections.group}>Siguiente ➝</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="fade-in">
                            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>¿Qué experiencias buscas?</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                                <OptionButton label="Gastronomía" icon="🦐" selected={selections.interests.includes('Gastronomía')} onClick={() => handleInterestToggle('Gastronomía')} />
                                <OptionButton label="Vinos & Bodegas" icon="🍷" selected={selections.interests.includes('Vinos')} onClick={() => handleInterestToggle('Vinos')} />
                                <OptionButton label="Relax & Playa" icon="🏖️" selected={selections.interests.includes('Relax')} onClick={() => handleInterestToggle('Relax')} />
                                <OptionButton label="Naturaleza" icon="🐴" selected={selections.interests.includes('Naturaleza')} onClick={() => handleInterestToggle('Naturaleza')} />
                                <OptionButton label="Cultura" icon="🏰" selected={selections.interests.includes('Cultura')} onClick={() => handleInterestToggle('Cultura')} />
                                <OptionButton label="Flamenco" icon="💃" selected={selections.interests.includes('Flamenco')} onClick={() => handleInterestToggle('Flamenco')} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666' }} onClick={handleBack}>← Atrás</button>
                                <button className="btn btn-primary" onClick={handleNext} disabled={selections.interests.length === 0}>Siguiente ➝</button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="fade-in">
                            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Define tu estilo</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                                <OptionButton label="Económico" icon="🚍" selected={selections.style === 'Económico'} onClick={() => setSelections({ ...selections, style: 'Económico' })} />
                                <OptionButton label="Confort" icon="✨" selected={selections.style === 'Confort'} onClick={() => setSelections({ ...selections, style: 'Confort' })} />
                                <OptionButton label="Premium / Lujo" icon="💎" selected={selections.style === 'Premium'} onClick={() => setSelections({ ...selections, style: 'Premium' })} />
                            </div>

                            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: 'var(--radius-card)', textAlign: 'center' }}>
                                <p style={{ marginBottom: '1rem', fontWeight: 600 }}>Tu Pack Personalizado:</p>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#666', marginBottom: '1.5rem' }}>
                                    <li>📅 {selections.dates}</li>
                                    <li>👥 {selections.group}</li>
                                    <li>🎭 {selections.interests.join(', ')}</li>
                                    <li>✨ Estilo {selections.style}</li>
                                </ul>

                                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#666', textAlign: 'left' }}>
                                    <input
                                        type="checkbox"
                                        id="planner-privacy"
                                        checked={selections.privacyAccepted || false}
                                        onChange={e => setSelections({ ...selections, privacyAccepted: e.target.checked })}
                                    />
                                    <label htmlFor="planner-privacy" style={{ lineHeight: '1.4' }}>
                                        He leído y acepto la <Link to="/privacidad" target="_blank" style={{ textDecoration: 'underline', fontWeight: 'bold', fontStyle: 'italic', color: 'inherit' }}>Política de Privacidad</Link> y el tratamiento de mis datos para gestionar la reserva.
                                    </label>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <button
                                        className="btn btn-primary"
                                        style={{
                                            width: '100%', padding: '1rem', fontSize: '1.1rem', background: '#25D366', border: 'none',
                                            opacity: selections.privacyAccepted ? 1 : 0.6,
                                            cursor: selections.privacyAccepted ? 'pointer' : 'not-allowed',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                            borderRadius: 'var(--radius-btn)'
                                        }}
                                        onClick={handleSubmit}
                                        disabled={!selections.style || !selections.privacyAccepted}
                                    >
                                        <span style={{ fontSize: '1.4rem' }}>💬</span> SOLICITAR POR WHATSAPP
                                    </button>

                                    <button
                                        style={{
                                            width: '100%', padding: '1rem', fontSize: '1.1rem', background: '#e0e0e0', border: 'none', borderRadius: 'var(--radius-btn)', color: '#333', fontWeight: 700,
                                            opacity: selections.privacyAccepted ? 1 : 0.6,
                                            cursor: selections.privacyAccepted ? 'pointer' : 'not-allowed',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                                        }}
                                        onClick={handleEmailSubmit}
                                        disabled={!selections.style || !selections.privacyAccepted}
                                    >
                                        <span style={{ fontSize: '1.4rem' }}>✉️</span> SOLICITAR POR EMAIL
                                    </button>
                                </div>

                                <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '1rem' }}>Sin compromiso. Te responderemos en menos de 24h.</p>
                            </div>

                            <div style={{ marginTop: '1rem', textAlign: 'left' }}>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666' }} onClick={handleBack}>← Atrás</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default TripPlannerPage;
