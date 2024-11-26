import cn from 'classnames'
import { InterestPreferencesStep } from '@/types'
import styles from './styles'

type Props = {
  contractorTypeStep: InterestPreferencesStep
}

const ImportantCharacteristics: React.FC<Props> = ({ contractorTypeStep }) => {
  return (
    <div className={cn('step-container', styles)}>
      <div className="title-container">
        <h3 className="heading-4">{contractorTypeStep.title}</h3>
      </div>
    </div>
  )
}

export default ImportantCharacteristics
