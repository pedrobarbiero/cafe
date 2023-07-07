import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Checkout } from './pages/Checkout/Checkout'
import { CheckoutFilled } from './pages/CheckoutFilled/CheckoutFilled'
import { CheckoutSuccess } from './pages/CheckoutSuccess/CheckoutSuccess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout-filled" element={<CheckoutFilled />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
    </Routes>
  )
}
