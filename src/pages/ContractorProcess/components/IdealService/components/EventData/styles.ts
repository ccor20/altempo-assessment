import { css } from '@linaria/core'

const styles = css`
  @apply items-center;

  & .title-container {
    @apply w-full;
  }

  .divider {
    @apply border border-[#D7DAE0];

    &.vertical {
      @apply w-0.5 h-3;
    }

    &.horizontal {
      @apply w-[20vw] h-px my-6;
    }
  }

  & .data-form-container {
    @apply flex flex-col gap-4;

    & .event-data {
      @apply flex flex-row flex-wrap items-center gap-1.5;

      & .event-data-item {
        @apply flex w-max;

        & .checkbox {
          @apply flex items-center justify-center p-2 border border-[#D7DAE0] rounded-lg h-10;

          @screen lg {
            @apply min-w-44;
          }

          &.checked {
            @apply border-[#7505E0];
          }

          & .custom-checkbox {
            &.checked {
              @apply bg-[#7505E0] border-[#DECEFF];
            }
          }

          & .checkbox-label {
            &.checked {
              @apply text-[#7505E0];
            }
          }
        }
      }
    }

    & .radio-options {
      @apply flex flex-col gap-4;

      & .input-container {
        @apply w-full;

        @screen lg {
          @apply w-1/2;
        }
      }
    }
  }
`

export default styles
