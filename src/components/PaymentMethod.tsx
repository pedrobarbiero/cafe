import { PaymentMethodType } from '../context/ProductsContext'
import { PaymentButton, PaymentOptionsContainer } from './PaymentMethoed.styles'
import { CreditCard, Bank, Money } from 'phosphor-react'

interface PaymentMethodProps {
  method: PaymentMethodType
  onChange: (method: PaymentMethodType) => void
}

export function PaymentMethod({ method, onChange }: PaymentMethodProps) {
  const handlePaymentMethodChange = (method: PaymentMethodType) => {
    onChange(method)
  }
  return (
    <PaymentOptionsContainer>
      <PaymentButton
        type="button"
        isSelected={method === 'credit'}
        onClick={handlePaymentMethodChange.bind(null, 'credit')}
      >
        <CreditCard size={22} /> <span>Crédito</span>
      </PaymentButton>
      <PaymentButton
        type="button"
        isSelected={method === 'debit'}
        onClick={handlePaymentMethodChange.bind(null, 'debit')}
      >
        <Bank size={22} /> <span>Débito</span>
      </PaymentButton>
      <PaymentButton
        type="button"
        isSelected={method === 'money'}
        onClick={handlePaymentMethodChange.bind(null, 'money')}
      >
        <Money size={22} /> <span>Dinheiro</span>
      </PaymentButton>
    </PaymentOptionsContainer>
  )
}
