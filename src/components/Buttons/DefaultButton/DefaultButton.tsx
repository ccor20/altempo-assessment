import cn from 'classnames'
import { Button } from '@/components/types'
import styles from '../styles'

const DefaultButton: React.FC<Button> = ({ children, className, ...rest }) => (
  <button className={cn(styles, 'default-button', className)} {...rest}>
    {children}
  </button>
)

export default DefaultButton
