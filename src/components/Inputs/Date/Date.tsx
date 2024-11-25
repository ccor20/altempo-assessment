import { useState, useRef, useEffect } from 'react'
import cn from 'classnames'
import { DatePicker as DatePickerModel } from '@/components/types'
import CalendarIcon from '@assets/icons/calendar.svg?react'
import ChevronRightArrow from '@assets/icons/chevron-right-arrow.svg?react'
import ChevronLeftArrow from '@assets/icons/chevron-left-arrow.svg?react'

import styles from '../styles'

const DatePicker: React.FC<DatePickerModel> = ({
  label,
  helperText,
  error,
  value,
  onChange,
  className,
  optional = false,
  closeOnSelect = true
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(value || new Date())
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    const days: Date[] = []

    // Days from the previous month to complete the first week
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(new Date(year, month, -i))
    }

    // Days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    // Days from the next month to complete the last week
    const remainingDays = 42 - days.length // 6 weeks x 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i))
    }

    return days
  }

  const formatDate = (date: Date) =>
    date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })

  const handleMonthChange = (increment: number) => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment)
    )
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date: Date) =>
    value?.toDateString() === date.toDateString()

  const isSameMonth = (date: Date) =>
    date.getMonth() === currentMonth.getMonth()

  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  return (
    <div ref={containerRef} className={cn(styles, 'date', className)}>
      <div
        className={cn('input-wrapper', 'datepicker-input', {
          'is-open': isOpen
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="input-content">
          {value && <span className="selected-value">{formatDate(value)}</span>}
          <span
            className={cn('input-label', {
              'exist-selected-value': value
            })}
          >
            {label}
            <span className="optional-text">(DD/MM/AAAA)</span>
            {optional && <span className="optional-text">(opcional)</span>}
          </span>
        </div>
        <CalendarIcon />
      </div>
      {helperText && (
        <span className="helper-text paragraph-xs">{helperText}</span>
      )}
      {error && <span className="error-text paragraph-xs">{error}</span>}

      {isOpen && (
        <div className="calendar-dropdown">
          <div className="calendar-header">
            <button
              className="month-nav-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleMonthChange(-1)
              }}
            >
              <ChevronLeftArrow />
            </button>
            <span className="current-month">
              {`${
                monthNames[currentMonth.getMonth()]
              } ${currentMonth.getFullYear()}`}
            </span>
            <button
              className="month-nav-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleMonthChange(1)
              }}
            >
              <ChevronRightArrow />
            </button>
          </div>
          <div className="calendar-grid">
            {weekDays.map((day) => (
              <div key={day} className="weekday">
                {day}
              </div>
            ))}
            {getDaysInMonth(currentMonth).map((date, index) => (
              <button
                key={index}
                className={cn('day-btn', {
                  'is-today': isToday(date),
                  'is-selected': isSelected(date),
                  'other-month': !isSameMonth(date)
                })}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onChange?.(date)

                  if (closeOnSelect) setIsOpen(false)
                }}
              >
                {date.getDate()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DatePicker
