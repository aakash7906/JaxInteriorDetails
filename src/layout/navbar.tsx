import React from 'react'
import { NavLink } from 'react-router-dom'
import { Compass, Sparkles, Image as ImageIcon, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Navbar: React.FC = () => {
  const tabs = [
    { to: '/', label: 'Explore', icon: Compass },
    { to: '/services', label: 'Services', icon: Sparkles },
    { to: '/gallery', label: 'Gallery', icon: ImageIcon },
    { to: '/booking', label: 'Book', icon: Calendar },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border pb-safe">
      <div className="max-w-md mx-auto grid grid-cols-4 px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon

          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center justify-center py-1 rounded-xl transition-all duration-150 cursor-pointer select-none',
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground font-medium'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={cn(
                      'p-1 rounded-lg transition-transform',
                      isActive && 'scale-110'
                    )}
                  >
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[10px] tracking-tight">{tab.label}</span>
                </>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
