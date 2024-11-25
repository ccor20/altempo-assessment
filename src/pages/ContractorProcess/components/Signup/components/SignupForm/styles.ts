import { css } from '@linaria/core'

const styles = css`
  @apply flex flex-col items-start w-full h-full gap-4;

  & .form-header {
    @apply flex flex-col;

    & > h4 {
      @apply font-medium leading-normal text-accent-950 tracking-widest;
    }

    & > span {
      @apply text-[#888FA8];
    }
  }

  & .loading {
    @apply flex items-center justify-center w-full h-full;

    & > span {
      @apply text-accent-950;
    }
  }

  & > form {
    @apply flex flex-col gap-4 w-full h-full;

    & .form-row {
      @apply flex flex-col gap-4;

      @screen md {
        @apply flex-row;
      }

      & > div {
        @apply w-full;
      }
    }

    & .actions {
      @apply flex items-end justify-end gap-2 mt-2 h-full;

      & > button {
        @apply px-4 py-3 w-32;

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
  }
`

export default styles
