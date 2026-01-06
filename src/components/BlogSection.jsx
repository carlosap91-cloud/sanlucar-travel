import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    // Hardcoded featured post for preview
    const featuredPost = {
        title: 'La ruta de la tapa perfecta',
        date: '2 Ene 2026',
        description: 'Descubre qué pedir en cada bar: desde las Tortillitas de Balbino hasta las Papas de La Gitana.',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800'
    };

    return (
        <div id="blog-home" style={{
            border: '3px solid var(--color-primary)',
            borderRadius: '40px',
            padding: '3rem 2rem',
            backgroundColor: '#fff',
            boxShadow: 'var(--shadow)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <style>{`
                @media (max-width: 768px) {
                    #blog-home {
                        padding: 2rem 1.5rem !important;
                    }
                    #blog-home h2 {
                        font-size: 2rem;
                    }
                }
            `}</style>
            <div className="grid" style={{ alignItems: 'center' }}>
                <div className="animate-fade-up">
                    <span style={{ color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>
                        El Rincón del Sanluqueño
                    </span>
                    <h2 style={{ margin: '1rem 0 1.5rem' }}>
                        Actualidad y <br /> <span style={{ color: 'var(--color-secondary)' }}>Secretos Locales</span>
                    </h2>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{featuredPost.title}</h3>
                        <p style={{ color: '#666', marginBottom: '1rem' }}>{featuredPost.description}</p>
                        <Link to="/blog" className="btn btn-secondary">Leer el Blog</Link>
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <img
                        src={featuredPost.image}
                        alt="Blog Sanlúcar"
                        style={{
                            borderRadius: '30px',
                            boxShadow: 'var(--shadow)',
                            width: '100%',
                            maxWidth: '500px',
                            margin: '0 auto',
                            aspectRatio: '3/2',
                            objectFit: 'cover',
                            border: '3px solid var(--color-secondary)'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
