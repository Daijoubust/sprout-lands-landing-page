import React , { useState , useEffect} from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from '../constants/GamePreview';

const GamePreviewTest = () => {

  const parent = {
    // .parent {
    //   display: grid;
    //   grid-template-columns: repeat(2, 1fr);
    //   grid-template-rows: repeat(2, 1fr);
    //   grid-column-gap: 5px;
    //   grid-row-gap: 5px;
    //   }      
  }

  const slideImageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
};

const slideImageStyle = {
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    height: '100%',
    width: '100%',
};

const spanStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: '8px 12px',
    width: '100%',
    height: '100%',
    position: 'relative',
    bottom: 0,
    left: 0,
};

  const [screenWidth , setScreenWidth] = useState(window.innerWidth);
    
  useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = screenWidth < 1024;

  return (
    <div 
    className={`w-screen h-auto pb-20 p-6 ${isSmallScreen ? '' : ''}`}>
        <div 
        name='container' 
        className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 py-10 max-w-screen-lg mx-auto justify-center items-center
            lg:h-screen lg:w-screen lg:px-4'>
            <div className={`border-specialBorder border-8 rounded-2xl duration-200 scale-100 bg-yellowPastel ${isSmallScreen ? '  border-2' : ' '}'`}>
              <div className=' mx-8 my-4'>
                <h1 className='text-xl sm:text-3xl font-bold mb-4 '>What is Sprout lands ?</h1>
                <p className=' text-base sm:text-lg font-poppin mb-8'>This is a simple cute 16-bit pixel art farming asset pack with animals, farming, and many other tiles in pastel colors.</p>
                <h2 className='text-xl sm:text-2xl font-bold mb-4 '>&gt; Basic Pack : </h2>
                <p className=' text-base sm:text-lg font-poppin mb-8'>Includes Grass and water tiles, simple character animations, and many other things.</p>
                <h2 className='text-xl sm:text-2xl font-bold mb-4 '>&gt; Premium Pack : </h2>
                <p className=' text-base sm:text-lg font-poppin mb-8'>Includes Everything from the free basic pack plus much more ( Early version available )</p>
              </div>
            </div>
            <div className={`border-specialBorder border-8 rounded-2xl scale-100 bg-yellowPastel ${isSmallScreen ? ' border-2' : ''}'`}>
              <Slide duration={1200}>
                  {slideImages.map((slideImage, id)=> (
                  <div key={id} style={slideImageContainerStyle} className=''>
                      <div className='bg-no-repeat pb-[28.75rem] object-center ' style={{ ...slideImageStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                          <span className='text-white' style={spanStyle}>{slideImage.caption}</span>
                      </div>
                  </div>
                  ))} 
              </Slide>
            </div>
        </div>
    </div>
  )
}

export default GamePreviewTest