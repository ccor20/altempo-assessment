import { useState } from 'react'
import cn from 'classnames'
import { TextArea as TextAreaModel } from '@/components/types'
import styles from '../styles'

const TextArea: React.FC<TextAreaModel> = ({
  label,
  helperText,
  optional = false,
  error,
  className,
  characterLimit,
  value,
  onChange,
  ...rest
}) => {
  const [characterLimitError, setCharacterLimitError] = useState<boolean>(false)

  const localOnChange = ({
    target
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (characterLimit) {
      if (target.value.length <= characterLimit) {
        onChange(target.value)
        if (characterLimitError) setCharacterLimitError(false)
      } else {
        if (value) setCharacterLimitError(true)
        onChange(target.value.slice(0, characterLimit))
      }
    } else {
      onChange(target.value)
    }
  }

  return (
    <div className={cn(styles, 'text-area', className)}>
      <div className="input-wrapper">
        <textarea
          {...rest}
          placeholder=""
          className={cn('input-field', {
            'has-error': error,
            'is-optional': optional
          })}
          onChange={localOnChange}
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
      <div className="limit-messages-container">
        {characterLimit && (
          <span
            className={cn('paragraph-xs', 'counter', {
              completed: value.length >= characterLimit
            })}
          >{`${value.length} / ${characterLimit}`}</span>
        )}
      </div>
    </div>
  )
}

export default TextArea
