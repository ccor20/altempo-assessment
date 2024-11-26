import { motion, AnimatePresence } from 'framer-motion'
import { Buttons } from '@/components'
import { Budget, ContractorType, ImportantCharacteristics } from './components'
import useInterestPreferencesSteps from './hooks/useInterestPreferencesSteps'
import useInterestPreferences from './hooks/useInterestPreferences'
import styles from './styles'

type Props = {}

const InterestPreferences: React.FC<Props> = () => {
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
    handleSelectedContractorTypes,
    handleSelectedImportantCharacteristics,
    handleYourGoal
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
        return <Budget contractorTypeStep={currentStep} />
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
        <Buttons.OutlineButton
          className="cancel-button"
          type="button"
          onClick={previousStep}
        >
          <span className="paragraph-base">Regresar</span>
        </Buttons.OutlineButton>
        <Buttons.DefaultButton
          className="next-button"
          type="button"
          onClick={nextStep}
        >
          <span className="paragraph-base">Continuar</span>
        </Buttons.DefaultButton>
      </div>
    </div>
  )
}

export default InterestPreferences
