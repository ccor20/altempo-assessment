import { css } from '@linaria/core'

const styles = css`
  @apply grid min-h-[100dvh] grid-rows-[auto_1fr_auto] p-4 gap-4;

  @screen md {
    @apply py-8 pl-8 pr-4;
  }

  & > header,
  & > footer {
  }
`

export default styles
