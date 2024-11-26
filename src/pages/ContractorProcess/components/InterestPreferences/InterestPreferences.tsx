import { motion, AnimatePresence } from 'framer-motion'
import { Buttons } from '@/components'
import { Budget, ContractorType, ImportantCharacteristics } from './components'
import useInterestPreferencesSteps from './hooks/useInterestPreferencesSteps'
import useInterestPreferences from './hooks/useInterestPreferences'
import styles from './styles'

type Props = {
  onFinish: () => void
}

const InterestPreferences: React.FC<Props> = ({ onFinish }) => {
  const {
    interestPreferencesSteps,
    currentStepIndex,
    currentStep,
    nextStep,
    previousStep
  } = useInterestPreferencesSteps()

  const {
    contractorTypeOptions,
    contractorTypesSelected,
    importantCharacteristics,
    importantCharacteristicsSelected,
    yourGoal,
    budgetRange,
    maxBudgetRange,
    minBudgetRange,
    handleSelectedContractorTypes,
    handleSelectedImportantCharacteristics,
    handleYourGoal,
    handleBudgetRange
  } = useInterestPreferences()

  const getCurrentStepComponent = () => {
    switch (currentStep.id) {
      case 'important-characteristics':
        return (
          <ImportantCharacteristics
            contractorTypeStep={currentStep}
            importantCharacteristics={importantCharacteristics}
            importantCharacteristicsSelected={importantCharacteristicsSelected}
            yourGoal={yourGoal}
            handleSelectedImportantCharacteristics={
              handleSelectedImportantCharacteristics
            }
            handleYourGoal={handleYourGoal}
          />
        )
      case 'budget':
        return (
          <Budget
            contractorTypeStep={currentStep}
            budgetRange={budgetRange}
            maxBudgetRange={maxBudgetRange}
            minBudgetRange={minBudgetRange}
            handleBudgetRange={handleBudgetRange}
          />
        )
      case 'contractor-type':
      default:
        return (
          <ContractorType
            contractorTypeStep={currentStep}
            contractorTypeOptions={contractorTypeOptions}
            contractorTypesSelected={contractorTypesSelected}
            handleSelectedContractorTypes={handleSelectedContractorTypes}
          />
        )
    }
  }

  const getNextButtonLabel = () => {
    if (currentStepIndex === interestPreferencesSteps.length - 1) {
      if (currentStep.isOptional) return 'Omitir y buscar servicio ideal'

      return 'Buscar servicio ideal'
    }
    return currentStep.isOptional ? 'Omitir' : 'Continuar'
  }

  const nextButtonAction = () => {
    if (currentStepIndex === interestPreferencesSteps.length - 1) onFinish()
    else nextStep()
  }

  return (
    <div className={styles}>
      <div className="preferences-steps">
        <div className="step-counter">
          <span className="paragraph-base">{`${currentStepIndex + 1} de ${
            interestPreferencesSteps.length
          }`}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepIndex}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="motion-div"
          >
            {getCurrentStepComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="actions">
        {currentStepIndex > 0 && (
          <Buttons.OutlineButton
            className="cancel-button"
            type="button"
            onClick={previousStep}
          >
            <span className="paragraph-base">Regresar</span>
          </Buttons.OutlineButton>
        )}
        <Buttons.DefaultButton
          className="next-button"
          type="button"
          onClick={nextButtonAction}
        >
          <span className="paragraph-base">{getNextButtonLabel()}</span>
        </Buttons.DefaultButton>
      </div>
    </div>
  )
}

export default InterestPreferences
