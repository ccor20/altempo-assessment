import { useState } from 'react'
import UserStarIcon from '@assets/icons/user-star.svg?react'
import SparklesIcon from '@assets/icons/sparkles.svg?react'
import { Step } from '@/components/types'

type Props = {}

const contractorProcessStepsDefault: Step[] = [
  {
    id: 'signup',
    title: 'Datos generales',
    description: 'Comparte tus datos de contacto',
    iconComponent: <UserStarIcon />,
    isActive: true,
    completed: false
  },
  {
    id: 'interests',
    title: 'Intereses',
    description: 'Nos gustaría mostrarte lo que te interesa',
    iconComponent: <SparklesIcon />,
    isActive: false,
    completed: false
  }
]

const useContractorProcess = ({}: Props) => {
  const [contractorProcessSteps, setContractorProcessSteps] = useState<Step[]>(
    contractorProcessStepsDefault
  )
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
  const [isThereAPreviousStep, setIsThereAPreviousStep] =
    useState<boolean>(false)
  const [isThereANextStep, setIsThereANextStep] = useState<boolean>(true)

  const activateStep = (currentSteps: Step[], stepId: string): Step[] => {
    const newSteps = currentSteps.map((step) => {
      if (step.id === stepId) {
        return {
          ...step,
          isActive: true
        }
      }

      return {
        ...step,
        isActive: false
      }
    })

    return newSteps
  }

  const completeStep = (currentSteps: Step[], stepId: string): Step[] => {
    const newSteps = currentSteps.map((step) => {
      if (step.id === stepId) {
        return {
          ...step,
          completed: true
        }
      }

      return step
    })

    return newSteps
  }

  const nextStep = () => {
    if (currentStepIndex === contractorProcessSteps.length - 1) {
      console.error('No more steps available')
      setIsThereANextStep(false)
      return
    }

    const newStepIndex = currentStepIndex + 1
    const currentStep = contractorProcessSteps[currentStepIndex]
    const nextStep = contractorProcessSteps[newStepIndex]
    const draftCompletedSteps = completeStep(
      contractorProcessSteps,
      currentStep.id
    )
    const draftActivatedSteps = activateStep(draftCompletedSteps, nextStep.id)

    setContractorProcessSteps(draftActivatedSteps)
    setCurrentStepIndex(newStepIndex)
    setIsThereANextStep(newStepIndex < contractorProcessSteps.length - 1)
  }

  const previousStep = () => {
    if (currentStepIndex === 0) {
      console.error('No previous steps available')
      setIsThereAPreviousStep(false)
      return
    }

    const newStepIndex = currentStepIndex - 1
    const previousStep = contractorProcessSteps[newStepIndex]
    const draftActivatedSteps = activateStep(
      contractorProcessSteps,
      previousStep.id
    )

    setContractorProcessSteps(draftActivatedSteps)
    setCurrentStepIndex(currentStepIndex - 1)
    setIsThereAPreviousStep(newStepIndex > 0)
  }

  return {
    contractorProcessSteps,
    isThereAPreviousStep,
    isThereANextStep,
    nextStep,
    previousStep
  }
}

export default useContractorProcess
