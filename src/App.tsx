import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
        {/* Mobile/Tablet Viewport Shell container */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl min-h-screen flex flex-col bg-background sm:border-x sm:border-border sm:shadow-lg relative pb-20">
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
    </BrowserRouter>
  )
}

export default App
