import cn from 'classnames'
import { InterestPreferencesStep } from '@/types'
import { Inputs } from '@/components'
import styles from './styles'

type Props = {
  contractorTypeStep: InterestPreferencesStep
  budgetRange: number[]
  maxBudgetRange: number
  minBudgetRange: number
  handleBudgetRange: (range: number[]) => void
}

const Budget: React.FC<Props> = ({
  contractorTypeStep,
  budgetRange,
  maxBudgetRange,
  minBudgetRange,
  handleBudgetRange
}) => {
  const average = Math.round((budgetRange[0] + budgetRange[1]) / 2)

  return (
    <div className={cn('step-container', styles)}>
      <div className="title-container">
        <h3 className="heading-4">{contractorTypeStep.title}</h3>
      </div>
      <div className="range-slider-container">
        <div className="range-details">
          <h2 className="heading-4">
            ${budgetRange[0]} USD - ${budgetRange[1]} USD
          </h2>
          <p>Promedio: ${average} USD</p>
        </div>
        <div className="slider">
          <Inputs.RangeSlider
            value={budgetRange}
            min={minBudgetRange}
            max={maxBudgetRange}
            onValueChange={handleBudgetRange}
            step={1}
          />
        </div>
      </div>
    </div>
  )
}

export default Budget
