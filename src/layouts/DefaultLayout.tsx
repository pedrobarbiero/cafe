import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './DefaultLayout.styles.ts'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <h1>Header</h1>
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
