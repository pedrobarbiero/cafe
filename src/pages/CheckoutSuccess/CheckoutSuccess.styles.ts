import styled, { css } from 'styled-components'

export const CheckoutSuccessContainer = styled.div`
  margin-top: 5rem;
  justify-content: center;
  > header > h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors['yellow-dark']};
    font-weight: 800;
    line-height: 130%;
  }

  > main {
    display: flex;
    justify-content: space-between;
  }
`

export const StepsContainer = styled.div(
  (props) => css`
    margin-top: 2.5rem;
    padding: 1.5rem 2.5rem;
    border: 1px solid ${props.theme.colors.yellow};
    border-radius: 6px 36px;

    div > svg {
      background-color: ${props.theme.colors.purple};
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      padding: 8px;
      color: ${props.theme.colors.white};
      margin: 1rem;
    }
    :nth-child(1) > svg {
      background-color: ${props.theme.colors.purple};
    }

    :nth-child(2) > svg {
      background-color: ${props.theme.colors.yellow};
    }
    :nth-child(3) > svg {
      background-color: ${props.theme.colors['yellow-dark']};
    }
  `,
)

export const Step = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
`
