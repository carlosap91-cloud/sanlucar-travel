import React from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import GallerySection from '../components/GallerySection';
import GastronomySection from '../components/GastronomySection';
import NatureSection from '../components/NatureSection';

const HomePage = () => {
    return (
        <main>
            {/* 1. Hero Section */}
            <Hero />

            {/* 1.5 Featured Section (Dynamic Favorites) */}
            <FeaturedSection />

            {/* 2. Gallery Section (Visual Impact) */}
            <GallerySection />

            {/* 3. Dual Section (Gastronomy & Nature) */}
            <section className="section-padding" style={{ background: 'var(--color-bg-alt)' }}>
                <div style={{ width: '100%', maxWidth: 'calc(1440px + 4rem)', margin: '0 auto', padding: '0 5vw' }}>
                    <style>{`
                        .dual-section-grid {
                            display: grid;
                            gap: 2rem;
                            grid-template-columns: 1fr;
                        }
                        @media (min-width: 1024px) {
                            .dual-section-grid {
                                grid-template-columns: 1fr 1fr;
                            }
                        }
                    `}</style>
                    <div className="dual-section-grid">
                        <GastronomySection />
                        <NatureSection />
                    </div>
                </div>
            </section>

            {/* TIP: You can easily reorder or remove sections here */}
        </main>
    );
};

export default HomePage;
