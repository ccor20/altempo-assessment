import { Buttons } from '@/components'
import { SignupForm } from './components'
import styles from './styles'

type Props = {
  onContinue: () => void
  onCancel: () => void
}

const Signup: React.FC<Props> = ({ onContinue, onCancel }) => {
  return (
    <div className={styles}>
      <div className="social-login">
        <span className="paragraph-base">Puedes registrarte con</span>
        <div className="social-buttons">
          <Buttons.SocialButton social="facebook" />
          <Buttons.SocialButton social="google" />
          <Buttons.SocialButton social="apple" />
        </div>
        <span className="paragraph-base">
          O completa la siguiente información
        </span>
      </div>
      <SignupForm onContinue={onContinue} onCancel={onCancel} />
    </div>
  )
}

export default Signup
