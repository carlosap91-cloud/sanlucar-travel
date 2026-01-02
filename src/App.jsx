import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import Sidebar from './components/Sidebar'
// import Navbar from './components/Navbar' // Deprecated
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import ErrorBoundary from './components/ErrorBoundary'

// Components for Home Page
import HomePage from './pages/HomePage'

// Pages
import GastronomyHubPage from './pages/GastronomyHubPage'
import RestaurantsPage from './pages/RestaurantsPage'
import WineryPage from './pages/WineryPage'
import MarketsPage from './pages/MarketsPage'
import ShopsPage from './pages/ShopsPage'
import ExperiencesHubPage from './pages/ExperiencesHubPage'
import TransportPage from './pages/TransportPage'
import TripPlannerPage from './pages/TripPlannerPage'
import AccommodationPage from './pages/AccommodationPage'
import ServiceDetailPage from './pages/ServiceDetailPage'

// Phase 2 Pages
import HistoryPage from './pages/HistoryPage'
import EventsPage from './pages/EventsPage'
import BlogPage from './pages/BlogPage'
import MapPage from './pages/MapPage'
import ContactPage from './pages/ContactPage'

import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  return (
    <ErrorBoundary>
      <DataProvider>
        <Router>
          <ScrollToTop />

          <div className="app-layout" style={{ display: 'flex' }}>
            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="main-content" style={{
              flex: 1,
              marginLeft: '260px', // Matches Sidebar width
              width: 'calc(100% - 260px)',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              background: '#f8f9fa' // Light gray dashboard background
            }}>
              <CookieBanner />

              <Routes>
                {/* Home Page Composition */}
                <Route path="/" element={<HomePage />} />

                {/* Gastronomy Hub & Sub-pages */}
                <Route path="/gastronomia" element={<GastronomyHubPage />} />
                <Route path="/restaurantes" element={<RestaurantsPage />} />
                <Route path="/bodegas" element={<WineryPage />} />
                <Route path="/gastronomia/mercados" element={<MarketsPage />} />
                <Route path="/gastronomia/tiendas" element={<ShopsPage />} />

                {/* Experiences Hub */}
                <Route path="/experiencias" element={<ExperiencesHubPage />} />

                {/* Mobility */}
                <Route path="/movilidad" element={<TransportPage />} />
                <Route path="/transporte" element={<TransportPage />} />

                {/* Premium Trip Planner */}
                <Route path="/planear-viaje" element={<TripPlannerPage />} />

                {/* DYNAMIC DETAIL PAGES */}
                <Route path="/restaurantes/:id" element={<ServiceDetailPage collectionName="restaurants" />} />
                <Route path="/bodegas/:id" element={<ServiceDetailPage collectionName="wineries" />} />
                <Route path="/experiencias/:id" element={<ServiceDetailPage collectionName="experiences" />} />

                {/* Accommodation */}
                <Route path="/alojamiento" element={<AccommodationPage />} />

                {/* Phase 2 Routes */}
                <Route path="/historia" element={<HistoryPage />} />
                <Route path="/eventos" element={<EventsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/mapa" element={<MapPage />} />
                <Route path="/contacto" element={<ContactPage />} />

                {/* Legal */}
                <Route path="/privacidad" element={<PrivacyPolicyPage />} />
                <Route path="/cookies" element={<CookiePolicyPage />} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              </Routes>

              {/* Footer is now inside main content */}
              <Footer />
            </div>

            {/* Responsive Adjustments */}
            <style>{`
              @media (max-width: 900px) {
                .main-content {
                  margin-left: 0 !important;
                  width: 100% !important;
                }
              }
            `}</style>
          </div>

        </Router>
      </DataProvider>
    </ErrorBoundary>
  )
}

export default App
