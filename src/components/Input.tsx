import { UseFormRegisterReturn } from 'react-hook-form'
import { InputContainer } from './Input.styles'

interface InputProps {
  label: string
  widthInRem?: number
  optional?: boolean
  register: UseFormRegisterReturn<string>
}

export function Input({
  label,
  widthInRem = 12,
  optional = false,
  register,
}: InputProps) {
  return (
    <InputContainer widthInRem={widthInRem} optional={optional}>
      <label htmlFor={register.name}>{label}</label>
      <input type="text" placeholder={label} {...register} />
    </InputContainer>
  )
}
