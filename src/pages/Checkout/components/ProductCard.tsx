import { QuantitySelector } from '../../../components/QuantitySelector'
import { Trash } from 'phosphor-react'
import {
  PriceContainer,
  ProductCardActionsContainer,
  ProductCardContainer,
  RemoveProductButton,
} from './ProductCard.styles'

interface productCardProps {
  name: string
  price: number
  quantity: number
  image: string
}

export function ProductCard({
  name,
  price,
  quantity,
  image,
}: productCardProps) {
  return (
    <ProductCardContainer>
      <img src={image} alt="" />
      <ProductCardActionsContainer>
        <span>{name}</span>
        <div>
          <QuantitySelector />
          <RemoveProductButton>
            <Trash size={22} />
            Remover
          </RemoveProductButton>
        </div>
      </ProductCardActionsContainer>
      <PriceContainer>R$ {price}</PriceContainer>
    </ProductCardContainer>
  )
}
