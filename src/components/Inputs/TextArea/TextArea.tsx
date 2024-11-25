import cn from 'classnames'
import { TextArea as TextAreaModel } from '@/components/types'
import styles from '../styles'

const TextArea: React.FC<TextAreaModel> = ({
  children,
  className,
  ...rest
}) => (
  <textarea className={cn(styles, 'text-area', className)} {...rest}>
    {children}
  </textarea>
)

export default TextArea
