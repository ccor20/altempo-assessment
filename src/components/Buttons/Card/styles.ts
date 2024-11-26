import { css } from '@linaria/core'

const styles = css`
  @apply relative flex flex-col w-full transition-all duration-300 outline-none;

  &.selected {
    @apply scale-[0.99];
  }

  & .card-container {
    @apply flex flex-col rounded-xl overflow-hidden transition-all duration-300 gap-2 w-full;

    &.selected {
      & .image-container {
        @apply border-4 border-[#36DCDC] rounded-2xl;
      }
    }

    & .image-container {
      @apply relative aspect-square w-full rounded-lg;

      & img {
        @apply w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-linear;
      }

      & .overlay {
        @apply absolute inset-0 transition-all duration-300 rounded-lg;

        &.selected {
          @apply bg-black/20;
        }

        &:group-hover {
          @apply bg-black/10;
        }
      }
    }

    & .text-container {
      @apply flex flex-col items-start justify-center;

      & > span {
        @apply text-[#4E535C] text-left;
      }
    }
  }
`

export default styles
