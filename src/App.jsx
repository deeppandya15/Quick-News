import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'

function App() {
  return (
    <>
      <Navbar />
      <News pagesize={5} />
    </>
  )
}

export default App
