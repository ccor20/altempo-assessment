import cn from 'classnames'
import { IdealServiceCatalogItem } from '@/types'
import { Buttons } from '@/components'
import styles from './styles'

type Props = {
  serviceTypes: IdealServiceCatalogItem[]
  serviceSelected?: IdealServiceCatalogItem
  handleServiceSelected: (service: IdealServiceCatalogItem) => void
}

const FindIdealService: React.FC<Props> = ({
  serviceTypes,
  serviceSelected,
  handleServiceSelected
}) => {
  return (
    <div className={cn('step-container', styles)}>
      <div className="title-container">
        <h3 className="heading-4">Selecciona el servicio que deseas</h3>
      </div>
      <div className="service-options">
        {serviceTypes.map((service) => (
          <Buttons.CardButton
            key={service.id}
            className="service-card"
            onClick={() => handleServiceSelected(service)}
            title={service.description}
            image={service.imageUrl}
            isSelected={serviceSelected?.id === service.id}
          />
        ))}
      </div>
    </div>
  )
}

export default FindIdealService
