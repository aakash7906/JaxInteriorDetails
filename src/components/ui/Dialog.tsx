import React, { useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export type DialogMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
export type DialogPosition = 'center' | 'bottom-sheet' | 'bottom'

const maxWidthClasses: Record<DialogMaxWidth, string> = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full',
}

const positionOverlayClasses: Record<DialogPosition, string> = {
  center: 'items-center justify-center p-4',
  'bottom-sheet': 'items-end sm:items-center justify-center p-0 sm:p-4',
  bottom: 'items-end justify-center p-0',
}

export interface AlertDialogProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  maxWidth?: DialogMaxWidth
  position?: DialogPosition
  zIndex?: string
  overlayClassName?: string
  contentClassName?: string
  className?: string
  showCloseButton?: boolean
  closeOnBackdropClick?: boolean
  closeOnEsc?: boolean
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  children,
  title,
  description,
  maxWidth = 'sm',
  position = 'center',
  zIndex = 'z-50',
  overlayClassName,
  contentClassName,
  className,
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEsc = true,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose()
      }
    },
    [closeOnEsc, onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnBackdropClick) {
      onClose()
    }
  }

  const isBottomSheet = position === 'bottom-sheet'

  return (
    <div
      onClick={handleOverlayClick}
      className={cn(
        'fixed inset-0 bg-black/60 backdrop-blur-xs flex animate-in fade-in duration-150',
        zIndex,
        positionOverlayClasses[position],
        overlayClassName
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'relative bg-card text-foreground w-full p-5 sm:p-6 shadow-2xl border border-border flex flex-col',
          isBottomSheet
            ? 'rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom duration-200'
            : 'rounded-3xl animate-in zoom-in-95 duration-150',
          maxWidthClasses[maxWidth] || maxWidth,
          contentClassName,
          className
        )}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-border text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {(title || description) && (
          <div className="text-center flex flex-col gap-1.5 mb-2 pr-6 pl-6">
            {title && (
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                {title}
              </h3>
            )}
            {description && (
              <div className="text-xs text-muted-foreground leading-relaxed">
                {description}
              </div>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  )
}

export default AlertDialog
