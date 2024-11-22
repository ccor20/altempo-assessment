import { Layouts, Buttons } from '@/components'
import AltempoIcon from '@assets/icons/altempo.svg?react'
import ArrowLeftIcon from '@assets/icons/arrow-left.svg?react'
import GlobeIcon from '@assets/icons/globe.svg?react'
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
            <span>Signup form</span>
          </div>
        </Layouts.NavbarFooterLayout>
      }
      rightChild={<div className="right-child">RightChild</div>}
    />
  )
}

export default Signup
