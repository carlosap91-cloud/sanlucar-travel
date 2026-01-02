import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isAdmin, isFirebaseEnabled } = useData();
    const navigate = useNavigate();

    // Redirección segura
    useEffect(() => {
        if (isAdmin) {
            navigate('/admin/dashboard');
        }
    }, [isAdmin, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call context login which handles both Firebase and Mock
        // Mock fallback usually doesn't need email but we pass it anyway
        const success = await login(email, password);

        if (success) {
            navigate('/admin/dashboard');
        } else {
            if (!isFirebaseEnabled && password !== 'admin123') {
                alert('Contraseña incorrecta (Modo Local: intenta "admin123")');
            }
        }
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #1a1a1a, #333)',
            fontFamily: 'sans-serif'
        }}>
            <div style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '24px',
                textAlign: 'center',
                width: '90%',
                maxWidth: '400px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h2 style={{ margin: '0 0 0.5rem 0', color: '#1a1a1a', fontSize: '1.8rem' }}>Sanlúcar Travel</h2>
                    <span style={{
                        background: isFirebaseEnabled ? '#d1fae5' : '#f3f4f6',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: isFirebaseEnabled ? '#065f46' : '#666',
                        textTransform: 'uppercase'
                    }}>
                        {isFirebaseEnabled ? '● Online (Firebase)' : '○ Modo Local (Mock)'}
                    </span>
                </div>

                <p style={{ marginBottom: '2rem', color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
                    Introduce tus credenciales para gestionar las reservas y perfiles.
                </p>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="text" // text instead of email to allow simple usernames in future if needed
                            placeholder="Usuario / Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                            style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '2px solid #eee', fontSize: '1rem', outline: 'none', transition: '0.3s', boxSizing: 'border-box' }}
                            onFocus={(e) => e.target.style.borderColor = '#007bff'}
                            onBlur={(e) => e.target.style.borderColor = '#eee'}
                        />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '2px solid #eee', fontSize: '1rem', outline: 'none', transition: '0.3s', boxSizing: 'border-box' }}
                            onFocus={(e) => e.target.style.borderColor = '#007bff'}
                            onBlur={(e) => e.target.style.borderColor = '#eee'}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '1rem',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(0, 123, 255, 0.2)'
                        }}
                    >
                        Acceder al Panel
                    </button>
                </form>

                {!isFirebaseEnabled && (
                    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fffbeb', borderRadius: '8px', border: '1px solid #fef3c7' }}>
                        <p style={{ fontSize: '0.75rem', color: '#92400e', margin: 0 }}>
                            <strong>Modo Prueba:</strong> Usa cualquier usuario y clave <code>admin123</code>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminLogin;