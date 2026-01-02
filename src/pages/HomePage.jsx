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

            {/* 3. Gastronomy Focused Section */}
            <GastronomySection />

            {/* 4. Nature and Experiences Section */}
            <NatureSection />

            {/* TIP: You can easily reorder or remove sections here */}
        </main>
    );
};

export default HomePage;
