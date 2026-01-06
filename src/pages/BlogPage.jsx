import React from 'react';
import ListingCard from '../components/ListingCard';

const BlogPage = () => {
    const posts = [
        {
            id: 1,
            title: 'La ruta de la tapa perfecta en Plaza Cabildo',
            subtitle: 'Gastronomía • 2 Ene 2026',
            description: 'Descubre qué pedir en cada bar: desde las Tortillitas de Balbino hasta las Papas de La Gitana.',
            image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 2,
            title: 'Los 5 mejores lugares para ver la puesta de sol',
            subtitle: 'Guías • 28 Dic 2025',
            description: 'No solo Bajo de Guía existe. Te enseñamos rincones secretos para el atardecer perfecto.',
            image: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <div style={{ paddingTop: '2rem', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                        El Rincón del <span style={{ color: 'var(--color-secondary)' }}>Sanluqueño</span>
                    </h1>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Consejos locales, secretos gastronómicos y actualidad de nuestra ciudad.
                    </p>
                </div>

                <div className="listing-grid">
                    {posts.map((post) => (
                        <ListingCard
                            key={post.id}
                            className="compact-card-mobile"
                            image={post.image}
                            title={post.title}
                            subtitle={post.subtitle}
                            description={post.description}
                            borderColor="var(--color-secondary)"
                            actionLabel="Leer más"
                            onAction={() => { }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
