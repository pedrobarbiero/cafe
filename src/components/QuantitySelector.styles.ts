import { styled } from 'styled-components'

export const QuantitySelectorContainer = styled.div`
  min-width: 4.5rem;
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  button {
    width: 1.25rem;
    height: 1.25rem;
    border: 0;
    background: none;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }
`
