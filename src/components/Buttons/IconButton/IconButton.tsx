import cn from 'classnames'
import { Button } from '@/components/types'
import styles from '../styles'

const IconButton: React.FC<Button> = ({ children, className, ...rest }) => (
  <button className={cn(styles, 'icon-button', className)} {...rest}>
    {children}
  </button>
)

export default IconButton
