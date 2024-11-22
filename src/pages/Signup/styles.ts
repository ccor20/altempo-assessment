import { css } from '@linaria/core'

const styles = css`
  & .profile-form {
    & > header,
    & > footer {
      @apply flex px-4;

      @screen md {
        @apply px-8;
      }

      & > div {
        @apply flex w-full;
      }
    }

    & > header {
      & > div,
      & > div > div {
        @apply flex items-center justify-center;

        &:first-child {
          @apply justify-start;
        }

        &:last-child {
          @apply justify-end;
        }

        & .altempo-icon {
          @apply h-[1.75rem] w-[7rem];
        }
      }

      & button {
        @apply flex items-center justify-center text-accent-950 text-sm gap-2 p-2;

        & .icon {
          @apply h-6 w-6;
        }
      }
    }

    & > main {
      @apply max-w-4xl mx-auto p-8 text-center;
    }

    & > footer {
      @apply text-center text-gray-600 text-[#B0B1B8];

      & > div {
        @apply items-center justify-center;
      }
    }
  }

  & .right-child {
    @apply flex items-center justify-center p-2 bg-secondary-950;

    @screen md {
      height: 100dvh;
    }
  }
`

export default styles
