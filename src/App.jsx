import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import GamePreview from './components/GamePreview'

function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <GamePreview/>
      <SocialLinks/>
    </div>
  )
}

export default App
