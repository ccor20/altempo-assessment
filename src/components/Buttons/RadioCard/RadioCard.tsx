import cn from 'classnames'
import ChevronCheckIcon from '@assets/icons/chevron-check.svg?react'
import styles from './styles'

type Props = {
  children: React.ReactNode
  value: any
  className?: string
  disabled?: boolean
  selected?: boolean
  onClick: (value: any) => void
}

const RadioCard: React.FC<Props> = ({
  children,
  value,
  className,
  disabled = false,
  selected = false,
  onClick
}) => (
  <div
    onClick={() => onClick(value)}
    className={cn(styles, 'radio-card', { selected, disabled }, className)}
  >
    <div className={cn('check-icon', { selected })}>
      <ChevronCheckIcon className="w-4 h-4 text-white" />
    </div>
    {children}
  </div>
)

export default RadioCard
