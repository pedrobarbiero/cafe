import { ShoppingCart } from 'phosphor-react'
import { Product } from '../pages/Home/Home'
import {
  BuyProductContainer,
  ProductCardContainer,
  ProductCardInfo,
  TagContainer,
} from './ProductCard.styles'
import { QuantitySelector } from './QuantitySelector'

export function ProductCard({ product }: { product: Product }) {
  return (
    <ProductCardContainer>
      <ProductCardInfo>
        <img src={product.image} alt={product.name} />
        <TagContainer>
          {product.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </TagContainer>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </ProductCardInfo>
      <BuyProductContainer>
        <span>R$ {product.price}</span>
        <QuantitySelector />
        <ShoppingCart weight="fill" />
      </BuyProductContainer>
    </ProductCardContainer>
  )
}
