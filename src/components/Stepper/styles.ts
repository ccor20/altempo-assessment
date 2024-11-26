import { css } from '@linaria/core'

const styles = css`
  @apply flex flex-col items-stretch;

  @screen md {
    @apply flex-row space-y-0 min-h-0;
  }

  .step-background {
    @apply absolute inset-0 duration-500;

    &.gradient-background {
      background: linear-gradient(to bottom, #f0e9ff, #f6f7f9);

      @screen md {
        background: linear-gradient(to right, #f0e9ff, #f6f7f9);
      }
    }
  }

  & .step {
    @apply relative flex flex-1 min-h-0 min-w-0;

    &:first-child {
      & .body,
      & .step-background {
        @apply rounded-l-none rounded-t-xl;

        @screen md {
          @apply rounded-t-none rounded-l-xl;
        }
      }
    }

    &:last-child {
      & .body,
      & .step-background {
        @apply rounded-r-none rounded-b-xl;

        @screen md {
          @apply rounded-b-none rounded-r-xl;
        }
      }
    }

    & .body {
      @apply flex flex-1 items-start font-medium px-4 py-5 w-full gap-2 z-10;

      &.is-active,
      &.completed {
        & .icon {
          @apply bg-[#7505E0] border-[#7505E0];
        }

        & .content {
          & .title {
            @apply text-[#7505E0];
          }

          & .description {
            @apply text-[#7505E0];
          }
        }
      }

      & .icon {
        @apply flex justify-center items-center aspect-square bg-white w-8 h-8 
                border border-[#EDEEF1] rounded-md transition-all;
      }

      & .content {
        @apply flex flex-col flex-1 min-w-0;

        & .title {
          @apply text-[#888FA8] font-semibold;
        }

        & .description {
          @apply text-[#888FA8] font-normal;
        }
      }
    }
  }

  & .arrow-container {
    @apply flex items-center justify-center min-w-10;

    &.completed {
      & > svg {
        & > path {
          @apply stroke-[#7505E0];
        }
      }
    }

    & > svg {
      @apply w-4 h-4 rotate-90;

      @screen md {
        @apply rotate-0;
      }

      & > path {
        @apply stroke-[#B4BAC5] transition-all;
      }
    }
  }
`

export default styles
