import React, { useState, useEffect, useRef } from 'react';

const SidebarFilters = ({ title = "Filtros", filters = [], selectedFilters = {}, onFilterChange, onResetFilters, layout = 'vertical' }) => {
    // Only use 'horizontal' logic if layout prop is set
    const isHorizontal = layout === 'horizontal';
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Calculate total active filters count
    const totalActive = Object.values(selectedFilters).reduce((acc, curr) => acc + curr.length, 0);

    if (isHorizontal) {
        return (
            <>
                {/* 1. The Single Filter Trigger Button */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '12px 24px',
                            background: 'white',
                            border: '1px solid #ddd',
                            borderRadius: '100px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--color-text)',
                            cursor: 'pointer',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                            transition: 'all 0.2s'
                        }}
                    >
                        <span style={{ fontSize: '1.2rem' }}>⚡</span>
                        Filtrar Búsqueda
                        {totalActive > 0 && (
                            <span style={{
                                background: 'var(--color-primary)',
                                color: 'white',
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.85rem'
                            }}>
                                {totalActive}
                            </span>
                        )}
                    </button>
                </div>

                {/* 2. The Modal Overlay */}
                {isModalOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }} onClick={(e) => {
                        if (e.target === e.currentTarget) setIsModalOpen(false);
                    }}>
                        {/* 3. The Modal Content */}
                        <div className="animate-fade-up" style={{
                            background: 'white',
                            width: '100%',
                            maxWidth: '500px',
                            borderRadius: '24px',
                            padding: '2rem',
                            maxHeight: '85vh',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                            position: 'relative'
                        }}>
                            {/* Modal Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)' }}>Filtros</h3>
                                <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}>✕</button>
                            </div>

                            {/* Modal Body (Scrollable) */}
                            <div style={{ overflowY: 'auto', flex: 1, paddingRight: '0.5rem' }}>
                                {filters.map((group) => (
                                    <div key={group.id} style={{ marginBottom: '2rem' }}>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{group.label}</h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                            {group.options.map((option) => (
                                                <label key={option.value} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    cursor: 'pointer',
                                                    padding: '8px 16px',
                                                    borderRadius: '12px',
                                                    border: selectedFilters[group.id]?.includes(option.value)
                                                        ? '2px solid var(--color-primary)'
                                                        : '1px solid #ddd',
                                                    background: selectedFilters[group.id]?.includes(option.value)
                                                        ? '#e6f2ff'
                                                        : 'white',
                                                    color: selectedFilters[group.id]?.includes(option.value)
                                                        ? 'var(--color-primary)'
                                                        : '#555',
                                                    fontWeight: selectedFilters[group.id]?.includes(option.value) ? 600 : 400,
                                                    transition: 'all 0.2s'
                                                }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedFilters[group.id]?.includes(option.value)}
                                                        onChange={() => onFilterChange(group.id, option.value)}
                                                        style={{ display: 'none' }} // Hide default checkbox, style the container
                                                    />
                                                    {option.label}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Modal Footer */}
                            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #eee', display: 'flex', gap: '1rem' }}>
                                <button
                                    onClick={() => {
                                        if (onResetFilters) onResetFilters();
                                    }}
                                    style={{
                                        flex: 1,
                                        padding: '14px',
                                        background: '#f8f9fa',
                                        border: '1px solid #ddd',
                                        borderRadius: '12px',
                                        color: '#666',
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        fontSize: '1rem'
                                    }}>
                                    Limpiar
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    style={{
                                        flex: 2,
                                        padding: '14px',
                                        background: 'var(--color-primary)',
                                        border: 'none',
                                        borderRadius: '12px',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontWeight: 700,
                                        fontSize: '1rem'
                                    }}>
                                    Ver Resultados
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }

    // Vertical Layout (Sidebar Mode) -> Keep as is (Standard fallback)
    return (
        <aside className="sidebar-filters" style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            height: 'fit-content',
            position: 'sticky',
            top: '100px'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.4rem', color: 'var(--color-text)' }}>{title}</h3>
            </div>

            {filters.map((group) => (
                <div key={group.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                        {group.label}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {group.options.map((option) => (
                            <label key={option.value} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                color: '#555'
                            }}>
                                <input
                                    type="checkbox"
                                    checked={selectedFilters[group.id]?.includes(option.value)}
                                    onChange={() => onFilterChange(group.id, option.value)}
                                    style={{
                                        accentColor: 'var(--color-primary)',
                                        width: '18px',
                                        height: '18px',
                                        cursor: 'pointer'
                                    }}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </aside>
    );
};
export default SidebarFilters;
