import { Input } from '../../components/Input'
import {
  CheckoutPageFormContainer,
  AddressContainer,
  AddressHeader,
  AddressFields,
  PaymentContainer,
  PaymentHeader,
  SelectedProductsContainer,
  PaymentSummaryContainer,
  PriceContainer,
  TotalPriceContainer,
  ConfirmButton,
} from './Checkout.styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { ProductCard } from './components/ProductCard'
import { PaymentMethod } from '../../components/PaymentMethod'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

export function Checkout() {
  const { selectedProducts } = useContext(ProductsContext)

  return (
    <CheckoutPageFormContainer>
      <section>
        <h1>Complete seu pedido</h1>
        <AddressContainer>
          <AddressHeader>
            <MapPinLine size={32} />
            <div>
              <legend>Endereço de entrega</legend>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AddressHeader>
          <AddressFields>
            <Input label="CEP" name="cep" widthInRem={12.5} />
            <Input label="Rua" name="rua" widthInRem={35} />
            <div>
              <Input label="Número" name="numero" widthInRem={12.5} />
              <Input
                label="Complemento"
                name="complemento"
                widthInRem={21}
                optional={true}
              />
            </div>
            <div>
              <Input label="Bairro" name="bairro" widthInRem={12.5} />
              <Input label="Cidade" name="cidade" widthInRem={17} />
              <Input label="UF" name="UF" widthInRem={3.75} />
            </div>
          </AddressFields>
        </AddressContainer>
        <PaymentContainer>
          <PaymentHeader>
            <CurrencyDollar size={32} />
            <div>
              <legend>Pagamento</legend>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentHeader>
          <PaymentMethod method="credit" />
        </PaymentContainer>
      </section>
      <aside>
        <h1>Cafés selecionados</h1>
        <SelectedProductsContainer>
          <div>
            {selectedProducts &&
              selectedProducts.map((sp) =>
                ProductCard({ ...sp.product, quantity: sp.quantity }),
              )}
          </div>
          <hr />
          <PaymentSummaryContainer>
            <div>
              <span>Total de items</span>
              <PriceContainer>R$ 12,50</PriceContainer>
            </div>
            <div>
              <span>Entrega</span>
              <PriceContainer>R$ 4,50</PriceContainer>
            </div>
            <div>
              <TotalPriceContainer>Total</TotalPriceContainer>
              <TotalPriceContainer>R$ 33,20</TotalPriceContainer>
            </div>
            <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
          </PaymentSummaryContainer>
        </SelectedProductsContainer>
      </aside>
    </CheckoutPageFormContainer>
  )
}
