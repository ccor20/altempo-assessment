import cn from 'classnames'
import ChevronCheckIcon from '@assets/icons/chevron-check.svg?react'
import styles from './styles'

type Props = {
  label: string
  value: string
  checked?: boolean
  disabled?: boolean
  className?: string
  onChange: (value: string) => void
}

const Checkbox: React.FC<Props> = ({
  label,
  value,
  checked = false,
  disabled = false,
  className,
  onChange
}) => (
  <label className={cn('checkbox', styles, className)}>
    <div
      className={cn('custom-checkbox', {
        checked,
        disabled
      })}
    >
      <ChevronCheckIcon />
    </div>
    <span
      className={cn('paragraph-sm', 'checkbox-label', {
        disabled,
        checked
      })}
    >
      {label}
    </span>
    <input
      type="checkbox"
      className="hidden"
      checked={checked}
      onChange={() => !disabled && onChange(value)}
      disabled={disabled}
      value={value}
    />
  </label>
)

export default Checkbox
