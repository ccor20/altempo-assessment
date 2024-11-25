import { css } from '@linaria/core'

const styles = css`
  @apply flex items-center justify-center text-accent-950 text-sm gap-2 p-2 transition-all;

  &:hover {
    transform: scale(1.05);
  }

  & .icon {
    @apply h-6 w-6;
  }

  &.default-button {
    @apply rounded-full;
  }

  &.icon-button {
  }

  &.outline-button {
    @apply border border-white/20 text-white rounded-full bg-white/5;
  }

  &.social-button {
    @apply px-8 py-3 border rounded-full;

    &.facebook {
      @apply bg-[#024C99] border-[#024C99];
    }

    &.google {
      @apply bg-[#F4F5F7] border-[#B4BAC5];
    }

    &.apple {
      @apply bg-[#1C1C1E] border-[#1C1C1E];
    }

    & .icon {
      @apply h-[1.25rem];
    }
  }

  &.text-button {
  }
`

export default styles
