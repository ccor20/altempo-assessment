import cn from 'classnames'
import styles from './styles'

type Props = {
  navbarContent: React.ReactNode
  children: React.ReactNode
  footerContent: React.ReactNode
  className?: string
}

const NavbarFooterLayout: React.FC<Props> = ({
  navbarContent,
  children,
  footerContent,
  className
}) => (
  <div className={cn(styles, className)}>
    <header>{navbarContent}</header>
    <main>{children}</main>
    <footer>{footerContent}</footer>
  </div>
)

export default NavbarFooterLayout
