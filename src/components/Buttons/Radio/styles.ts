import { css } from '@linaria/core'

const styles = css`
  @apply flex items-start gap-3 transition-all duration-200 text-gray-700;

  &.selected {
    & .custom-radio {
      @apply border-[#DECEFF] bg-[#7505E0];

      & .radio-dot {
        @apply bg-white;
      }
    }
  }

  & .custom-radio {
    @apply w-6 h-6 rounded-full p-1 transition-all duration-200
            border border-[#D4D4D8] shadow bg-white aspect-square;

    & .radio-dot {
      @apply w-full h-full rounded-full bg-transparent;
    }
  }
`

export default styles
