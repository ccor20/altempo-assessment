import cn from 'classnames'
import { Button } from '@/components/types/button.model'
import FacebookIcon from '@assets/icons/facebook.svg?react'
import GoogleIcon from '@assets/icons/google.svg?react'
import AppleIcon from '@assets/icons/apple.svg?react'
import styles from '../styles'

interface SocialButtonProps extends Button {
  social: 'facebook' | 'google' | 'apple'
}

const SocialButton: React.FC<SocialButtonProps> = ({
  className,
  social,
  ...rest
}) => {
  const iconSelector = () => {
    switch (social) {
      case 'facebook':
        return <FacebookIcon className="icon" />
      case 'google':
        return <GoogleIcon className="icon" />
      case 'apple':
        return <AppleIcon className="icon" />
      default:
        return null
    }
  }

  return (
    <button
      className={cn(styles, 'social-button', className, social)}
      {...rest}
    >
      {iconSelector()}
    </button>
  )
}

export default SocialButton
