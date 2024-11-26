import * as Slider from '@radix-ui/react-slider'

import styles from './styles'

type Props = {
  value: number[]
  max: number
  min: number
  step?: number
  onValueChange: (newValue: number[]) => void
}

const RangeSlider: React.FC<Props> = ({
  value,
  max,
  min,
  step = 1,
  onValueChange
}) => (
  <Slider.Root
    className={styles}
    value={value}
    onValueChange={onValueChange}
    max={max}
    min={min}
    step={step}
    minStepsBetweenThumbs={step}
  >
    <Slider.Track className="track">
      <Slider.Range className="range" />
    </Slider.Track>
    <Slider.Thumb className="thumb" aria-label="min-value" />
    <Slider.Thumb className="thumb" aria-label="max-value" />
  </Slider.Root>
)

export default RangeSlider
