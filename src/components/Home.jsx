import React , { useState , useEffect} from 'react'
import gamePreview from '../assets/game-preview.gif'

const Home = () => {

    const [screenWidth , setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isSmallScreen = screenWidth < 1024;

    return (
        <div 
        className={` mt-[-5rem] h-auto w-screen pb-20 p-6 ${isSmallScreen ? ' mt-10' : ''}`}>
            <div 
            name='container' 
            className='max-w-screen-lg mx-auto justify-center flex flex-col items-center
            lg:h-screen lg:w-screen lg:px-4'>
                <div>
                    <img 
                    src={gamePreview} 
                    alt="gamePreview" 
                    className=' border-specialBorder border-8 rounded-2xl hover:scale-[1.05] duration-200 scale-100 w-full'/>
                </div>
            </div>
        </div>
    )
}

export default Home