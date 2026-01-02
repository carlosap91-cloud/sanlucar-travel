import React, { useState } from 'react';
import { useData } from '../../../context/DataContext';

const ProfileManager = () => {
    const { userProfile, updateUserProfile } = useData();
    const [profileForm, setProfileForm] = useState({
        name: userProfile.name,
        avatar: userProfile.avatar
    });

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        updateUserProfile(profileForm);
        alert('Perfil actualizado');
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileForm({ ...profileForm, avatar: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="glass" style={{ background: 'white', padding: '2rem', borderRadius: '15px' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Mi Perfil</h3>
            <form onSubmit={handleProfileUpdate} style={{ display: 'grid', gap: '1.5rem', maxWidth: '400px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Nombre de Usuario</label>
                    <input type="text" value={profileForm.name} onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Foto de Perfil</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        {profileForm.avatar && <img src={profileForm.avatar} alt="Preview" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />}
                        <input type="file" accept="image/*" onChange={handleAvatarChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Actualizar Perfil</button>
            </form>

            <hr style={{ margin: '2rem 0', borderTop: '1px solid #ddd' }} />

            <div>
                <h4 style={{ color: '#c0392b', marginBottom: '1rem' }}>⚠ Zona de Peligro</h4>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                    Si no aparecen los datos originales (restaurantes, bodegas de ejemplo...) o quieres borrar todo y empezar de cero, usa este botón.
                </p>
                <button
                    onClick={() => {
                        if (window.confirm("¿Seguro? Se borrarán TODOS los datos y se restaurarán los originales de la aplicación.")) {
                            localStorage.clear();
                            alert("Datos restaurados. Se recargará la página.");
                            window.location.reload();
                        }
                    }}
                    style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}
                >
                    🔄 RESTAURAR DATOS DE FÁBRICA
                </button>
            </div>
        </div>
    );
};

export default ProfileManager;
