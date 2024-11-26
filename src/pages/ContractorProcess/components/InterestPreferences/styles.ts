import { css } from '@linaria/core'

const styles = css`
  @apply flex flex-col w-full h-full gap-6;

  & .preferences-steps {
    @apply flex flex-col items-center gap-1;

    & .step-counter {
      @apply flex items-center justify-center gap-2;

      & > span {
        @apply text-[#4E535C];
      }
    }

    & .motion-div {
      @apply flex flex-col w-full h-full;

      & .step-container {
        @apply flex flex-col gap-6 w-full;

        & .title-container {
          @apply flex items-center justify-center;

          & > h3 {
            @apply text-center text-accent-950 font-bold;
          }
        }
      }
    }
  }

  & .actions {
    @apply flex items-end justify-end gap-2 mt-2;

    @screen lg {
      @apply h-full;
    }

    & > button {
      @apply px-4 py-3 min-w-32;

      &:first-child {
        @apply border-[#B4BAC5];
      }

      &:last-child {
        @apply bg-[#36DCDC] border-[#36DCDC];
      }

      & > span {
        @apply font-medium text-accent-950;
      }
    }
  }
`

export default styles
