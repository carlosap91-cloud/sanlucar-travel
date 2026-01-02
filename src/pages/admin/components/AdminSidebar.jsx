import React from 'react';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'restaurants', label: '🍽️ Restaurantes' },
        { id: 'accommodations', label: '🏨 Alojamiento' },
        { id: 'wineries', label: '🍷 Bodegas' },
        { id: 'transport', label: '🚌 Movilidad' },
        { id: 'experiences', label: '🎭 Experiencias' },
        { id: 'reservations', label: '📅 Reservas' },
        { id: 'profile', label: '👤 Mi Perfil' },
    ];

    return (
        <div className="glass" style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '15px',
            height: 'fit-content'
        }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {menuItems.map(item => (
                    <li
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        style={{
                            padding: '1rem',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            background: activeTab === item.id ? 'var(--color-primary)' : 'transparent',
                            color: activeTab === item.id ? 'white' : 'var(--color-text)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminSidebar;
