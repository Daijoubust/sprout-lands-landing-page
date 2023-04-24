import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { image1, image2, image3, image4, image5, image6, image7 , image8} from '../assets';

const GamePreview = () => {

const fadeImages = [
    {
        id: 1,
        url: image1,
        caption: 'First Slide'
    },
    {
        id: 2,
        url: image2,
        caption: 'Second Slide'
    },
    {
        id: 3,
        url: image3,
        caption: 'Third Slide'
    },
    {
        id: 4,
        url: image4,
        caption: 'Fourth Slide'
    },
    {
        id: 5,
        url: image5,
        caption: 'Fifth Slide'
    },
    {
        id: 6,
        url: image6,
        caption: 'Sixth Slide'
    },
    {
        id: 7,
        url: image7,
        caption: 'Seventh Slide'
    },
    {
        id: 8,
        url: image8,
        caption: 'Eighth Slide'
    },
];

    const divStyle = {
        height: '502px',
        width: '432px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    
    const spanStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: '8px 12px',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
    };
    
    return (
        <div className='h-screen w-full pl-20'>
            <div name='container' className='max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row ml-48 w-screen'>
                <div className='border-specialBorder border-[10px] rounded-2xl duration-200 scale-100 mx-auto w-96 md:w-full bg-specialBg text-black font-signature mr-32'>
                    <h1 className='text-2xl sm:text-3xl font-bold '>What is Sprout lands ?</h1>
                    <p className=' text-lg py-4'>This is a simple cute 16-bit pixel art farming asset pack with animals, farming, and many other tiles in pastel colors.</p>
                    <br/>
                    <h1 className='text-2xl sm:text-3xl font-bold '>There are two different packs :</h1>
                    <h2 className='text-xl sm:text-2xl font-semibold '>&gt; Basic Pack : </h2>
                    <p className=' text-lg py-4'>Includes Grass and water tiles, simple character animations, and many other things.</p>
                    <br/>
                    <h2 className='text-xl sm:text-2xl font-semibold '>&gt; Premium Pack : </h2>
                    <p className=' text-lg py-4'>Includes Everything from the free basic pack plus much more ( Early version available )</p>
                </div>
                <div className=' grid sm:grid-cols-1 md:grid-cols-1 px-12 sm:px-0 border-specialBorder border-[10px] rounded-2xl duration-200 scale-100 mx-auto h-[520px] w-auto md:w-full bg-specialBg text-black font-signature '>
                    <Slide>
                        {fadeImages.map((fadeImage, id)=> (
                            <div key={id}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${fadeImage.url})` }}>
                                <span className=' text-white text-center' style={spanStyle}>{fadeImage.caption}</span>
                            </div>
                            </div>
                        ))} 
                    </Slide>
            </div>
            </div>
        </div>
    )
}

export default GamePreview