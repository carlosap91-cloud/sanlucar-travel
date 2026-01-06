import React from 'react';
import ListingCard from '../components/ListingCard';
import ListingLayout from '../components/ListingLayout';

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
        <ListingLayout
            title={<>El Rincón del <span style={{ color: 'var(--color-secondary)' }}>Sanluqueño</span></>}
            subtitle="Consejos locales, secretos gastronómicos y actualidad de nuestra ciudad."
            content={
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
            }
        />
    );
};

export default BlogPage;
