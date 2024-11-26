import { css } from '@linaria/core'

const styles = css`
  @apply aspect-[5/6] relative cursor-pointer px-4 py-8 rounded-lg transition-all duration-500
            border border-[#D7DAE0];

  &:hover:not(.selected) {
    @apply bg-[#F6F7F9];
  }

  * {
    @apply select-none;
  }

  &.selected {
    @apply border-[#7505E0];
  }

  & .check-icon {
    @apply absolute -top-2 -right-2 flex items-center justify-center 
            w-6 h-6 p-1.5 bg-[#7505E0] rounded-full 
            opacity-0 transition-all duration-200;

    &.selected {
      @apply opacity-100;
    }
  }
`

export default styles
