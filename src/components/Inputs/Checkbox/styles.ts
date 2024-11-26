import { css } from '@linaria/core'

const styles = css`
  @apply flex items-center cursor-pointer gap-3;

  * {
    @apply select-none;
  }

  & .custom-checkbox {
    @apply w-5 h-5 rounded-lg flex items-center justify-center transition-all duration-200 
            cursor-pointer shadow border border-[#D4D4D8] bg-white p-1;

    &:hover {
      @apply bg-[#e3e3e6];
    }

    &.checked {
      @apply bg-[#42e35f] border-[#76fdab];

      &:hover {
        @apply bg-[#42e35f];
      }
    }

    &.disabled {
      @apply opacity-50 cursor-not-allowed;
    }
  }

  & .checkbox-label {
    @apply text-neutral-950;

    &.disabled {
      @apply opacity-50;
    }

    &.checked {
      @apply font-medium;
    }
  }
`

export default styles
