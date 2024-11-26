import { useState } from 'react'
import { Step } from '@/components/types'

const idealServiceStepsDefault: Step[] = [
  {
    id: 'find-your-ideal-service',
    title: 'Busquemos tu servicio ideal',
    description:
      'Necesitamos selecciones las opciones que más se parecen a lo que necesitas.',
    isActive: true,
    completed: false
  },
  {
    id: 'occasion-type',
    title: 'Tipo de ocasión',
    description:
      'Necesitamos selecciones las opciones que más se parecen a lo que necesitas.',
    isActive: false,
    completed: false
  },
  {
    id: 'event-data',
    title: 'Datos del evento',
    description:
      'Necesitamos selecciones las opciones que más se parecen a lo que necesitas.',
    isActive: false,
    completed: false
  },
  {
    id: 'location-and-logistics',
    title: 'Lugar y logística',
    description:
      'Necesitamos selecciones las opciones que más se parecen a lo que necesitas.',
    isActive: false,
    completed: false
  }
]

const useIdealServiceSteps = () => {
  const [idealServiceSteps, setIdealServiceSteps] = useState<Step[]>(
    idealServiceStepsDefault
  )
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
  const [isThereAPreviousStep, setIsThereAPreviousStep] =
    useState<boolean>(false)
  const [isThereANextStep, setIsThereANextStep] = useState<boolean>(true)

  const nextStep = () => {
    if (currentStepIndex >= idealServiceSteps.length - 1) {
      console.error('No more steps available')
      setIsThereANextStep(false)
      return
    }

    const newStepIndex = currentStepIndex + 1
    const updatedSteps = idealServiceSteps.map((step, index) => ({
      ...step,
      isActive: index === newStepIndex,
      completed: index === currentStepIndex ? true : step.completed
    }))

    setIdealServiceSteps(updatedSteps)
    setCurrentStepIndex(newStepIndex)
    setIsThereANextStep(newStepIndex < idealServiceSteps.length - 1)
  }

  const previousStep = () => {
    if (currentStepIndex === 0) {
      console.error('No previous steps available')
      setIsThereAPreviousStep(false)
      return
    }

    const newStepIndex = currentStepIndex - 1
    const updatedSteps = idealServiceSteps.map((step, index) => ({
      ...step,
      isActive: index === newStepIndex
    }))

    setIdealServiceSteps(updatedSteps)
    setCurrentStepIndex(newStepIndex)
    setIsThereAPreviousStep(newStepIndex > 0)
    setIsThereANextStep(true)
  }

  return {
    idealServiceSteps,
    currentStepIndex,
    isThereAPreviousStep,
    isThereANextStep,
    currentStep: idealServiceSteps[currentStepIndex],
    nextStep,
    previousStep
  }
}

export default useIdealServiceSteps
