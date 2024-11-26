import cn from 'classnames'
import styles from './styles'

type Props = {}

const LocationAndLogistics: React.FC<Props> = () => {
  return (
    <div className={cn('step-container', styles)}>
      <div className="title-container">
        <h3 className="heading-4">Ubicación del evento</h3>
      </div>
    </div>
  )
}

export default LocationAndLogistics
