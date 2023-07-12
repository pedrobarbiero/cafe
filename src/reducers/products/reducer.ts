interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  tags: string[]
}

interface selectedProducts {
  product: Product
  quantity: number
}

interface ProductsStateReducer {
  selectedProducts: selectedProducts[]
}

interface ProductStateAction {
  type: 'INCREASE' | 'DECREASE'
  payload: Product
}

export function productsReducer(
  state: ProductsStateReducer,
  action: ProductStateAction,
) {
  const selectedProducts = state.selectedProducts
  const productExists = selectedProducts.find(
    (sp) => sp.product.id === action.payload.id,
  )
  if (!productExists) {
    selectedProducts.push({
      product: action.payload,
      quantity: 0,
    })
  }
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        selectedProducts: selectedProducts.map((sp) => {
          if (sp.product.id === action.payload.id) {
            return {
              ...sp,
              quantity: sp.quantity + 1,
            }
          }
          return sp
        }),
      }

    case 'DECREASE':
      return {
        ...state,
        selectedProducts: selectedProducts.map((sp) => {
          if (sp.product.id === action.payload.id) {
            return {
              ...sp,
              quantity: sp.quantity >= 1 ? sp.quantity - 1 : sp.quantity,
            }
          }
          return sp
        }),
      }
    default:
      return state
  }
}
