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
        'bg-card border border-border shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] rounded-2xl',
      elevated:
        'bg-card border border-border shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] rounded-2xl',
      subtle:
        'bg-muted border border-border-subtle rounded-2xl',
      inverted:
        'bg-inverted text-inverted-foreground border border-inverted-border rounded-2xl',
      outline:
        'bg-transparent border border-outline rounded-2xl',
    }

    return (
      <div
        ref={ref}
        className={cn(
          variants[variant],
          interactive &&
            'transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary active:scale-[0.99] cursor-pointer',
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
