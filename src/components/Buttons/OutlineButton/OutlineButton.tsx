import cn from 'classnames'
import { Button } from '@/models'
import styles from '../styles'

const OutlineButton: React.FC<Button> = ({ children, ...rest }) => {
  return (
    <button className={cn(styles, 'outline-button')} {...rest}>
      {children}
    </button>
  )
}

export default OutlineButton
