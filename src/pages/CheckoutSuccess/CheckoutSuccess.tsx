import illustration from '../../assets/illustration.svg'
import {
  CheckoutSuccessContainer,
  Step,
  StepsContainer,
} from './CheckoutSuccess.styles'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'

export function CheckoutSuccess() {
  return (
    <CheckoutSuccessContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </header>
      <main>
        <StepsContainer>
          <Step>
            <MapPin size={22} weight="fill" />
            <div>
              Entrega em <span>Rua Vereador Jão Farina, 536</span>
              <div>Farrapos, Cuiaba-MT</div>
            </div>
          </Step>
          <Step>
            <Clock size={22} weight="fill" />
            <div>
              <div>Previsão de entrega</div>
              <div>20 - 30 min</div>
            </div>
          </Step>
          <Step>
            <CurrencyDollar size={22} weight="fill" />
            <div>
              <div>Pagamento na entrega</div>
              <div>Cartão de Crédito</div>
            </div>
          </Step>
        </StepsContainer>
        <div>
          <img src={illustration} alt="Um entregador pilotando uma moto" />
        </div>
      </main>
    </CheckoutSuccessContainer>
  )
}
