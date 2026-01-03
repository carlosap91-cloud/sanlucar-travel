import React from 'react';
import SidebarFilters from './SidebarFilters';

const ListingLayout = ({ title, subtitle, sidebar, content }) => {
    // Mobile toggle state is no longer needed as SidebarFilters handles the UI
    const [showFilters, setShowFilters] = React.useState(false);

    return (
        <div className="listing-layout" style={{ maxWidth: '1440px', margin: '0 auto', padding: '2rem 5vw' }}>
            <style>{`
                .listing-layout {
                    padding-top: 100px !important; /* Base padding for desktop */
                }
                @media (max-width: 900px) {
                    .listing-layout {
                        padding-top: 120px !important; /* Extra padding for mobile header */
                    }
                    /* Ensure SidebarFilters toggle doesn't get hidden */
                    .filter-container {
                        position: relative;
                        z-index: 10;
                    }
                }
            `}</style>

            {/* Header */}
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{title}</h1>
                {subtitle && <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>}
            </div>

            {/* Horizontal Filter Toolbar (previously sidebar) */}
            {/* Always visible, logic handled internally by SidebarFilters (Single Button) */}
            <div className="filter-container" style={{ marginBottom: '2rem' }}>
                {React.isValidElement(sidebar)
                    ? React.cloneElement(sidebar, { layout: 'horizontal' })
                    : sidebar
                }
            </div>

            {/* Content Area (Full Width) */}
            <div className="content-column">
                {content}
            </div>
        </div>
    );
};

export default ListingLayout;
