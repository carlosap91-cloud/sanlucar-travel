import React from 'react';
import { useData } from '../context/DataContext';
import ListingLayout from '../components/ListingLayout';
import ListingCard from '../components/ListingCard';

const TransportPage = () => {
    const { transport } = useData();

    // 1. Cómo Llegar (Interurbano)
    const arrivalConnections = [
        {
            id: 'airport-jerez',
            name: 'Aeropuerto de Jerez',
            service: 'Avión (27 km)',
            description: 'Conexiones nacionales e internacionales. A 30 min en taxi o coche.',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=800',
            price: 'Taxi ~45€',
            link: 'https://www.aena.es/es/jerez.html',
            actionLabel: 'Info Aeropuerto'
        },
        {
            id: 'train-jerez',
            name: 'Estación de Tren Jerez',
            service: 'Renfe / AVE (25 km)',
            description: 'Enlace alta velocidad. Conexión con Sanlúcar mediante Bus o Taxi.',
            image: 'https://images.unsplash.com/photo-1532105956690-b14a887bb963?auto=format&fit=crop&q=80&w=800',
            price: 'Bus 2.50€',
            link: 'https://www.renfe.com',
            actionLabel: 'Horarios Renfe'
        },
        {
            id: 'bus-interurban',
            name: 'Estación de Autobuses',
            service: 'InterBus / Monbus',
            description: 'Av. Constitución. Conexiones con Sevilla, Cádiz y Chipiona. Tel: 956 38 50 60',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
            price: 'Desde 2€',
            link: 'https://comprasweb.interbus.es/venta/',
            actionLabel: 'Comprar Billete'
        }
    ];

    // 2. Moverse por Sanlúcar (Urbano)
    const urbanTransport = [
        {
            id: 'urban-bus',
            name: 'Autobuses Urbanos',
            service: 'Tussa / Avanza',
            description: (
                <span>
                    Conecta toda la ciudad. Líneas principales:<br />
                    • <b>L1:</b> La Algaida - Bonanza - Centro<br />
                    • <b>L2:</b> La Jara - Calzada - Centro<br />
                    • <b>L3:</b> Hospital - Barrio Alto - Centro
                </span>
            ),
            image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
            price: 'Ordinario 1.10€',
            link: 'https://sanlucar.avanzagrupo.com/lineas-y-horarios/plano-general',
            actionLabel: 'Ver Horarios y Líneas'
        },
        {
            id: 'taxi',
            name: 'Radio Taxi Sanlúcar',
            service: '24 Horas / 7 Días',
            description: 'Paradas: Hospital, El Palmar, Barrio Alto, Plaza del Pino. Tel: 956 360 004 / 956 360 005',
            image: 'https://images.unsplash.com/photo-1619059558110-c45be64b73ae?auto=format&fit=crop&q=80&w=800',
            price: 'Taxímetro',
            link: 'tel:956360004',
            actionLabel: 'Llamar al Taxi'
        },
        {
            id: 'boat-donana',
            name: 'Buque Real Fernando',
            service: 'Conexión Doñana',
            description: 'Travesía fluvial al P.N. Doñana desde Bajo de Guía. Naturaleza viva.',
            image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800',
            price: 'Consultar Tarifa',
            link: 'https://visitasdonana.com/',
            actionLabel: 'Reservar Visita'
        }
    ];

    return (
        <ListingLayout
            title={<>Movilidad y <span className="text-secondary">Transporte</span></>}
            subtitle="Toda la información para llegar y moverte por Sanlúcar de Barrameda."
            content={
                <div className="transport-container">

                    {/* SECCIÓN 1: CÓMO LLEGAR */}
                    <section className="transport-section">
                        <h2 className="section-title" style={{ marginBottom: '3rem', fontSize: '2rem' }}>🚆 Cómo llegar a Sanlúcar</h2>
                        <div className="grid">
                            {arrivalConnections.map(item => (
                                <ListingCard
                                    key={item.id}
                                    image={item.image}
                                    title={item.name}
                                    subtitle={item.service}
                                    description={item.description}
                                    price={item.price}
                                    actionLabel={item.actionLabel}
                                    borderColor="var(--color-secondary)"
                                    onAction={() => window.open(item.link, '_blank')}
                                />
                            ))}
                        </div>
                    </section>

                    {/* SECCIÓN 2: MOVERSE POR LA CIUDAD (URBANO) */}
                    <section className="transport-section" style={{ marginTop: '4rem' }}>
                        <h2 className="section-title" style={{ marginBottom: '3rem', fontSize: '2rem' }}>🏙️ Transporte Urbano</h2>
                        <div className="grid">
                            {urbanTransport.map(item => (
                                <ListingCard
                                    key={item.id}
                                    image={item.image}
                                    title={item.name}
                                    subtitle={item.service}
                                    description={item.description}
                                    price={item.price}
                                    actionLabel={item.actionLabel}
                                    borderColor="var(--color-secondary)"
                                    onAction={() => {
                                        if (item.link.startsWith('tel:')) {
                                            window.open(item.link, '_self');
                                        } else {
                                            window.open(item.link, '_blank');
                                        }
                                    }}
                                />
                            ))}
                        </div>
                    </section>

                    {/* SECCIÓN 3: OTROS / ALQUILERES */}
                    <section className="transport-section" style={{ marginTop: '4rem' }}>
                        <h2 className="section-title" style={{ marginBottom: '3rem', fontSize: '2rem' }}>🚲 Alquiler y Otros</h2>
                        {transport && transport.length > 0 ? (
                            <div className="grid">
                                {transport.map(item => (
                                    <ListingCard
                                        key={item.id}
                                        image={item.image}
                                        title={item.name}
                                        subtitle={item.service}
                                        description={item.description}
                                        price={item.price}
                                        actionLabel="Más Info"
                                        borderColor="var(--color-secondary)"
                                        onAction={() => { }}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="glass glass-card" style={{ padding: '2rem', textAlign: 'center', borderRadius: 'var(--radius-card)' }}>
                                <p style={{ color: '#666' }}>Próximamente disponible el servicio de alquiler de bicicletas y motos eléctricas.</p>
                            </div>
                        )}
                    </section>
                </div>
            }
        />
    );
};

export default TransportPage;
