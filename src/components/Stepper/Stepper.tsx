import React from 'react'
import cn from 'classnames'
import RightArrowIcon from '@assets/icons/chevron-right-arrow.svg?react'
import { Step } from '../types'
import styles from './styles'

type Props = {
  steps: Step[]
}

const Stepper: React.FC<Props> = ({ steps }) => {
  const visibleSteps = steps.filter((step) => !step.hidden)

  return (
    <ol className={cn('stepper', styles)}>
      {visibleSteps.map((step, index) => {
        const currentOneIsCompleted = step.completed
        const nextOneIsNotActiveOrCompleted =
          index < visibleSteps.length - 1 &&
          !visibleSteps[index + 1].isActive &&
          !visibleSteps[index + 1].completed
        const nextOneIsActiveOrCompleted =
          index < visibleSteps.length - 1 &&
          (visibleSteps[index + 1].isActive ||
            visibleSteps[index + 1].completed)

        return (
          <React.Fragment key={index}>
            <li className="step" onClick={step.onClick}>
              <div
                className="step-background transition-colors"
                style={{
                  backgroundColor: step.completed ? '#f0e9ff' : '#f6f7f9'
                }}
              />
              <div
                className="step-background gradient-background transition-opacity"
                style={{
                  opacity: step.isActive && !step.completed ? 1 : 0
                }}
              />
              <a
                className={cn('body', {
                  'is-active': step.isActive && !step.completed,
                  completed: step.completed
                })}
              >
                <span className="icon">{step.iconComponent}</span>
                <div className="content">
                  <h4 className="title paragraph-sm">{step.title}</h4>
                  <span className="description paragraph-sm">
                    {step.description}
                  </span>
                </div>
              </a>
            </li>
            {index < visibleSteps.length - 1 && (
              <div
                className={cn('relative', 'arrow-container', {
                  'is-active':
                    currentOneIsCompleted &&
                    !nextOneIsNotActiveOrCompleted &&
                    !(currentOneIsCompleted && nextOneIsActiveOrCompleted),
                  completed: currentOneIsCompleted && nextOneIsActiveOrCompleted
                })}
              >
                <div
                  className="step-background transition-colors"
                  style={{
                    backgroundColor:
                      currentOneIsCompleted && nextOneIsActiveOrCompleted
                        ? '#f0e9ff'
                        : '#f6f7f9'
                  }}
                />
                <div
                  className="step-background gradient-background transition-opacity"
                  style={{
                    opacity:
                      currentOneIsCompleted &&
                      !nextOneIsNotActiveOrCompleted &&
                      !(currentOneIsCompleted && nextOneIsActiveOrCompleted)
                        ? 1
                        : 0
                  }}
                />
                <RightArrowIcon />
              </div>
            )}
          </React.Fragment>
        )
      })}
    </ol>
  )
}

export default Stepper
