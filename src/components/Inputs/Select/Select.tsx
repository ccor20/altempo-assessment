import { useState, useRef, useEffect } from 'react'
import cn from 'classnames'
import { Select as SelectModel } from '@/components/types'
import ChevronDownArrow from '@assets/icons/chevron-down-arrow.svg?react'
import styles from '../styles'

const Select: React.FC<SelectModel> = ({
  label,
  helperText,
  error,
  options,
  selectedValue,
  className,
  optional = false,
  searchPlaceholder = 'Buscar...',
  closeOnSelect = true,
  onSelectChange
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSearchTerm('')
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div ref={containerRef} className={cn(styles, 'select', className)}>
      <div
        className={cn('input-wrapper', 'select-header', { 'is-open': isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue && (
          <span className="selected-value">{selectedValue.label}</span>
        )}
        <label
          className={cn('input-label', {
            'exist-selected-value': selectedValue
          })}
        >
          {label}
          {optional && <span className="optional-text">(opcional)</span>}
        </label>
        <ChevronDownArrow
          className={cn('select-arrow', { 'is-open': isOpen })}
        />
      </div>
      {helperText && (
        <span className="helper-text paragraph-xs">{helperText}</span>
      )}
      {error && <span className="error-text paragraph-xs">{error}</span>}

      {isOpen && (
        <div className="select-dropdown">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="options-container">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={cn('option', {
                  'is-selected': selectedValue?.value === option.value
                })}
                onClick={(e) => {
                  e.stopPropagation()
                  onSelectChange?.(option)

                  if (closeOnSelect) setIsOpen(false)
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Select
