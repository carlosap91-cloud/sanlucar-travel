import React from 'react';
import { useData } from '../../../context/DataContext';

const ReservationManager = () => {
    const { reservations = [], updateReservationStatus } = useData();

    const handleExport = () => {
        const headers = ['ID', 'Fecha', 'Hora', 'Servicio', 'Pax', 'Nombre', 'Teléfono', 'Email', 'Estado', 'Comentarios'];
        const csvContent = "data:text/csv;charset=utf-8,"
            + headers.join(",") + "\n"
            + reservations.map(r => {
                return [
                    r.id,
                    r.date,
                    r.time,
                    `"${r.serviceName}"`,
                    r.pax,
                    `"${r.name}"`,
                    `"${r.phone}"`,
                    `"${r.email || ''}"`,
                    r.status,
                    `"${(r.comments || '').replace(/"/g, '""')}"`
                ].join(",");
            }).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "reservas_sanlucar_travel.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="glass" style={{ background: 'white', padding: '2rem', borderRadius: '15px' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Gestión de Reservas</h3>
            {reservations.length === 0 ? (
                <p style={{ color: '#666', fontStyle: 'italic' }}>No hay solicitudes pendientes.</p>
            ) : (
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{ marginBottom: '1rem', textAlign: 'right' }}>
                        <button
                            onClick={handleExport}
                            className="btn btn-secondary"
                            style={{ fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            📥 Exportar a Excel (CSV)
                        </button>
                    </div>
                    {[...reservations].reverse().map(res => (
                        <div key={res.id} style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '10px', borderLeft: res.status === 'confirmed' ? '4px solid #10b981' : (res.status === 'cancelled' ? '4px solid #ef4444' : '4px solid #f59e0b') }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                <div>
                                    <h4 style={{ margin: 0 }}>{res.serviceName}</h4>
                                    <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}>{res.date} a las {res.time} ({res.pax} pax)</p>
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '20px', background: res.status === 'confirmed' ? '#d1fae5' : res.status === 'cancelled' ? '#fee2e2' : '#fef3c7', color: res.status === 'confirmed' ? '#065f46' : res.status === 'cancelled' ? '#991b1b' : '#92400e' }}>
                                    {res.status.toUpperCase()}
                                </span>
                            </div>
                            <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#555' }}>
                                <p style={{ margin: 0 }}>👤 {res.name}</p>
                                <p style={{ margin: 0 }}>📞 {res.phone}</p>
                                {res.comments && <p style={{ margin: '0.5rem 0 0', fontStyle: 'italic' }}>"{res.comments}"</p>}
                            </div>
                            {res.status === 'pending' && (
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button onClick={() => updateReservationStatus(res.id, 'confirmed')} style={{ background: '#10b981', color: 'white', border: 'none', padding: '0.4rem 1rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>✔ Confirmar</button>
                                    <button onClick={() => updateReservationStatus(res.id, 'cancelled')} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.4rem 1rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>✖ Rechazar</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReservationManager;
