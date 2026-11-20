import React, { useState, useRef, useCallback } from 'react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  initialPosition?: number
  aspectRatio?: string
  className?: string
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  initialPosition = 49,
  aspectRatio = 'aspect-[16/10]',
  className = '',
}) => {
  const [sliderPos, setSliderPos] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPos(percent)
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX)
      }
    },
    [handleMove]
  )

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    handleMove(e.clientX)
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false)
    ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onTouchMove={handleTouchMove}
      className={`relative w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-border shadow-xs touch-none ${aspectRatio} ${className}`}
    >
      {/* After Image (Base Right layer) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* Before Image (Top Left layer with clip-path) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
        <span className="bg-black/75 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-sm shadow-xs uppercase tracking-wider">
          {beforeLabel}
        </span>
      </div>

      <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
        <span className="bg-black/75 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-sm shadow-xs uppercase tracking-wider">
          {afterLabel}
        </span>
      </div>


      {/* Vertical Divider Line & Juxtapose Handle */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-20"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Crisp white divider line */}
        <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]" />

        {/* Juxtapose-style center handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-11 bg-white rounded-xs shadow-[0_2px_8px_rgba(0,0,0,0.4)] flex items-center justify-center gap-0.5 border border-black/10">
          <span className="text-[8px] font-black text-stone-800 leading-none select-none">
            ◀
          </span>
          <span className="text-[8px] font-black text-stone-800 leading-none select-none">
            ▶
          </span>
        </div>
      </div>

      {/* Hidden range input for keyboard accessibility & screen readers */}
      <input
        type="range"
        min="0"
        max="100"
        value={Math.round(sliderPos)}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="sr-only"
        aria-label="Before and after comparison slider"
      />
    </div>
  )
}
