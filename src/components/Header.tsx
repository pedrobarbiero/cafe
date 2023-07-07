import logo from '../assets/logo.svg'
import { ShoppingCart } from 'phosphor-react'
import { HeaderActions, HeaderContainer, ShoppingLink } from './Header.styles'
import { Location } from './Location'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Um copo de café com o desenho de um foguete." />
      <HeaderActions>
        <Location />
        <ShoppingLink>
          <ShoppingCart size={22} weight="fill" />
        </ShoppingLink>
      </HeaderActions>
    </HeaderContainer>
  )
}
