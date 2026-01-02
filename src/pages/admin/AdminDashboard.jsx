import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';

// Sub-components
import AdminSidebar from './components/AdminSidebar';
import RestaurantManager from './components/RestaurantManager';
import AccommodationManager from './components/AccommodationManager';
import GenericManager from './components/GenericManager';
import ReservationManager from './components/ReservationManager';
import ProfileManager from './components/ProfileManager';

const AdminDashboard = () => {
    const {
        isAdmin, logout, userProfile
    } = useData();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('restaurants');

    if (!isAdmin) {
        navigate('/admin');
        return null; // Return null to prevent rendering before redirect
    }

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f4f6f8' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <h1>Panel de Administración</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ textAlign: 'right' }}>
                            <span style={{ display: 'block', fontWeight: 700 }}>{userProfile.name}</span>
                            <span style={{ fontSize: '0.8rem', color: '#666' }}>Administrador</span>
                        </div>
                        {userProfile.avatar && <img src={userProfile.avatar} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />}
                        <button onClick={() => { logout(); navigate('/'); }} className="btn btn-secondary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>Salir</button>
                    </div>
                </div>

                <div className="admin-layout">
                    {/* Sidebar */}
                    <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                    {/* Content Area */}
                    <div>
                        {activeTab === 'restaurants' && <RestaurantManager />}
                        {activeTab === 'accommodations' && <AccommodationManager />}
                        {activeTab === 'wineries' && <GenericManager type="wineries" />}
                        {activeTab === 'transport' && <GenericManager type="transport" />}
                        {activeTab === 'experiences' && <GenericManager type="experiences" />}
                        {activeTab === 'reservations' && <ReservationManager />}
                        {activeTab === 'profile' && <ProfileManager />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
