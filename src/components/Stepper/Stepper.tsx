import React from 'react'
import cn from 'classnames'
import RightArrowIcon from '@assets/icons/chevron-right-arrow.svg?react'
import { Step } from '../types'
import styles from './styles'

type Props = {
  steps: Step[]
}

const Stepper: React.FC<Props> = ({ steps }) => {
  return (
    <ol className={cn('stepper', styles)}>
      {steps.map((step, index) => {
        const currentOneIsCompleted = step.completed
        const nextOneIsNotActiveOrCompleted =
          index < steps.length - 1 &&
          !steps[index + 1].isActive &&
          !steps[index + 1].completed
        const nextOneIsActiveOrCompleted =
          index < steps.length - 1 &&
          (steps[index + 1].isActive || steps[index + 1].completed)

        return (
          <React.Fragment key={index}>
            <li className="step" onClick={step.onClick}>
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
            {index < steps.length - 1 && (
              <div
                className={cn('arrow-container', {
                  'is-active':
                    currentOneIsCompleted &&
                    !nextOneIsNotActiveOrCompleted &&
                    !(currentOneIsCompleted && nextOneIsActiveOrCompleted),
                  completed: currentOneIsCompleted && nextOneIsActiveOrCompleted
                })}
              >
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
