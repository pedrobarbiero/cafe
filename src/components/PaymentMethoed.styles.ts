import styled, { css } from 'styled-components'

export const PaymentOptionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

interface PaymentOptionProps {
  isSelected?: boolean
}

export const PaymentButton = styled.button<PaymentOptionProps>(
  (props) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 11rem;
    padding: 1rem;
    border-radius: 6px;
    border: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 0.75rem;
    line-height: 160%;
    cursor: pointer;

    &:hover {
      background-color: ${props.theme.colors['base-hover']};
    }

    ${props.isSelected &&
    css`
      background-color: ${props.theme.colors['purple-light']};
      border: 1px solid ${props.theme.colors.purple};
    `}

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }
  `,
)
