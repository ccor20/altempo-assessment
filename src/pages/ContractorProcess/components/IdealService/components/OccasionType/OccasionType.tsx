import cn from 'classnames'
import { Buttons } from '@/components'
import { IdealServiceCatalogItem } from '@/types'
import styles from './styles'

type Props = {
  occasionTypes: IdealServiceCatalogItem[]
  occasionTypeSelected?: IdealServiceCatalogItem
  handleOccasionTypeSelected: (occasionType: IdealServiceCatalogItem) => void
}

const OccasionType: React.FC<Props> = ({
  occasionTypes,
  occasionTypeSelected,
  handleOccasionTypeSelected
}) => {
  return (
    <div className={cn('step-container', styles)}>
      <div className="title-container">
        <h3 className="heading-4">Selecciona el tipo de ocasión</h3>
      </div>
      <div className="occasion-type-options">
        {occasionTypes.map((occasionType) => (
          <Buttons.CardButton
            key={occasionType.id}
            className="occasion-type-card"
            onClick={() => handleOccasionTypeSelected(occasionType)}
            title={occasionType.description}
            image={occasionType.imageUrl}
            isSelected={occasionTypeSelected?.id === occasionType.id}
          />
        ))}
      </div>
    </div>
  )
}

export default OccasionType
