import { Layouts, Buttons, Stepper } from '@/components'
import { SignupForm } from './components'
import useContractorProcess from './hooks/useContractorProcess'

import AltempoIcon from '@assets/icons/altempo.svg?react'
import ArrowLeftIcon from '@assets/icons/arrow-left.svg?react'
import GlobeIcon from '@assets/icons/globe.svg?react'
import BackArrowIcon from '@assets/icons/back-arrow.svg?react'
import PlayCircleIcon from '@assets/icons/play-circle.svg?react'

import SignupImg from '/img/signup-img.webp'

import styles from './styles'

const Navbar: React.FC = () => (
  <div className="header paragraph-base text-accent-950">
    <div className="basis-1/4">
      <Buttons.DefaultButton>
        <ArrowLeftIcon className="icon" />
        <span>Regresar</span>
      </Buttons.DefaultButton>
    </div>
    <div className="basis-1/2">
      <AltempoIcon className="altempo-icon" />
    </div>
    <div className="basis-1/4">
      <Buttons.DefaultButton>
        <GlobeIcon className="icon" />
        <span>ESP</span>
      </Buttons.DefaultButton>
    </div>
  </div>
)

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="footer">
      <p className="paragraph-base">
        Todos los derechos reservados, {currentYear}
        <sup>®</sup>
      </p>
    </div>
  )
}

const Signup: React.FC = () => {
  const { contractorProcessSteps, nextStep, previousStep } =
    useContractorProcess({})

  return (
    <Layouts.TwoColumnsLayout
      className={styles}
      leftChild={
        <Layouts.NavbarFooterLayout
          navbarContent={<Navbar />}
          footerContent={<Footer />}
          className="profile-form"
        >
          <div>
            <Stepper steps={contractorProcessSteps} />
            <div className="social-and-form">
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
              <SignupForm onContinue={nextStep} onCancel={previousStep} />
            </div>
          </div>
        </Layouts.NavbarFooterLayout>
      }
      rightChild={
        <div className="right-child">
          <div className="video-card">
            <img src={SignupImg} alt="sign-up" />
            <div className="card-items">
              <div className="items">
                <Buttons.OutlineButton className="video-play-button">
                  <span className="paragraph-base">Ver video</span>
                  <PlayCircleIcon />
                </Buttons.OutlineButton>
                <div className="selected-profile">
                  <span className="paragraph-base">Perfil seleccionado</span>
                  <h1 className="heading-3">Talent Hunter</h1>
                  <Buttons.TextButton>
                    <BackArrowIcon />
                    <span className="paragraph-base">Cambiar de selección</span>
                  </Buttons.TextButton>
                </div>
              </div>
            </div>
            <div className="bottom-gradient" />
          </div>
        </div>
      }
    />
  )
}

export default Signup