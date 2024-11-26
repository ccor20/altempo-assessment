import { useRef } from 'react'
import cn from 'classnames'
import styles from './styles'

interface CardButtonProps {
  title: string
  image: string
  isSelected?: boolean
  onClick?: () => void
  className?: string
}

const CardButton: React.FC<CardButtonProps> = ({
  title,
  image,
  isSelected = false,
  onClick,
  className
}) => {
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <button
      className={cn(styles, className, { selected: isSelected })}
      onClick={onClick}
    >
      <div className={cn('card-container', { selected: isSelected })}>
        <div className="image-container">
          <img ref={imageRef} src={image} alt={title} loading="lazy" />
          <div className={cn('overlay', { selected: isSelected })} />
        </div>
        <div className="text-container">
          <span className={cn('paragraph-base')}>{title}</span>
        </div>
      </div>
    </button>
  )
}

export default CardButton
