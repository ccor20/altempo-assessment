import cn from 'classnames'
import { Button } from '@/components/types'
import styles from '../styles'

const TextButton: React.FC<Button> = ({ children, className, ...rest }) => (
  <button className={cn('text-button', styles, className)} {...rest}>
    {children}
  </button>
)

export default TextButton
