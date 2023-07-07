import { MapPin } from 'phosphor-react'
import { LocationContainer } from './Location.styles'

export function Location() {
  return (
    <LocationContainer>
      <MapPin size={22} weight="fill" />
      <span>Porto Alegre, RS</span>
    </LocationContainer>
  )
}
