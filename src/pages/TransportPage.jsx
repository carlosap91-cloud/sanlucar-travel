import React from 'react';
import { useData } from '../context/DataContext';
import ListingLayout from '../components/ListingLayout';
import ListingCard from '../components/ListingCard';

// Images
import airportImg from '../assets/transport/airport.png';
import trainImg from '../assets/transport/train.png';
import busInterImg from '../assets/transport/bus_interurban.png';
import busUrbanImg from '../assets/transport/bus_urban.png';
import taxiImg from '../assets/transport/taxi.png';

const TransportPage = () => {
    const { transport } = useData();

    // 1. Cómo Llegar (Interurbano)
    const arrivalConnections = [
        {
            id: 'airport-jerez',
            name: 'Aeropuerto de Jerez',
            service: 'Avión (27 km)',
            description: 'Conexiones nacionales e internacionales. A 30 min en taxi o coche.',
            image: airportImg,
            price: 'Taxi ~45€',
            link: 'https://www.aena.es/es/jerez.html',
            actionLabel: 'Información Aeropuerto'
        },
        {
            id: 'train-jerez',
            name: 'Estación de Tren Jerez',
            service: 'Renfe / AVE (25 km)',
            description: 'Enlace alta velocidad. Conexión con Sanlúcar mediante Bus o Taxi.',
            image: trainImg,
            price: 'Bus 2.50€',
            link: 'https://www.renfe.com',
            actionLabel: 'Información Renfe'
        },
        {
            id: 'bus-interurban',
            name: 'Estación de Autobuses',
            service: 'InterBus / Monbus',
            description: 'Av. Constitución. Conexiones con Sevilla, Cádiz y Chipiona. Tel: 956 38 50 60',
            image: busInterImg,
            price: 'Desde 2€',
            // link: Removed in favor of specific actions
            actions: [
                { label: 'InterBus', onClick: () => window.open('https://grupointerbus.com/', '_blank') },
                { label: 'Monbus', onClick: () => window.open('https://www.monbus.es/es', '_blank') }
            ]
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
            image: busUrbanImg,
            price: 'Ordinario 1.10€',
            link: 'https://sanlucar.avanzagrupo.com/lineas-y-horarios/plano-general',
            actionLabel: 'Ver Horarios y Líneas'
        },
        {
            id: 'taxi',
            name: 'Radio Taxi Sanlúcar',
            service: '24 Horas / 7 Días',
            description: 'Paradas: Hospital, El Palmar, Barrio Alto, Plaza del Pino. Tel: 956 360 004 / 956 360 005',
            image: taxiImg,
            price: 'Taxímetro',
            link: 'tel:956360004',
            actionLabel: 'Llamar a RadioTaxi Sanlúcar'
        }

    ];

    return (
        <ListingLayout
            title={<>Movilidad y <span style={{ color: 'var(--color-secondary)' }}>Transporte</span></>}
            subtitle="Toda la información para llegar y moverte por Sanlúcar de Barrameda."
            content={
                <div className="transport-container">

                    {/* SECCIÓN 1: CÓMO LLEGAR */}
                    <section className="transport-section">
                        <h2 className="section-title" style={{ marginBottom: '3rem', fontSize: '2rem' }}>🚆 Cómo llegar a <span style={{ color: 'var(--color-secondary)' }}>Sanlúcar</span></h2>
                        <div className="listing-grid">
                            {arrivalConnections.map(item => (
                                <ListingCard
                                    key={item.id}
                                    className="compact-card-mobile"
                                    image={item.image}
                                    title={item.name}
                                    subtitle={item.service}
                                    description={item.description}
                                    price={item.price}
                                    actionLabel={item.actionLabel}
                                    actions={item.actions}
                                    borderColor="var(--color-secondary)"
                                    onAction={() => item.link && window.open(item.link, '_blank')}
                                />
                            ))}
                        </div>
                    </section>

                    {/* SECCIÓN 2: MOVERSE POR LA CIUDAD (URBANO) */}
                    <section className="transport-section" style={{ marginTop: '4rem' }}>
                        <h2 className="section-title" style={{ marginBottom: '3rem', fontSize: '2rem' }}>🏙️ Transporte <span style={{ color: 'var(--color-secondary)' }}>Urbano</span></h2>
                        <div className="listing-grid">
                            {urbanTransport.map(item => (
                                <ListingCard
                                    key={item.id}
                                    className="compact-card-mobile"
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
                        <h2 className="section-title" style={{ marginBottom: '3rem', fontSize: '2rem' }}>🚲 Alquiler y <span style={{ color: 'var(--color-secondary)' }}>Otros</span></h2>
                        {transport && transport.length > 0 ? (
                            <div className="listing-grid">
                                {transport.map(item => (
                                    <ListingCard
                                        key={item.id}
                                        className="compact-card-mobile"
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
