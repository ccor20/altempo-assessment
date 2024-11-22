import cn from 'classnames'
import { Button } from '@/models'
import styles from '../styles'

const SocialButton: React.FC<Button> = ({ children, ...rest }) => {
  return (
    <button className={cn(styles, 'social-button')} {...rest}>
      {children}
    </button>
  )
}

export default SocialButton
