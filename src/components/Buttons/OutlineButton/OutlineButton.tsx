import cn from 'classnames'
import { Button } from '@/components/types'
import styles from '../styles'

const OutlineButton: React.FC<Button> = ({ children, className, ...rest }) => (
  <button className={cn('outline-button', styles, className)} {...rest}>
    {children}
  </button>
)

export default OutlineButton
