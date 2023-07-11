import logo from '../assets/logo.svg'
import { ShoppingCart } from 'phosphor-react'
import { HeaderActions, HeaderContainer, ShoppingLink } from './Header.styles'
import { Location } from './Location'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Um copo de café com o desenho de um foguete." />
      </Link>
      <HeaderActions>
        <Location />
        <ShoppingLink>
          <ShoppingCart size={22} weight="fill" />
        </ShoppingLink>
      </HeaderActions>
    </HeaderContainer>
  )
}
