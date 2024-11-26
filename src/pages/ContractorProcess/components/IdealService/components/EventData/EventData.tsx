import { useState } from 'react'
import cn from 'classnames'
import { Buttons, Inputs } from '@/components'
import styles from './styles'

type Props = {}

interface Option {
  id: string
  label: string
  disabled?: boolean
}

const options: Option[] = [
  { id: 'vocalist', label: 'Vocalista(s)' },
  { id: 'instrumentalist', label: 'Instrumentalista' },
  { id: 'dj', label: 'Dj(s)' },
  { id: 'band', label: 'Banda completa' },
  { id: 'musical_product', label: 'Producto musical' },
  { id: 'others', label: 'Otros' }
]

const EventData: React.FC<Props> = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [definedConcept, setDefinedConcept] = useState<boolean>(false)
  const [receiveAdvice, setReceiveAdvice] = useState<boolean>(false)

  const handleSelectedOption = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value))
    } else {
      setSelectedOptions([...selectedOptions, value])
    }
  }

  const checkIfOptionIsSelected = (value: string) => {
    return selectedOptions.includes(value)
  }

  const handleDefinedConcept = (value: boolean) => {
    setDefinedConcept(value)
    if (value) setReceiveAdvice(false)
  }

  const handleReceiveAdvice = (value: boolean) => {
    setReceiveAdvice(value)
    if (value) setDefinedConcept(false)
  }

  return (
    <div className={cn('step-container', styles)}>
      <div className="title-container">
        <h3 className="heading-4">
          Tipo y cantidad de servicio profesional requerido
        </h3>
        <span>
          (Indica cuántos y qué tipo de perfiles necesitas para el evento)
        </span>
      </div>
      <div className="data-form-container">
        <div className="event-data">
          {options.map((option) => (
            <>
              <div key={option.id} className="event-data-item">
                <Inputs.Checkbox
                  label={option.label}
                  value={option.id}
                  checked={checkIfOptionIsSelected(option.id)}
                  onChange={(value) => {
                    handleSelectedOption(value)
                  }}
                />
              </div>
              {option.id !== options[options.length - 1].id && (
                <div className="divider vertical" />
              )}
            </>
          ))}
        </div>
      </div>
      <div className="divider horizontal" />
      <div className="title-container">
        <h3 className="heading-4">
          ¿Concepto o tema especifico para el evento?
        </h3>
        <span>
          (Esto nos ayuda a preparar una ambientación musical adecuada)
        </span>
      </div>
      <div className="data-form-container">
        <div className="radio-options">
          <Buttons.RadioButton
            label="Sí, tenemos un tema específico"
            isSelected={definedConcept}
            onChange={handleDefinedConcept}
          />
          <div className="input-container">
            <Inputs.Text label="Especifíquenos" disabled={!definedConcept} />
          </div>
          <Buttons.RadioButton
            label="No estoy seguro, me gustaría recibir asesoría sobre opciones de ambientación y estilos musicales que se adapten a la temática del evento."
            isSelected={receiveAdvice}
            onChange={handleReceiveAdvice}
          />
        </div>
      </div>
    </div>
  )
}

export default EventData
