import React, { useState, useEffect, useRef } from 'react'

interface DesktopDeviceFrameProps {
  children: React.ReactNode
}

export const DesktopDeviceFrame: React.FC<DesktopDeviceFrameProps> = ({ children }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // 1. Check if already inside an iframe
  const isInsideIframe = typeof window !== 'undefined' && window.self !== window.top

  // 2. Track screen width (>= 768px considers desktop preview mode)
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth >= 768
  })

  // Track initial path to load in iframe
  const [initialPath] = useState<string>(() => {
    if (typeof window === 'undefined') return '/'
    return window.location.pathname + window.location.search
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // 3. Listen to browser popstate (Back/Forward buttons) on the desktop window and sync with iframe
  useEffect(() => {
    if (isInsideIframe || !isDesktop) return

    const handlePopState = () => {
      try {
        const targetPath = window.location.pathname + window.location.search
        if (iframeRef.current && iframeRef.current.contentWindow) {
          const iframeCurrentPath =
            iframeRef.current.contentWindow.location.pathname +
            iframeRef.current.contentWindow.location.search

          if (iframeCurrentPath !== targetPath) {
            iframeRef.current.contentWindow.location.replace(targetPath)
          }
        }
      } catch {
        // Cross-origin safety
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isInsideIframe, isDesktop])

  // If already inside an iframe OR on mobile device (< 768px), render directly in genuine mobile viewport
  if (isInsideIframe || !isDesktop) {
    return <>{children}</>
  }

  // On Desktop (>= 768px) at top level: render clean soft studio backdrop with slim rounded device bezel
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-[#f0f4fd] via-[#f7f9fe] to-[#fbf7fc] flex items-center justify-center p-4 sm:p-6 select-none relative overflow-x-hidden font-sans">
      {/* Subtle soft ambient studio glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-sky-200/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[130px] pointer-events-none" />

      {/* The Clean Phone Mockup Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Device Outer Rim (Thin, sleek black bezel with rounded corners and diffuse drop shadow) */}
        <div className="relative w-[393px] h-[852px] max-h-[92vh] bg-black rounded-[46px] p-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.18),0_10px_25px_rgba(0,0,0,0.12)] flex flex-col">
          {/* Inner Screen Display (Edge-to-Edge with matching radius) */}
          <div className="relative w-full h-full bg-[var(--background)] rounded-[40px] overflow-hidden flex flex-col">
            {/* The Isolated Viewport Iframe */}
            <iframe
              ref={iframeRef}
              src={initialPath}
              title="Mobile App Preview"
              className="w-full h-full border-0 select-auto bg-[var(--background)] no-scrollbar"
              style={{
                colorScheme: 'light',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            />
          </div>
        </div>

        {/* Soft ground shadow underneath device */}
        <div className="w-72 h-8 bg-slate-900/10 blur-xl rounded-full mt-3 pointer-events-none" />
      </div>
    </div>
  )
}

export default DesktopDeviceFrame
