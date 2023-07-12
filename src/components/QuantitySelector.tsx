import { QuantitySelectorContainer } from './QuantitySelector.styles'
import { Minus, Plus } from 'phosphor-react'

interface QuantitySelectorProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  const handleIncrease = () => {
    onIncrease()
  }
  const handleDecrease = () => {
    onDecrease()
  }

  return (
    <QuantitySelectorContainer>
      <button type="button" onClick={handleDecrease}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={handleIncrease}>
        <Plus size={14} />
      </button>
    </QuantitySelectorContainer>
  )
}
