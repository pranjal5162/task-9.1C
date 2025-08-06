import { useState } from 'react'
import TopImage from './topimage.jsx'
import './topimage.css'
import Feature from './feature.jsx'
import CardList from './cardlist.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="top-image-cont">
      <TopImage />
    </div>
    <Feature />
    <CardList />
    </>
  )
}

export default App
