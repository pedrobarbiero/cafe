import styled from 'styled-components'

export const CheckoutPageFormContainer = styled.form`
  display: flex;
  gap: 2rem;
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

export const SelectedProductsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 6px 44px;

  > hr {
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
  }

  > div {
    margin-bottom: 1rem;
  }
`

export const PaymentContainer = styled(baseFieldsetContainer)``

export const PaymentSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  div {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }
`

export const PriceContainer = styled.span`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 1rem;
  line-height: 130%;
`
export const TotalPriceContainer = styled.span`
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-weight: 700;
  line-height: 130%;
  font-size: 1.25rem;
`

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
