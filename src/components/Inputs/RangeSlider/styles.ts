import { css } from '@linaria/core'

const styles = css`
  @apply relative flex items-center select-none touch-none w-full h-5;

  .track {
    @apply bg-[#ECEDF2] relative grow rounded-full h-2;

    .range {
      @apply bg-[#7505E0] absolute rounded-full h-full;
    }
  }

  .thumb {
    @apply block w-6 h-6 bg-white rounded-full border border-[#DEE0E4] cursor-pointer;

    &:hover {
      @apply bg-gray-50;
    }
  }
`

export default styles
