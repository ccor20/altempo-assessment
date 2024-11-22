import { css } from '@linaria/core'

const styles = css`
  @apply flex flex-col;

  @screen md {
    @apply flex-row;
  }

  & .left-column {
    @apply basis-2/3 order-2;

    @screen md {
      @apply order-none;
    }
  }

  & .right-column {
    @apply basis-1/3 order-1;

    @screen md {
      @apply order-none;
    }
  }
`

export default styles
