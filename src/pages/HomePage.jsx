import React from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import GallerySection from '../components/GallerySection';
import GastronomySection from '../components/GastronomySection';
import NatureSection from '../components/NatureSection';
import BlogSection from '../components/BlogSection';

const HomePage = () => {
    return (
        <main>
            <style>{`
                /* Reusable Grid Class */
                .dual-section-grid {
                    display: grid;
                    gap: 2rem;
                    grid-template-columns: 1fr;
                }
                @media (min-width: 1024px) {
                    .dual-section-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                /* Offset for Fixed Header */
                .first-section-offset {
                    padding-top: 80px;
                }
            `}</style>

            {/* 1. Favoritos de los Viajeros (Top Priority) */}
            <div id="inicio" className="first-section-offset">
                <FeaturedSection />
            </div>

            {/* 2. Hero & Blog (Side by Side) */}
            <section className="section-padding" style={{ background: 'var(--color-bg-alt)' }}>
                <div style={{ width: '100%', maxWidth: 'calc(1440px + 4rem)', margin: '0 auto', padding: '0 5vw' }}>
                    <div className="dual-section-grid">
                        <Hero />
                        <BlogSection />
                    </div>
                </div>
            </section>

            {/* 3. Gallery Section (Visual Impact) */}
            <GallerySection />

            {/* 4. Gastronomy & Nature (Side by Side) */}
            <section className="section-padding" style={{ background: 'var(--color-bg-alt)' }}>
                <div style={{ width: '100%', maxWidth: 'calc(1440px + 4rem)', margin: '0 auto', padding: '0 5vw' }}>
                    <div className="dual-section-grid">
                        <GastronomySection />
                        <NatureSection />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
