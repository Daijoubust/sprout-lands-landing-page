import React from 'react'
import gamePreview from '../assets/game-preview.gif'

const Home = () => {
    return (
        <div className='absolute top-0 left-0 h-screen w-full pl-20'>
            <div name='container' className='max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row ml-48'>
                <img src={gamePreview} alt="gamePreview" className=' border-specialBorder border-[25px] rounded-2xl hover:scale-[1.15] duration-200 scale-110 mx-auto w-4/5 md:w-full'/>
            </div>
        </div>
    )
}

export default Home