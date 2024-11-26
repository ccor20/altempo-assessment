import { useState } from 'react'
import { InterestPreferencesStep } from '@/types'

const interestPreferencesStepsDefault: InterestPreferencesStep[] = [
  {
    id: 'contractor-type',
    // COMMENT: consider sentences with inclusive terms
    title: '¿Qué estás interesado en encontrar?',
    isActive: true,
    completed: false
  },
  {
    id: 'important-characteristics',
    title: '¿Qué consideras importante en los músicos que buscas?',
    isActive: false,
    completed: false
  },
  {
    id: 'budget',
    title: '¿Cuál es tu presupuesto?',
    isActive: false,
    completed: false,
    isOptional: true
  }
]

const useInterestPreferencesSteps = () => {
  const [interestPreferencesSteps, setInterestPreferencesSteps] = useState<
    InterestPreferencesStep[]
  >(interestPreferencesStepsDefault)
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
  const [isThereAPreviousStep, setIsThereAPreviousStep] =
    useState<boolean>(false)
  const [isThereANextStep, setIsThereANextStep] = useState<boolean>(true)

  const getDrafForActivatedStep = (
    currentSteps: InterestPreferencesStep[],
    stepId: string
  ): InterestPreferencesStep[] => {
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

  const getDraftForCompletedStep = (
    currentSteps: InterestPreferencesStep[],
    stepId: string
  ): InterestPreferencesStep[] => {
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
    if (currentStepIndex === interestPreferencesSteps.length - 1) {
      console.error('No more steps available')
      setIsThereANextStep(false)
      return
    }

    const newStepIndex = currentStepIndex + 1
    const currentStep = interestPreferencesSteps[currentStepIndex]
    const nextStep = interestPreferencesSteps[newStepIndex]
    const draftCompletedSteps = getDraftForCompletedStep(
      interestPreferencesSteps,
      currentStep.id
    )
    const draftActivatedSteps = getDrafForActivatedStep(
      draftCompletedSteps,
      nextStep.id
    )

    setInterestPreferencesSteps(draftActivatedSteps)
    setCurrentStepIndex(newStepIndex)
    setIsThereANextStep(newStepIndex < interestPreferencesSteps.length - 1)
  }

  const previousStep = () => {
    if (currentStepIndex === 0) {
      console.error('No previous steps available')
      setIsThereAPreviousStep(false)
      return
    }

    const newStepIndex = currentStepIndex - 1
    const previousStep = interestPreferencesSteps[newStepIndex]
    const draftActivatedSteps = getDrafForActivatedStep(
      interestPreferencesSteps,
      previousStep.id
    )

    setInterestPreferencesSteps(draftActivatedSteps)
    setCurrentStepIndex(currentStepIndex - 1)
    setIsThereAPreviousStep(newStepIndex > 0)
  }

  return {
    interestPreferencesSteps,
    currentStepIndex,
    currentStep: interestPreferencesSteps[currentStepIndex],
    isThereAPreviousStep,
    isThereANextStep,
    nextStep,
    previousStep
  }
}

export default useInterestPreferencesSteps
