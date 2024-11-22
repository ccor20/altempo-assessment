import cn from 'classnames'
import { Button } from '@/models'
import styles from '../styles'

const IconButton: React.FC<Button> = ({ children, ...rest }) => {
  return (
    <button className={cn(styles, 'icon-button')} {...rest}>
      {children}
    </button>
  )
}

export default IconButton
