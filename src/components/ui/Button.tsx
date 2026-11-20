import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'inverted' | 'subtle'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  fullWidth?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-lg',
      md: 'text-xs sm:text-sm px-4 py-2.5 gap-2 rounded-xl font-medium',
      lg: 'text-sm sm:text-base px-5 py-3 gap-2.5 font-semibold rounded-xl',
      icon: 'h-9 w-9 sm:h-10 sm:w-10 p-2 rounded-xl',
    }

    const variantStyles = {
      primary:
        'bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--primary-foreground)] shadow-xs focus:ring-[var(--primary)]/40',
      secondary:
        'bg-[var(--secondary)] hover:bg-[var(--secondary-hover)] text-[var(--secondary-foreground)] shadow-xs focus:ring-[var(--secondary)]/40',
      outline:
        'border border-[var(--outline-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-muted)] text-[var(--text-primary)] focus:ring-[var(--primary)]/30 shadow-2xs',
      ghost:
        'bg-transparent hover:bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
      inverted:
        'bg-[var(--inverted-bg)] hover:opacity-90 text-[var(--inverted-text)] shadow-sm focus:ring-stone-600',
      subtle:
        'bg-[var(--primary-subtle)] hover:bg-[var(--primary-border)]/50 text-[var(--primary)] border border-[var(--primary-border)]',
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
