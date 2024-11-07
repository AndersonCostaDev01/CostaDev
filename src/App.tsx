import Header from './containers/Header'
import Navbar from './containers/Navbar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <div className="App">
      <EstiloGlobal />
      <Header />
      <Container>
        <Navbar />
        <div>ola</div>
        <div>ola</div>
      </Container>
    </div>
  )
}

export default App
