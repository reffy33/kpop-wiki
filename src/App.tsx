import './App.sass'
import { Header } from './components/Header/Header'
import { Container } from 'react-bootstrap'
import { MyRouter } from './components/Router'

function App() {
  return (
    <>
      <Header />
      <Container>
        <MyRouter />
      </Container>
    </>
  )
}

export default App
