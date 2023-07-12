import { ShoppingCart } from 'phosphor-react'
import { Product } from '../pages/Home/Home'
import {
  BuyContainer,
  BuyProductContainer,
  PriceContainer,
  ProductCardContainer,
  ProductCardInfo,
  TagContainer,
} from './ProductCard.styles'
import { QuantitySelector } from './QuantitySelector'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext'
import { useContext } from 'react'

export function ProductCard({ product }: { product: Product }) {
  const { increaseQuantity, decreaseQuantity, selectedProducts } =
    useContext(ProductsContext)

  const handleIncrease = () => {
    increaseQuantity(product)
  }

  const handleDecrease = () => {
    decreaseQuantity(product)
  }

  const selectedProduct = selectedProducts.find(
    (p) => p.product.id === product.id,
  )

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
        <PriceContainer>
          R$ <span>{product.price}</span>
        </PriceContainer>
        <QuantitySelector
          quantity={selectedProduct?.quantity || 0}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
        <BuyContainer>
          <Link to={'/checkout'}>
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </BuyContainer>
      </BuyProductContainer>
    </ProductCardContainer>
  )
}
