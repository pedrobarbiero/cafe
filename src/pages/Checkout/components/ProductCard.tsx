import { QuantitySelector } from '../../../components/QuantitySelector'
import { Trash } from 'phosphor-react'
import {
  PriceContainer,
  ProductCardActionsContainer,
  ProductCardContainer,
  RemoveProductButton,
} from './ProductCard.styles'
import { useContext } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'

interface productCardProps {
  id: number
  name: string
  price: number
  description: string
  tags: string[]
  image: string
  quantity: number
}

export function ProductCard({
  id,
  name,
  price,
  quantity,
  description,
  tags,
  image,
}: productCardProps) {
  const { increaseQuantity, decreaseQuantity, removeProduct } =
    useContext(ProductsContext)

  const handleIncrease = () => {
    increaseQuantity({ id, name, price, image, description, tags })
  }

  const handleDecrease = () => {
    decreaseQuantity({ id, name, price, image, description, tags })
  }

  const handleRemove = () => {
    removeProduct({ id, name, price, image, description, tags })
  }

  return (
    <ProductCardContainer>
      <img src={image} alt="" />
      <ProductCardActionsContainer>
        <span>{name}</span>
        <div>
          <QuantitySelector
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <RemoveProductButton type="button" onClick={handleRemove}>
            <Trash size={22} />
            Remover
          </RemoveProductButton>
        </div>
      </ProductCardActionsContainer>
      <PriceContainer>R$ {price * quantity}</PriceContainer>
    </ProductCardContainer>
  )
}
