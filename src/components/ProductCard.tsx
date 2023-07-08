import { Product } from '../pages/Home/Home'

export function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>{product.price}</span>
    </div>
  )
}
