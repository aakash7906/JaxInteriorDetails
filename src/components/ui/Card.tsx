import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'subtle' | 'inverted' | 'outline'
  interactive?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', interactive = false, children, ...props }, ref) => {
    const variants = {
      default:
        'bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] rounded-2xl',
      elevated:
        'bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] rounded-2xl',
      subtle:
        'bg-[var(--bg-muted)] border border-[var(--border-subtle)] rounded-2xl',
      inverted:
        'bg-[var(--inverted-bg)] text-[var(--inverted-text)] border border-[var(--inverted-border)] rounded-2xl',
      outline:
        'bg-transparent border border-[var(--outline-color)] rounded-2xl',
    }

    return (
      <div
        ref={ref}
        className={cn(
          variants[variant],
          interactive &&
            'transition-all duration-200 hover:shadow-md hover:border-[var(--primary-border)] cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
