import { css } from '@linaria/core'

const styles = css`
  & .service-options {
    @apply grid grid-cols-2 gap-4;

    @screen md {
      @apply grid-cols-3;
    }

    @screen lg {
      @apply grid-cols-5;
    }
  }
`

export default styles
