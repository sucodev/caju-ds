import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray800',
  height: '$10',
})

export function App() {
  return <Button />
}
