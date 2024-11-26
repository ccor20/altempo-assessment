interface InputProps {
  helperText?: string
  optional?: boolean
  error?: string
}

export interface Input extends React.HTMLProps<HTMLInputElement>, InputProps {
  label: string
}
export interface TextArea
  extends React.HTMLProps<HTMLTextAreaElement>,
    InputProps {
  label: string
  value: string
  characterLimit?: number
  onChange: (value: string) => void
}

export interface SelectOption {
  label: string
  value: string
}

export interface Select extends React.HTMLProps<HTMLSelectElement>, InputProps {
  label: string
  options: SelectOption[]
  selectedValue?: SelectOption
  searchPlaceholder?: string
  closeOnSelect?: boolean
  onSelectChange?: (value: SelectOption) => void
}

export interface DatePicker extends InputProps {
  label: string
  value?: Date
  onChange?: (date: Date) => void
  className?: string
  closeOnSelect?: boolean
  optional?: boolean
}
