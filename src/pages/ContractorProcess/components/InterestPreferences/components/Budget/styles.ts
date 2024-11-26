import { css } from '@linaria/core'

const styles = css`
  @apply flex flex-col items-center w-full;

  & .range-slider-container {
    @apply flex flex-col items-center justify-center w-full min-h-[25vh] gap-6;

    & .range-details {
      @apply flex flex-col items-center w-full gap-2;

      & h2 {
        @apply text-base text-accent-950;
      }

      & p {
        @apply text-sm text-[#4E535C];
      }
    }
  }

  & .slider {
    @apply w-full max-w-2xl;
  }
`

export default styles
