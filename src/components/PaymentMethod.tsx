import { PaymentButton, PaymentOptionsContainer } from './PaymentMethoed.styles'
import { CreditCard, Bank, Money } from 'phosphor-react'

interface PaymentMethodProps {
  method: 'credit' | 'debit' | 'money'
}

export function PaymentMethod({ method }: PaymentMethodProps) {
  return (
    <PaymentOptionsContainer>
      <PaymentButton isSelected={true}>
        <CreditCard size={22} /> <span>Crédito</span>
      </PaymentButton>
      <PaymentButton>
        <Bank size={22} /> <span>Débito</span>
      </PaymentButton>
      <PaymentButton>
        <Money size={22} /> <span>Dinheiro</span>
      </PaymentButton>
    </PaymentOptionsContainer>
  )
}
