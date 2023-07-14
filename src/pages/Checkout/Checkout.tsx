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
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import * as zod from 'zod'
import {
  PaymentMethodType,
  ProductsContext,
} from '../../context/ProductsContext'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const CheckoutFormSchema = zod.object({
  zipCode: zod.string().min(8).max(8),
  street: zod.string().min(5).max(50),
  number: zod.string().min(1).max(10),
  complement: zod.string().min(0).max(50),
  neighborhood: zod.string().min(5).max(50),
  city: zod.string().min(5).max(50),
  state: zod.string().min(2).max(2),
})

type CheckoutFormSchemaType = zod.infer<typeof CheckoutFormSchema>

export function Checkout() {
  const newAddresForm = useForm<CheckoutFormSchemaType>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const navigate = useNavigate()

  const handleConfirm = (data: CheckoutFormSchemaType) => {
    console.log(data)
    console.log('selectedProducts', selectedProducts)
    navigate('/checkout-success')
  }

  const { selectedProducts, paymentMethod, setPaymentMethod } =
    useContext(ProductsContext)
  const productsPrice = selectedProducts.reduce(
    (acc, sp) => acc + sp.product.price * sp.quantity,
    0,
  )
  const deliveryPrice = productsPrice > 0 ? 4.5 : 0
  const finalPrice = productsPrice + deliveryPrice

  const handlePaymentMethodChange = (method: PaymentMethodType) => {
    setPaymentMethod(method as PaymentMethodType)
  }

  const { register } = newAddresForm
  console.log(newAddresForm.formState.errors)

  return (
    <FormProvider {...newAddresForm}>
      <CheckoutPageFormContainer
        onSubmit={newAddresForm.handleSubmit(handleConfirm)}
        action=""
      >
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
              <Input
                label="CEP"
                widthInRem={12.5}
                register={register('zipCode')}
              />
              <Input
                label="Rua"
                widthInRem={35}
                register={register('street')}
              />
              <div>
                <Input
                  label="Número"
                  widthInRem={12.5}
                  register={register('number')}
                />
                <Input
                  label="Complemento"
                  widthInRem={21}
                  optional={true}
                  register={register('complement')}
                />
              </div>
              <div>
                <Input
                  label="Bairro"
                  widthInRem={12.5}
                  register={register('neighborhood')}
                />
                <Input
                  label="Cidade"
                  widthInRem={17}
                  register={register('city')}
                />
                <Input
                  label="UF"
                  widthInRem={3.75}
                  register={register('state')}
                />
              </div>
            </AddressFields>
          </AddressContainer>
          <PaymentContainer>
            <PaymentHeader>
              <CurrencyDollar size={32} />
              <div>
                <legend>Pagamento</legend>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </PaymentHeader>
            <PaymentMethod
              method={paymentMethod}
              onChange={handlePaymentMethodChange}
            />
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
                <PriceContainer>R$ {productsPrice.toFixed(2)}</PriceContainer>
              </div>
              <div>
                <span>Entrega</span>
                <PriceContainer>R$ {deliveryPrice.toFixed(2)}</PriceContainer>
              </div>
              <div>
                <TotalPriceContainer>Total</TotalPriceContainer>
                <TotalPriceContainer>
                  R$ {finalPrice.toFixed(2)}
                </TotalPriceContainer>
              </div>
              <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
            </PaymentSummaryContainer>
          </SelectedProductsContainer>
        </aside>
      </CheckoutPageFormContainer>
    </FormProvider>
  )
}
