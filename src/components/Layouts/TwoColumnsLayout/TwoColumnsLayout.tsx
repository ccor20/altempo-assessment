import cn from 'classnames'
import styles from './styles'

type Props = {
  leftChild: React.ReactNode
  rightChild: React.ReactNode
  className?: string
}

const TwoColumnsLayout: React.FC<Props> = ({
  leftChild,
  rightChild,
  className
}) => (
  <div className={cn(styles, className)}>
    <div className="left-column">{leftChild}</div>
    <div className="right-column">{rightChild}</div>
  </div>
)

export default TwoColumnsLayout
