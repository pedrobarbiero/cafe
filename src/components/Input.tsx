import { InputContainer } from './Input.styles'

interface InputProps {
  name: string
  label: string
  widthInRem?: number
  optional?: boolean
}

export function Input({
  name,
  label,
  widthInRem = 12,
  optional = false,
}: InputProps) {
  return (
    <InputContainer widthInRem={widthInRem} optional={optional}>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} placeholder={label} />
    </InputContainer>
  )
}
