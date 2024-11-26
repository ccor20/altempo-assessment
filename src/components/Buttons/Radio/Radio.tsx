import cn from 'classnames'
import styles from './styles'

interface RadioButtonProps {
  label: string
  isSelected?: boolean
  className?: string
  onChange?: (value: boolean) => void
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  isSelected = false,
  onChange,
  className
}) => {
  return (
    <button
      onClick={() => onChange && onChange(!isSelected)}
      className={cn(styles, { selected: isSelected }, className)}
    >
      <div className={cn('custom-radio')}>
        <div className="radio-dot" />
      </div>
      <span className="text-left text-base font-medium">{label}</span>
    </button>
  )
}

export default RadioButton
