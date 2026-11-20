import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, MessageSquare, Info, ShieldCheck, Mail, User } from 'lucide-react'
import { BUSINESS_INFO } from '@/data/siteData'

export const Header: React.FC = () => {
  const location = useLocation()

  const getPageInfo = () => {
    const path = location.pathname
    if (path === '/') return { title: 'Jax Detail', subtitle: 'Explore' }
    if (path.startsWith('/services/')) return { title: 'Jax Detail', subtitle: 'Service Details' }
    if (path === '/services') return { title: 'Jax Detail', subtitle: 'Services' }
    if (path === '/gallery') return { title: 'Jax Detail', subtitle: 'Transformations' }
    if (path === '/booking') return { title: 'Jax Detail', subtitle: 'Book & Quote' }
    if (path === '/about') return { title: 'Jax Detail', subtitle: 'About Us' }
    if (path === '/contact') return { title: 'Jax Detail', subtitle: 'Contact Us' }
    if (path === '/profile') return { title: 'Jax Detail', subtitle: 'Driver Profile' }
    return { title: 'Jax Detail', subtitle: 'Concierge' }
  }

  const { title, subtitle } = getPageInfo()

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border-subtle px-4 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xs tracking-tighter shadow-xs">
          JD
        </div>
        <div className="text-left">
          <h1 className="text-sm font-semibold tracking-tight text-foreground leading-none">
            {title}
          </h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium mt-0.5">
            {subtitle}
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-1.5 sm:gap-2">
        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          title="Call Direct"
          aria-label="Call"
        >
          <Phone className="w-4 h-4" />
        </a>
        <a
          href={`sms:${BUSINESS_INFO.rawPhone}`}
          className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          title="Text Us"
          aria-label="Text"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
        <Link
          to="/profile"
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            location.pathname === '/profile'
              ? 'bg-primary text-primary-foreground shadow-xs ring-2 ring-primary/30'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-2xs'
          }`}
          title="My Profile"
          aria-label="Profile"
        >
          <User className="w-4 h-4" />
        </Link>
      </div>
    </header>
  )
}

export default Header
