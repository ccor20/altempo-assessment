import { motion, AnimatePresence } from 'framer-motion'
import { Buttons } from '@/components'
import useIdealServiceSteps from './hooks/useIdealServiceSteps'
import styles from './styles'
import useIdealService from './hooks/useIdealService'
import {
  EventData,
  FindIdealService,
  LocationAndLogistics,
  OccasionType
} from './components'

type Props = {
  onFinish: () => void
}

const IdealService: React.FC<Props> = ({ onFinish }) => {
  const {
    idealServiceSteps,
    currentStepIndex,
    currentStep,
    nextStep,
    previousStep
  } = useIdealServiceSteps()
  const {
    isLoading,
    idealServiceCatalogs,
    serviceSelected,
    occasionTypeSelected,
    handleServiceSelected,
    handleOccasionTypeSelected
  } = useIdealService()

  const getCurrentStepComponent = () => {
    switch (currentStep.id) {
      case 'occasion-type':
        return (
          <OccasionType
            occasionTypes={idealServiceCatalogs.occasionTypes}
            occasionTypeSelected={occasionTypeSelected}
            handleOccasionTypeSelected={handleOccasionTypeSelected}
          />
        )
      case 'event-data':
        return <EventData />
      case 'location-and-logistics':
        return <LocationAndLogistics />
      case 'find-your-ideal-service':
      default:
        return (
          <FindIdealService
            serviceTypes={idealServiceCatalogs.serviceTypes}
            serviceSelected={serviceSelected}
            handleServiceSelected={handleServiceSelected}
          />
        )
    }
  }

  const getNextButtonLabel = () => {
    return 'Continuar'
  }

  const nextButtonAction = () => {
    if (currentStepIndex === idealServiceSteps.length - 1) onFinish()
    else nextStep()
  }

  return (
    <div className={styles}>
      <div className="ideal-services-steps">
        <div className="step-counter">
          <span className="paragraph-base">{`${currentStepIndex + 1} de ${
            idealServiceSteps.length
          }`}</span>
        </div>
        <div className="step-title-container">
          <h2 className="heading-4 title">{currentStep.title}</h2>
          <p className="paragraph-base">{currentStep.description}</p>
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
            {isLoading ? (
              <div className="loading">
                <span className="heading-5">Cargando...</span>
              </div>
            ) : (
              getCurrentStepComponent()
            )}
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

export default IdealService
