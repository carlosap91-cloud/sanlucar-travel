import React from 'react';
import { useData } from '../context/DataContext';
import ListingLayout from '../components/ListingLayout';
import SidebarFilters from '../components/SidebarFilters';
import ListingCard from '../components/ListingCard';

const TransportPage = () => {
    const { transport } = useData();

    // Mock Static Data for Public Transport & Taxis
    const publicTransport = [
        {
            id: 'bus-urban',
            name: 'Autobuses Urbanos (TUSSA)',
            description: 'Conecta toda la ciudad con sus 4 líneas principales. Frecuencia de 15-20 min.',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800', // Generic Bus
            price: '1.10€',
            service: 'Transporte Público'
        },
        {
            id: 'bus-inter',
            name: 'Consorcio de Transportes',
            description: 'Conexiones con Sevilla, Jerez, Cádiz y Chipiona. Estación en Calzada del Ejército.',
            image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800', // Intercity Bus
            price: 'Desde 2€',
            service: 'Interurbano'
        }
    ];

    const taxiService = {
        name: 'Radio Taxi Sanlúcar',
        description: 'Servicio 24 horas disponible en toda la ciudad. Paradas principales en La Calzada y El Cabildo.',
        phone: '956 36 00 04',
        image: 'https://images.unsplash.com/photo-1619059558110-c45be64b73ae?auto=format&fit=crop&q=80&w=800'
    };

    return (
        <ListingLayout
            title={<>Movilidad y <span style={{ color: 'var(--color-secondary)' }}>Transporte</span></>}
            subtitle="Muévete por Sanlúcar cómodamente: autobús, taxi o bicicleta."

            content={
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                    {/* SECCIÓN 1: TRANSPORTE PÚBLICO */}
                    <section>
                        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
                            🚌 Transporte Público
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                            {publicTransport.map(item => (
                                <ListingCard
                                    key={item.id}
                                    image={item.image}
                                    title={item.name}
                                    subtitle={item.service}
                                    rating={null} // No ratings for public services
                                    description={item.description}
                                    price={item.price}
                                    borderColor="var(--color-secondary)"
                                    actionLabel="Ver Horarios"
                                    onAction={() => window.open('https://siu.cmtbc.es/es/horarios_lineas_tabla.php?linea=5', '_blank')} // Example link
                                />
                            ))}
                        </div>
                    </section>

                    {/* SECCIÓN 2: TAXIS */}
                    <section>
                        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
                            🚕 Taxis
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                            <ListingCard
                                image={taxiService.image}
                                title={taxiService.name}
                                subtitle="Servicio 24h"
                                description={taxiService.description}
                                price={null}
                                borderColor="var(--color-secondary)"
                                actionLabel={`📞 Llamar: ${taxiService.phone}`}
                                onAction={() => window.open(`tel:${taxiService.phone.replace(/\s/g, '')}`, '_self')}
                            />
                        </div>
                    </section>

                    {/* SECCIÓN 3: OTROS / ALQUILERES (Dinámico) */}
                    <section>
                        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
                            🚲 Otros / Alquileres
                        </h2>
                        {transport.length > 0 ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                                {transport.map(item => (
                                    <ListingCard
                                        key={item.id}
                                        image={item.image}
                                        title={item.name}
                                        subtitle={item.service}
                                        rating={5}
                                        description={item.description}
                                        price={item.price}
                                        socials={item.socials}
                                        borderColor="var(--color-secondary)"
                                        onAction={() => { }}
                                        actionLabel="Más Info"
                                    />
                                ))}
                            </div>
                        ) : (
                            <p style={{ color: '#999', fontStyle: 'italic' }}>No hay servicios adicionales registrados actualmente.</p>
                        )}
                    </section>

                </div>
            }
        />
    );
};

export default TransportPage;
