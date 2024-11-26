import { css } from '@linaria/core'

const styles = css`
  @apply w-full;

  .input-wrapper {
    @apply relative w-full h-14;
  }

  .input-field {
    @apply w-full h-full px-3 py-2 text-base text-[#18243E] bg-transparent 
            border border-[rgba(24,36,62,0.19)] rounded-xl
            placeholder-transparent transition-all duration-200;

    &:focus {
      @apply border-[#7505E0] outline-none;
    }

    &.has-error {
      @apply border-red-500;
    }
  }

  .input-label {
    @apply absolute left-3 top-4 text-base text-[#18243E] opacity-50
            transition-all duration-200 pointer-events-none max-w-[80%] truncate;
    transform-origin: 0 0;

    .optional-text {
      @apply ml-1 text-[#18243E] opacity-50;
    }
  }

  .input-field:focus + .input-label,
  .input-field:not(:placeholder-shown) + .input-label,
  .exist-selected-value.input-label {
    @apply text-sm text-[#7505E0] opacity-100;
    transform: translateY(-0.8rem) scale(0.85);
  }

  .input-field.has-error + .input-label {
    @apply text-red-500;
  }

  .helper-text,
  .error-text {
    @apply block leading-none mt-1;
  }

  .helper-text {
    @apply text-[#18243E] opacity-50 italic;
  }

  .error-text {
    @apply text-red-500;
  }

  &.select {
    @apply relative;

    * {
      @apply select-none;
    }

    .select-header {
      @apply relative flex items-center justify-between px-3 py-2
              bg-white rounded-xl cursor-pointer
              border border-[rgba(24,36,62,0.19)]
              transition-all duration-200;

      &:hover,
      &.is-open {
        @apply border-[#7505E0];
      }

      & .input-field {
        @apply border-none;
      }
    }

    .select-label {
      @apply text-base text-[#18243E];
    }

    .select-arrow {
      @apply absolute right-3 text-[#18243E] transition-transform duration-200;

      &.is-open {
        @apply rotate-180;
      }
    }

    .select-dropdown {
      @apply absolute left-0 right-0 mt-2 bg-white
              rounded-xl shadow-lg border border-[rgba(24,36,62,0.19)]
              z-50;
    }

    .search-container {
      @apply flex items-center px-4 py-3 border-b border-[rgba(24,36,62,0.19)];
    }

    .search-input {
      @apply w-full bg-transparent border-none outline-none
             text-base text-[#18243E] placeholder-[rgba(24,36,62,0.5)];

      &:focus {
        @apply outline-none;
      }
    }

    .options-container {
      @apply max-h-60 overflow-y-auto;
    }

    .option {
      @apply flex items-center justify-between px-4 py-3
              text-base text-[#18243E] cursor-pointer
              transition-colors duration-200;

      &:hover {
        @apply bg-[rgba(117,5,224,0.05)];
      }

      &.is-selected {
        @apply text-[#7505E0];
      }
    }
  }

  &.date {
    @apply relative w-full;

    .datepicker-input {
      @apply flex items-center justify-between w-full px-3 py-2
              bg-white rounded-xl cursor-pointer
              border border-[rgba(24,36,62,0.19)]
              transition-all duration-200;

      &:hover {
        @apply border-[#7505E0];
      }

      &.is-open {
        @apply border-[#7505E0];
      }
    }

    .input-content {
      @apply flex flex-col;
    }

    .selected-date {
      @apply text-base text-[#18243E] mt-1;
    }

    .calendar-icon {
      @apply text-[#18243E] opacity-50;
    }

    .calendar-dropdown {
      @apply absolute left-0 right-0 mt-2 bg-white
              rounded-xl shadow-lg border border-[rgba(24,36,62,0.19)]
              z-50 p-4;
    }

    .calendar-header {
      @apply flex items-center justify-between mb-4;
    }

    .month-nav-btn {
      @apply p-1 rounded-lg hover:bg-[rgba(117,5,224,0.05)]
              transition-colors duration-200;

      & > svg > path {
        @apply stroke-[#18243E];
      }
    }

    .current-month {
      @apply text-base font-medium text-[#18243E];
    }

    .calendar-grid {
      @apply grid grid-cols-7 gap-1;
    }

    .weekday {
      @apply text-sm text-center text-[#18243E] opacity-50 py-2;
    }

    .day-btn {
      @apply w-8 h-8 flex items-center justify-center rounded-lg
              text-sm text-[#18243E] transition-colors duration-200;

      &:hover {
        @apply bg-[rgba(117,5,224,0.05)];
      }

      &.is-today {
        @apply font-bold;
      }

      &.is-selected {
        @apply bg-[#7505E0] text-white;

        &:hover {
          @apply bg-[#7505E0];
        }
      }

      &.other-month {
        @apply opacity-50;
      }
    }
  }

  &.search {
    & .input-wrapper {
      height: unset;

      & .prefix-icon {
        @apply absolute inset-y-0 left-3 flex items-center pointer-events-none;

        & > svg {
          @apply h-6 w-6;

          & > path {
            @apply stroke-[#B4BAC5];
          }
        }
      }

      & > input {
        @apply h-full w-full py-3 pl-12 pr-4 text-gray-700 bg-gray-50 rounded-xl 
                outline-none transition-shadow duration-200 ease-in-out 
                placeholder-[#888FA8];

        &:focus {
          @apply ring-1 ring-purple-100 bg-white;
        }
      }
    }
  }

  &.text-area {
    .input-wrapper {
      @apply h-[unset];
    }

    .input-field {
      @apply pt-4 text-xs;
    }

    & .limit-messages-container {
      @apply flex flex-col justify-center items-end pt-1;

      & > span {
        @apply text-xs;
      }

      .counter {
        &.completed {
          @apply text-red-500;
        }
      }

      .limit-error {
        @apply text-red-500;
      }
    }
  }
`

export default styles
