export interface Button
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  type?: 'submit' | 'reset' | 'button'
}
