import { IntroContainer, ProductsContainer } from './Home.styles'
import intro from '../../assets/intro.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import arabe from '../../assets/coffees/arabe.png'
import cafeComLeite from '../../assets/coffees/cafe-com-leite.png'
import cappuccino from '../../assets/coffees/capuccino.png'
import chocolateQuente from '../../assets/coffees/chocolate-quente.png'
import cubano from '../../assets/coffees/cubano.png'
import expressoAmericano from '../../assets/coffees/expresso-americano.png'
import expressoCremoso from '../../assets/coffees/expresso-cremoso.png'
import expressoGelado from '../../assets/coffees/expresso-gelado.png'
import expressoTradicional from '../../assets/coffees/expresso-tradicional.png'
import havaiano from '../../assets/coffees/havaiano.png'
import irlandes from '../../assets/coffees/irlandes.png'
import latte from '../../assets/coffees/latte.png'
import macchiato from '../../assets/coffees/macchiato.png'
import mocaccino from '../../assets/coffees/mocaccino.png'
import { ProductCard } from '../../components/ProductCard'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  tags: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.99,
    image: expressoTradicional,
    tags: ['Tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 13.99,
    image: expressoAmericano,
    tags: ['Tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 17.99,
    image: expressoCremoso,
    tags: ['Tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 12.49,
    image: expressoGelado,
    tags: ['Tradicional', 'Gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.49,
    image: cafeComLeite,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 15.99,
    image: latte,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 19.99,
    image: cappuccino,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 17.99,
    image: macchiato,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 21.99,
    image: mocaccino,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 15.99,
    image: chocolateQuente,
    tags: ['Especial', 'Com Leite'],
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 22.99,
    image: cubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 25.99,
    image: havaiano,
    tags: ['Especial'],
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 20.99,
    image: arabe,
    tags: ['Especial'],
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 25.49,
    image: irlandes,
    tags: ['Especial', 'Alcoólico'],
  },
]

export function Home() {
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
