import { Input } from '../../components/Input'
import {
  CheckoutPageFormContainer,
  AddressContainer,
  AddressHeader,
  AddressFields,
  PaymentContainer,
  PaymentHeader,
} from './Checkout.styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutPageFormContainer>
      <div>
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
              <legend>Endereço de entrega</legend>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentHeader>
        </PaymentContainer>
      </div>
      <section>
        <h1>Cafés selecionados</h1>
      </section>
    </CheckoutPageFormContainer>
  )
}
