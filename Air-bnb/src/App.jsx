
import './App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import data from '../src/data'

function App() {
  const cards = data.map(item => {
    return(
      <Card img={item.coverImg}
              rating={item.stats.rating}
              points={item.stats.reviewCount}
              location={item.location}
              lesson={item.title}
              price={item.price}
              key={item.id}
      />
    )
  })
  return (
    <>
      <Navbar />
      <Hero />
      {cards}
      
    </>
  )
}

export default App
