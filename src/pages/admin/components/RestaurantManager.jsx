import React, { useState } from 'react';
import { useData } from '../../../context/DataContext';

const RestaurantManager = () => {
    const { restaurants, addRestaurant, updateRestaurant, deleteRestaurant, getRating } = useData();
    const [editMode, setEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const initialFormState = {
        name: '', address: '', cuisine: [], menuLink: '', description: '',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
        logo: '',
        phoneNumber: '',
        mapLink: '',
        lat: '', lng: '',
        isFeatured: false // New field
    };

    // ... existing code ...

    const [form, setForm] = useState(initialFormState);

    const cuisineOptions = ['Mediterránea', 'Italiana', 'Asiática', 'Tapas', 'Mariscos', 'Vegana', 'Tradicional', 'Fusión'];

    const startEditing = (item) => {
        setEditMode(true);
        setEditingId(item.id);
        setForm(item);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelEditing = () => {
        setEditMode(false);
        setEditingId(null);
        setForm(initialFormState);
    };

    const handleCuisineToggle = (type) => {
        if (form.cuisine.includes(type)) {
            setForm({ ...form, cuisine: form.cuisine.filter(t => t !== type) });
        } else {
            if (form.cuisine.length < 5) {
                setForm({ ...form, cuisine: [...form.cuisine, type] });
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            updateRestaurant(editingId, form);
            alert('Restaurante actualizado');
            cancelEditing();
        } else {
            addRestaurant(form);
            setForm(initialFormState);
            alert('Restaurante añadido');
        }
    };

    return (
        <>
            <div className="glass" style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>{editMode ? 'Editar Restaurante' : 'Añadir Restaurante'}</h3>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                    <div className="form-grid">
                        <input type="text" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                        <input type="text" placeholder="Dirección" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>

                    {/* Coordinates Section */}
                    <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <input type="text" placeholder="Latitud (ej: 36.78)" value={form.lat || ''} onChange={(e) => setForm({ ...form, lat: e.target.value })} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                        <input type="text" placeholder="Longitud (ej: -6.36)" value={form.lng || ''} onChange={(e) => setForm({ ...form, lng: e.target.value })} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>

                    {/* Featured Toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f8f9fa', padding: '0.5rem 1rem', borderRadius: '8px' }}>
                        <input
                            type="checkbox"
                            id="isFeatured"
                            checked={form.isFeatured || false}
                            onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })}
                            style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                        />
                        <label htmlFor="isFeatured" style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--color-primary)' }}>
                            ✨ Destacar en Portada (Los Favoritos)
                        </label>
                    </div>

                    {/* Coordinates Section */}
                    <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <input type="text" placeholder="Latitud (ej: 36.78)" value={form.lat || ''} onChange={(e) => setForm({ ...form, lat: e.target.value })} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                        <input type="text" placeholder="Longitud (ej: -6.36)" value={form.lng || ''} onChange={(e) => setForm({ ...form, lng: e.target.value })} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Teléfono (WhatsApp)</label>
                        <input type="tel" placeholder="34600000000" value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Enlace Google Maps</label>
                        <input type="url" placeholder="https://maps.google.com/..." value={form.mapLink} onChange={(e) => setForm({ ...form, mapLink: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Tipo de Cocina (Máx 5)</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {cuisineOptions.map(type => (
                                <span key={type} onClick={() => handleCuisineToggle(type)} style={{ padding: '0.4rem 1rem', borderRadius: '100px', cursor: 'pointer', fontSize: '0.85rem', background: form.cuisine.includes(type) ? 'var(--color-secondary)' : '#eee', color: form.cuisine.includes(type) ? 'white' : '#333', transition: '0.2s' }}>{type}</span>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Enlace Carta</label>
                            <input type="url" placeholder="https://..." value={form.menuLink} onChange={(e) => setForm({ ...form, menuLink: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                        </div>
                    </div>
                    {/* Logo Upload Simulation */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Logo / Foto Perfil</label>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <input
                                type="text"
                                placeholder="URL del Logo (ej: https://...)"
                                value={form.logo}
                                onChange={(e) => setForm({ ...form, logo: e.target.value })}
                                style={{ flex: 1, padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                            />
                            {form.logo && <img src={form.logo} alt="Preview" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ddd' }} />}
                        </div>
                    </div>
                    <textarea placeholder="Descripción" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required rows="3" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button type="submit" className="btn btn-primary">{editMode ? 'Actualizar' : 'Guardar Restaurante'}</button>
                        {editMode && <button type="button" onClick={cancelEditing} className="btn btn-secondary" style={{ background: '#95a5a6' }}>Cancelar</button>}
                    </div>
                </form>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
                {restaurants.map(rest => (
                    <div key={rest.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4 style={{ margin: 0 }}>{rest.name} <span style={{ fontSize: '0.8rem', color: '#f39c12' }}>★ {getRating(rest.reviews) || 'N/A'}</span></h4>
                            <p style={{ fontSize: '0.8rem', color: '#666' }}>{rest.address} • {rest.cuisine.join(', ')}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={() => startEditing(rest)} style={{ background: '#f39c12', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>Editar</button>
                            <button onClick={() => deleteRestaurant(rest.id)} style={{ background: '#ff4d4f', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RestaurantManager;
