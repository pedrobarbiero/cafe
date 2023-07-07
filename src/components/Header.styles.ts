import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`

export const ShoppingLink = styled.a`
  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  padding: 0.5rem;
  border-radius: 5px;
`
