import './App.sass'
import { WelcomePage } from './pages/WelcomePage/WelcomePage'
import { Header } from './components/Header/Header'
import ArtistPage, { ArtistProps } from './pages/ArtistPage/ArtistPage'
import { Container } from 'react-bootstrap'

const ArtistInfo = {
  name: "Stray Kids",
  hangulName: "스트레이 키즈",
  debutDate: "March 25th, 2018",
  agency: "JYP Entertaiment",
  fandomName: "STAY(스트이)",
  additionalInfo: 'They were created in "Stray Kids" survival show'
} as ArtistProps

function App() {
  return (
    <>
      <Header />
      <Container>
        {/* <WelcomePage /> */}
        <ArtistPage {...ArtistInfo}/>
      </Container>
    </>
  )
}

export default App
