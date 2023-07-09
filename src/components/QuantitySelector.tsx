import { QuantitySelectorContainer } from './QuantitySelector.styles'
import { Minus, Plus } from 'phosphor-react'

export function QuantitySelector() {
  return (
    <QuantitySelectorContainer>
      <button>
        <Minus size={14} />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} />
      </button>
    </QuantitySelectorContainer>
  )
}
