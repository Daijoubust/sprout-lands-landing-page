import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import GamePreviewTest from './components/GamePreviewTest'
import StillDev from './components/StillDev'
import UiPreviewTest from './components/UiPreviewTest'
import CharacterAnimate from './components/CharacterAnimate'
// import UiPreview from './components/UiPreview'
// import SocialMedia from './components/SocialMedia'

function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <GamePreviewTest/>
      <StillDev/>
      <UiPreviewTest/>
      <CharacterAnimate/>
      <SocialLinks/>
    </div>
  )
}

export default App