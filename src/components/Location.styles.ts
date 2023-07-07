import styled from 'styled-components'

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['purple-light']};
  color: ${({ theme }) => theme.colors['purple-dark']};
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  border-radius: 5px;
`
