import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ProductCardActionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const RemoveProductButton = styled.button`
  display: flex;
  padding: 8px 4px;
  gap: 0.25rem;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.75rem;
  border: none;
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`

export const PriceContainer = styled.span`
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: 700;
`
