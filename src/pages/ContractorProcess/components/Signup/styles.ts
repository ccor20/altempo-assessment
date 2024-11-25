import { css } from '@linaria/core'

const styles = css`
  @apply flex flex-col gap-6 h-full;

  & .social-login {
    @apply flex flex-col items-center justify-center gap-4;

    & > span {
      @apply text-[#888FA8];
    }

    & .social-buttons {
      @apply flex items-center justify-center gap-4;

      & .social-button {
        @apply w-auto;

        @screen md {
          @apply w-[9.5rem];
        }
      }
    }
  }
`

export default styles
