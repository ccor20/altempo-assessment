import cn from 'classnames'
import { Button } from '@/models'
import styles from '../styles'

const DefaultButton: React.FC<Button> = ({ children, ...rest }) => {
  return (
    <button className={cn(styles, 'default-button')} {...rest}>
      {children}
    </button>
  )
}

export default DefaultButton
