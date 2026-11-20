import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle' | 'inverted' | 'gold'
  size?: 'sm' | 'md'
  dot?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  dot = false,
  children,
  ...props
}) => {
  const variants = {
    primary:
      'bg-[var(--primary)] text-[var(--primary-foreground)]',
    secondary:
      'bg-[var(--secondary)] text-[var(--secondary-foreground)]',
    outline:
      'border border-[var(--outline-color)] text-[var(--text-secondary)] bg-[var(--bg-card)]',
    subtle:
      'bg-[var(--primary-subtle)] text-[var(--primary)] border border-[var(--primary-border)]',
    inverted:
      'bg-[var(--inverted-bg)] text-[var(--inverted-text)] border border-[var(--inverted-border)]',
    gold:
      'bg-amber-50 text-amber-800 border border-amber-200',
  }

  const dotColors = {
    primary: 'bg-[var(--primary-foreground)]',
    secondary: 'bg-[var(--secondary-foreground)]',
    outline: 'bg-[var(--text-secondary)]',
    subtle: 'bg-[var(--primary)]',
    inverted: 'bg-[var(--inverted-text)]',
    gold: 'bg-amber-500',
  }

  const sizes = {
    sm: 'text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full font-medium tracking-wide uppercase',
    md: 'text-xs px-2.5 py-1 rounded-full font-medium',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', dotColors[variant])} />}
      {children}
    </span>
  )
}
