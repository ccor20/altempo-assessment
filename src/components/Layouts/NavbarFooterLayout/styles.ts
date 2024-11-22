import { css } from '@linaria/core'

const styles = css`
  @apply grid min-h-[100dvh] grid-rows-[auto_1fr_auto] p-4;

  @screen md {
    @apply p-8;
  }

  & > header,
  & > footer {
  }
`

export default styles
