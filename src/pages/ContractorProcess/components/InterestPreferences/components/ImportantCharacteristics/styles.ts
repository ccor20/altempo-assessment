import { css } from '@linaria/core'

const styles = css`
  & .important-characteristics-options {
    @apply flex flex-col w-full h-full gap-6;

    & .form-title {
      @apply flex flex-col items-center justify-center;

      & > h4 {
        @apply text-accent-950 text-center font-bold;
      }
    }

    & .options-container {
      @apply grid grid-cols-1 gap-x-8 gap-y-4;

      @screen lg {
        @apply grid-cols-2;
      }

      & .column-container {
        @apply flex flex-col gap-4;
      }
    }
  }
`

export default styles
