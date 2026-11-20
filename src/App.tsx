import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './layout/header'
import Navbar from './layout/navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Gallery from './pages/Gallery'
import Booking from './pages/Booking'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import AddVehicle from './pages/AddVehicle'
import DesktopDeviceFrame from './components/DesktopDeviceFrame'

/**
 * Inner Application Shell that runs the actual mobile app pages
 * and synchronizes route history with top window when inside an iframe.
 */
function AppContent() {
  const location = useLocation()

  // Bi-Directional Route & History Synchronization:
  // When navigating inside the iframe, keep the outer browser's address bar in sync
  useEffect(() => {
    if (typeof window !== 'undefined' && window.self !== window.top) {
      try {
        const fullPath = location.pathname + location.search
        if (
          window.top &&
          window.top.location.pathname + window.top.location.search !== fullPath
        ) {
          window.top.history.replaceState(null, '', fullPath)
        }
      } catch (e) {
        // Cross-origin safety
      }
    }
  }, [location.pathname, location.search])

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      {/* Mobile/Tablet Viewport Shell container */}
      <div className="w-full max-w-md min-h-screen flex flex-col bg-background relative pb-20 select-auto">
        {/* Top Header with Profile Icon */}
        <Header />

        {/* Page Routing */}
        <main className="flex-1 px-3 sm:px-4 pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-vehicle" element={<AddVehicle />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Bottom Floating Navigation Bar */}
        <Navbar />
      </div>
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <DesktopDeviceFrame>
        <AppContent />
      </DesktopDeviceFrame>
    </BrowserRouter>
  )
}

export default App
