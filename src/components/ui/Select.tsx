import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
}

export interface SelectProps {
  value: string
  onChange: (value: string) => void
  options: (string | SelectOption)[]
  placeholder?: string
  className?: string
  triggerClassName?: string
  dropdownClassName?: string
  disabled?: boolean
  label?: string
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  className = '',
  triggerClassName = '',
  dropdownClassName = '',
  disabled = false,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const normalizedOptions: SelectOption[] = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt }
    }
    return opt
  })

  const selectedOption = normalizedOptions.find((opt) => opt.value === value)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('touchstart', handleOutsideClick)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div className={cn('relative w-full text-left select-none', className)} ref={containerRef}>
      {label && (
        <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={cn(
          'w-full bg-card hover:bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground transition-all flex items-center justify-between gap-2 shadow-2xs cursor-pointer outline-none focus:outline-none focus:ring-1 focus:ring-primary',
          isOpen && 'border-primary ring-1 ring-primary/40 bg-card',
          disabled && 'opacity-60 cursor-not-allowed',
          triggerClassName
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate flex items-center gap-2">
          {selectedOption?.icon}
          <span className={cn('font-medium', !selectedOption && 'text-muted-foreground font-normal')}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180 text-primary'
          )}
        />
      </button>

      {/* Floating Dropdown Menu - solid opaque bg-card, solid border, shadow-2xl, and high z-index */}
      {isOpen && (
        <div
          role="listbox"
          className={cn(
            'absolute z-50 mt-1.5 w-full bg-card text-foreground rounded-2xl border border-border shadow-2xl p-1.5 overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-56 overflow-y-auto no-scrollbar',
            dropdownClassName
          )}
          style={{ backgroundColor: 'var(--card, #ffffff)' }}
        >
          {normalizedOptions.map((option) => {
            const isSelected = option.value === value

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
                className={cn(
                  'w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left cursor-pointer group',
                  isSelected
                    ? 'bg-primary-subtle text-primary font-bold'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {option.icon}
                  <div className="min-w-0">
                    <p className="truncate">{option.label}</p>
                    {option.description && (
                      <p className="text-[10px] text-muted-foreground font-normal truncate">
                        {option.description}
                      </p>
                    )}
                  </div>
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 shrink-0 text-primary" />
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export const DropdownMenu = Select
export default Select
