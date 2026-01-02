import React, { useState } from 'react';
import { useData } from '../../../context/DataContext';

const GenericManager = ({ type }) => {
    const {
        wineries, addWinery, updateWinery, deleteWinery,
        transport, addTransport, updateTransport, deleteTransport,
        experiences, addExperience, updateExperience, deleteExperience,
        getRating
    } = useData();

    const [editMode, setEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const initialFormState = {
        name: '', description: '',
        image: 'https://images.unsplash.com/photo-1510850402719-749e79d1a677?auto=format&fit=crop&q=80&w=800',
        mapLink: '', phoneNumber: '', logo: ''
    };

    const [form, setForm] = useState(initialFormState);

    // Determine context based on type
    let data = [];
    let addFunc = () => { };
    let updateFunc = () => { };
    let deleteFunc = () => { };
    let title = '';

    if (type === 'wineries') {
        data = wineries;
        addFunc = addWinery;
        updateFunc = updateWinery;
        deleteFunc = deleteWinery;
        title = 'Bodega';
    } else if (type === 'transport') {
        data = transport;
        addFunc = addTransport;
        updateFunc = updateTransport;
        deleteFunc = deleteTransport;
        title = 'Transporte';
    } else if (type === 'experiences') {
        data = experiences;
        addFunc = addExperience;
        updateFunc = updateExperience;
        deleteFunc = deleteExperience;
        title = 'Experiencia';
    }

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            updateFunc(editingId, form);
            alert('Elemento actualizado');
            cancelEditing();
        } else {
            addFunc(form);
            setForm(initialFormState);
            alert('Elemento añadido');
        }
    };

    return (
        <>
            <div className="glass" style={{ background: 'white', padding: '2rem', borderRadius: '15px', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>{editMode ? 'Editar' : 'Añadir'} {title}</h3>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                    <input type="text" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Enlace Google Maps</label>
                        <input type="url" placeholder="https://maps.google.com/..." value={form.mapLink} onChange={(e) => setForm({ ...form, mapLink: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>
                    <input
                        type="text"
                        placeholder="URL Imagen Principal (https://...)"
                        value={form.image}
                        onChange={e => setForm({ ...form, image: e.target.value })}
                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                    />
                    <input
                        type="text"
                        placeholder="Teléfono/WhatsApp (34600...)"
                        value={form.phoneNumber}
                        onChange={e => setForm({ ...form, phoneNumber: e.target.value })}
                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                    />
                    <input
                        type="text"
                        placeholder="URL Logo / Foto Perfil"
                        value={form.logo}
                        onChange={e => setForm({ ...form, logo: e.target.value })}
                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                    />
                    <textarea placeholder="Descripción" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required rows="3" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button type="submit" className="btn btn-primary">{editMode ? 'Actualizar' : 'Guardar'}</button>
                        {editMode && <button type="button" onClick={cancelEditing} className="btn btn-secondary" style={{ background: '#95a5a6' }}>Cancelar</button>}
                    </div>
                </form>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
                {data.map(item => (
                    <div key={item.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4 style={{ margin: 0 }}>{item.name} <span style={{ fontSize: '0.8rem', color: '#f39c12' }}>★ {getRating(item.reviews) || 'N/A'}</span></h4>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={() => startEditing(item)} style={{ background: '#f39c12', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>Editar</button>
                            <button onClick={() => deleteFunc(item.id)} style={{ background: '#ff4d4f', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GenericManager;
