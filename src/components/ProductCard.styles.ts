import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  margin: 2rem 0.5rem;
  padding: 1rem;
  width: 15rem;
  height: 19rem;
`

export const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 16rem;
  top: -3rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
  p {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  span {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    padding: 2px 8px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    font-style: normal;
    line-height: 130%;
    text-transform: uppercase;
  }
`
export const BuyProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const PriceContainer = styled.div`
  font-size: 0.875rem;
  span {
    color: ${({ theme }) => theme.colors['base-text']};
    text-align: right;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    cursor: pointer;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['purple-dark']};
    color: ${({ theme }) => theme.colors.white};
    border: 0;
    box-shadow: none;
    padding: 0.5rem;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`
