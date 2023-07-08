import styled from 'styled-components'

export const IntroContainer = styled.section`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  margin: 4rem 0;
  align-items: center;

  div ul {
    list-style: none;
    columns: 2;

    li {
      display: inline-block;
      vertical-align: middle;
      margin-right: 1rem;
      padding: 0.5rem 0;
      color: ${({ theme }) => theme.colors['base-text']};
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;

      &:nth-child(1) > svg {
        background-color: ${({ theme }) => theme.colors['yellow-dark']};
      }
      &:nth-child(2) > svg {
        background-color: ${({ theme }) => theme.colors.yellow};
      }
      &:nth-child(3) > svg {
        background-color: ${({ theme }) => theme.colors['base-text']};
      }
      &:nth-child(4) > svg {
        background-color: ${({ theme }) => theme.colors.purple};
      }
    }

    svg {
      color: ${({ theme }) => theme.colors.white};
      padding: 8px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 0.75rem;
    }
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
