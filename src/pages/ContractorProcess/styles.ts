import { css } from '@linaria/core'

const styles = css`
  & .profile-form {
    & > header,
    & > footer {
      @apply flex;

      & > div {
        @apply flex w-full;
      }
    }

    & > header {
      & > div,
      & > div > div {
        @apply flex items-center justify-center;

        &:first-child {
          @apply justify-start;
        }

        &:last-child {
          @apply justify-end;
        }

        & .altempo-icon {
          @apply h-[1.75rem] w-[7rem];
        }
      }

      & button {
        @apply flex items-center justify-center text-accent-950 text-sm gap-2 p-2;

        & .icon {
          @apply h-6 w-6;
        }
      }
    }

    & > main {
      & > div {
        @apply flex flex-col gap-8 h-full;

        & .stepper {
          & .step {
            &:first-child {
              & .body.completed,
              & .body.is-active {
                & .icon {
                  & > svg {
                    & > g > path {
                      @apply fill-white;
                    }

                    & > path {
                      @apply fill-white;
                    }
                  }
                }
              }

              & .body {
                & .icon {
                  & > svg {
                    & > g > path {
                      @apply fill-[#888FA8];
                    }

                    & > path {
                      @apply fill-[#888FA8];
                    }
                  }
                }
              }
            }

            &:last-child {
              & .body.completed,
              & .body.is-active {
                & .icon {
                  & > svg {
                    & > path {
                      @apply fill-white;
                    }
                  }
                }
              }

              & .body {
                & .icon {
                  & > svg {
                    & > path {
                      @apply fill-[#888FA8];
                    }
                  }
                }
              }
            }
          }
        }

        & .social-and-form {
          @apply flex flex-col gap-6 h-full;

          & .social-login {
            @apply flex flex-col items-center justify-center gap-4;

            & > span {
              @apply text-[#888FA8];
            }

            & .social-buttons {
              @apply flex items-center justify-center gap-4;

              & .social-button {
                @apply w-auto;

                @screen md {
                  @apply w-[9.5rem];
                }
              }
            }
          }
        }
      }
    }

    & > footer {
      @apply text-center text-gray-600 text-[#B0B1B8];

      & > div {
        @apply items-center justify-center;
      }
    }
  }

  & .right-child {
    @apply flex items-center justify-center py-4 px-4;

    /* TODO: Review height (h-[100dvh]) */
    @screen md {
      @apply h-full px-0 py-8 pr-8 pl-4;
    }

    & .video-card {
      @apply relative flex rounded-lg overflow-hidden w-full h-[35dvh];

      @screen md {
        @apply w-full h-full;
      }

      & > img {
        @apply absolute w-full h-full object-cover rounded-lg;
      }

      & .card-items {
        @apply absolute flex w-full h-full p-8;

        & .items {
          @apply relative w-full h-full;

          & .video-play-button {
            @apply absolute right-0 top-0 flex gap-2 pl-3;

            & > span {
              @apply text-white font-medium;
            }

            & > svg {
              @apply h-6 w-6;
            }
          }

          & .selected-profile {
            @apply absolute bottom-0 right-0 z-10 flex flex-col items-end;

            & > span,
            & > h1 {
              @apply text-white;
            }

            & > span {
              @apply font-medium text-right;
            }

            & > h1 {
              @apply font-black text-right leading-normal;
            }

            & > button {
              @apply flex items-center gap-2 text-white p-0;

              & > svg {
                & > path {
                  @apply stroke-secondary-400;
                }
              }

              & > span {
                @apply font-semibold text-secondary-400 underline;
              }
            }
          }
        }
      }

      & .bottom-gradient {
        @apply absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#18243E] to-[rgba(24,36,62,0)];
      }
    }
  }
`

export default styles
