import cn from 'classnames'
import { Input } from '@/components/types'
import styles from '../styles'

const Text: React.FC<Input> = ({
  label,
  helperText,
  optional = false,
  error,
  className,
  type,
  ...rest
}) => (
  <div className={cn(styles, 'text', className)}>
    <div className="input-wrapper">
      <input
        {...rest}
        placeholder=""
        className={cn('input-field', {
          'has-error': error,
          'is-optional': optional
        })}
        type={type}
      />
      <label className="input-label">
        {label}
        {optional && <span className="optional-text">(opcional)</span>}
      </label>
    </div>
    {helperText && (
      <span className="helper-text paragraph-xs">{helperText}</span>
    )}
    {error && <span className="error-text paragraph-xs">{error}</span>}
  </div>
)

export default Text
