
import './App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Card img="img/image 12.png"
             rating={5.0}
             points={6 }
             country="Ethiopia"
             lesson="Life lessons from katie zaferes"
             price={136}
        />
      
    </>
  )
}

export default App
