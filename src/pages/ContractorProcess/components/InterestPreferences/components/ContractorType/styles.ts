import { css } from '@linaria/core'

const styles = css`
  & .contractor-type-options {
    @apply grid grid-cols-2 gap-4;

    @screen md {
      @apply grid-cols-5;
    }

    & .contractor-type-card {
      & .card-content {
        @apply flex flex-col items-center justify-center w-full h-full gap-6;

        & .label {
          @apply text-[#4E535C];
        }

        & .icon > svg {
          @apply w-16 h-16;
        }
      }
    }
  }
`

export default styles
