import cn from 'classnames'
import { ContractorTypeOption, InterestPreferencesStep } from '@/types'
import { Buttons, Inputs } from '@/components'
import styles from './styles'

type Props = {
  contractorTypeStep: InterestPreferencesStep
  contractorTypeOptions: ContractorTypeOption[]
  contractorTypesSelected: string[]
  handleSelectedContractorTypes: (contractorId: string) => void
}

const ContractorType: React.FC<Props> = ({
  contractorTypeStep,
  contractorTypeOptions,
  contractorTypesSelected,
  handleSelectedContractorTypes
}) => {
  const verifyIfContractorTypeIsSelected = (contractorId: string) =>
    contractorTypesSelected.includes(contractorId)

  return (
    <div className={cn('step-container', styles)}>
      <div className="title-container">
        <h3 className="heading-4">{contractorTypeStep.title}</h3>
      </div>
      <Inputs.Search placeholder="Busca un instrumento" />
      <div className="contractor-type-options">
        {contractorTypeOptions.map((option) => (
          <Buttons.RadioCard
            key={option.id}
            onClick={() => handleSelectedContractorTypes(option.id)}
            value={option}
            selected={verifyIfContractorTypeIsSelected(option.id)}
            className="contractor-type-card"
          >
            <div className="card-content">
              <span className="icon">{option.icon}</span>
              <span className="paragraph-sm label">{option.label}</span>
            </div>
          </Buttons.RadioCard>
        ))}
      </div>
    </div>
  )
}

export default ContractorType
