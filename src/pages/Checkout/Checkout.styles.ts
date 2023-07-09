import styled from 'styled-components'

export const CheckoutPageFormContainer = styled.form`
  display: flex;
`
const baseFieldsetContainer = styled.fieldset`
  background-color: ${({ theme }) => theme.colors['base-card']};
  border: none;
  padding: 2rem;
  margin: 1rem 0;
`
export const AddressContainer = styled(baseFieldsetContainer)``

const BaseFieldsetHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 2rem;

  div legend {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  div > span {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`
export const AddressHeader = styled(BaseFieldsetHeader)`
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const PaymentHeader = styled(BaseFieldsetHeader)`
  svg {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const AddressFields = styled.main`
  > div {
    margin: 1rem 0;
    display: flex;
    gap: 0.5rem;
  }
`

export const PaymentContainer = styled(baseFieldsetContainer)``
