import { useState } from 'react'
import TopImage from './topimage.jsx'
import './topimage.css'
import Feature from './feature.jsx'
import CardList from './cardlist.jsx'
import Footer from './footer.jsx'
import News from './news.jsx'
import Topper from './topper.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Topper />
    <div className="top-image-cont">
      <TopImage />
    </div>
    <Feature />
    <CardList />
    <News />
    <Footer />
    </>
  )
}

export default App
