export interface Step {
  id: string
  title: string
  description: string
  isActive: boolean
  completed: boolean
  iconComponent: React.ReactNode
  onClick?: () => void
}