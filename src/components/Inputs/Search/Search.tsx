import cn from 'classnames'
import { Input } from '@/components/types'
import SearchIcon from '@assets/icons/search.svg?react'

import styles from '../styles'

interface Props extends Input {
  label?: string
}

const Search: React.FC<Props> = ({
  label,
  optional = false,
  className,
  type,
  ...rest
}) => (
  <div className={cn(styles, 'search', className)}>
    <div className="input-wrapper">
      <div className="prefix-icon">
        <SearchIcon />
      </div>
      <input {...rest} type={type} />
    </div>
  </div>
)

export default Search
