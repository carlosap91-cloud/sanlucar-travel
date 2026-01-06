import React from 'react';
import ListingCard from '../components/ListingCard';

const EventsPage = () => {
    const events = [
        {
            id: 1,
            title: 'Feria de la Manzanilla',
            date: 'Mayo 2026',
            description: 'La fiesta por excelencia. Casetas, farolillos y el mejor ambiente a orillas del Guadalquivir.',
            image: 'https://images.unsplash.com/photo-1547623641-82fbc7107e6c?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 2,
            title: 'Carreras de Caballos',
            date: 'Agosto 2026',
            description: 'El mayor espectáculo de las playas del sur. Interés Turístico Internacional.',
            image: 'https://images.unsplash.com/photo-1534317926135-427ae247ec65?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 3,
            title: 'Festival de Jazz',
            date: 'Julio 2026',
            description: 'Noches mágicas de música en los Jardines del Palacio Municipal.',
            image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <div style={{ paddingTop: '2rem', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                        Agenda <span style={{ color: 'var(--color-secondary)' }}>Cultural</span>
                    </h1>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Carreras de caballos, Feria de la Manzanilla, festivales de música... siente el pulso de Sanlúcar.
                    </p>
                </div>

                <div className="listing-grid">
                    {events.map((evt) => (
                        <ListingCard
                            key={evt.id}
                            className="compact-card-mobile"
                            image={evt.image}
                            title={evt.title}
                            description={evt.description}
                            price={evt.date} // Displaying date as a tag on the image
                            borderColor="var(--color-secondary)" // Consistent orange border
                            actionLabel="Más info"
                            onAction={() => { }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
