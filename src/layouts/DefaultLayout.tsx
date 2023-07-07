import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './DefaultLayout.styles.ts'
import { Header } from '../components/Header.tsx'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
