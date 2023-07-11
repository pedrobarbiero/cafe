import { IntroContainer, ProductsContainer } from './Home.styles'
import intro from '../../assets/intro.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { ProductCard } from '../../components/ProductCard'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  tags: string[]
}

export function Home() {
  const { products } = useContext(ProductsContext)
  return (
    <>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <ul>
            <li>
              <ShoppingCart weight="fill" /> Compra simples e segura
            </li>
            <li>
              <Timer weight="fill" /> Entrega rápida e rastreada
            </li>
            <li>
              <Package weight="fill" /> Embalagem mantém o café intacto
            </li>
            <li>
              <Coffee weight="fill" /> O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <img
          src={intro}
          alt="Um copo de café descartável com grãos de café ao redor"
        />
      </IntroContainer>
      <section>
        <h1>Nossos Cafés</h1>
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </section>
    </>
  )
}
