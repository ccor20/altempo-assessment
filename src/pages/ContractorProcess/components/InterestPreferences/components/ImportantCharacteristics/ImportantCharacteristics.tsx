import cn from 'classnames'
import { InterestPreferencesStep } from '@/types'
import { SelectOption } from '@/components/types'
import { Inputs } from '@/components'
import styles from './styles'

type Props = {
  contractorTypeStep: InterestPreferencesStep
  importantCharacteristics: SelectOption[]
  importantCharacteristicsSelected: string[]
  yourGoal: string
  handleSelectedImportantCharacteristics: (characteristic: string) => void
  handleYourGoal: (goal: string) => void
}

const ImportantCharacteristics: React.FC<Props> = ({
  contractorTypeStep,
  importantCharacteristics,
  importantCharacteristicsSelected,
  yourGoal,
  handleSelectedImportantCharacteristics,
  handleYourGoal
}) => {
  const verifyIfImportantCharacteristicIsSelected = (characteristic: string) =>
    importantCharacteristicsSelected.includes(characteristic)

  const midPoint = Math.ceil(importantCharacteristics.length / 2)
  const leftColumn = importantCharacteristics.slice(0, midPoint)
  const rightColumn = importantCharacteristics.slice(midPoint)

  return (
    <div className={cn('step-container', styles)}>
      <div className="title-container">
        <h3 className="heading-4">{contractorTypeStep.title}</h3>
      </div>
      <div className="important-characteristics-options">
        <div className="form-title">
          <h4 className="paragraph-xl">
            Selecciona las opciones que quieras priorizar
          </h4>
        </div>
        <div className="options-container">
          <div className="column-container">
            {leftColumn.map((option) => (
              <Inputs.Checkbox
                key={option.value}
                label={option.label}
                checked={verifyIfImportantCharacteristicIsSelected(
                  option.value
                )}
                onChange={() =>
                  handleSelectedImportantCharacteristics(option.value)
                }
                value={option.value}
              />
            ))}
          </div>
          <div className="column-container">
            {rightColumn.map((option) => (
              <Inputs.Checkbox
                key={option.value}
                label={option.label}
                checked={verifyIfImportantCharacteristicIsSelected(
                  option.value
                )}
                onChange={() =>
                  handleSelectedImportantCharacteristics(option.value)
                }
                value={option.value}
              />
            ))}
          </div>
        </div>
        <Inputs.TextArea
          label="Comparte tu objetivo"
          value={yourGoal}
          onChange={handleYourGoal}
          characterLimit={500}
          helperText="500 caracteres máx."
        />
      </div>
    </div>
  )
}

export default ImportantCharacteristics
