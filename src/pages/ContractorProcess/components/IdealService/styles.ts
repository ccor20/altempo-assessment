import { css } from '@linaria/core'

const styles = css`
  @apply flex flex-col w-full h-full gap-6;

  & .ideal-services-steps {
    @apply flex flex-col items-start gap-1;

    & .step-counter {
      @apply flex items-center justify-center gap-2;

      & > span {
        @apply text-[#4E535C];
      }
    }

    & .step-title-container {
      @apply flex flex-col gap-1 w-full;

      & .title {
        @apply text-accent-950;
      }

      & p {
        @apply text-[#4E535C];
      }
    }

    & .motion-div {
      @apply flex flex-col w-full h-full;

      & .step-container {
        @apply flex flex-col gap-6 w-full mt-6;

        & .title-container {
          @apply flex flex-col items-start justify-start;

          & > h3 {
            @apply text-accent-950 font-bold text-p_base;
          }

          & > span {
            @apply text-accent-950 text-p_base italic;
          }
        }
      }
    }
  }

  & .actions {
    @apply flex items-end justify-end gap-2 mt-2;

    @screen md {
      @apply h-full;
    }

    & > button {
      @apply px-4 py-3 min-w-32 max-w-40;

      @screen md {
        @apply max-w-[unset];
      }

      &:first-child {
        @apply border-[#B4BAC5];
      }

      &:last-child {
        @apply bg-[#36DCDC] border-[#36DCDC];
      }

      & > span {
        @apply font-medium text-accent-950 truncate;
      }
    }
  }
`

export default styles
