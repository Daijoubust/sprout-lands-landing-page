import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from '../constants/GamePreview';
import '../index.css'

const GamePreview = () => {

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
        position: 'relative',
        bottom: 0,
        left: 0,
    };

    return (
        <div className=' w-screen-lg h-auto px-4 py-16'>
            <div name='container' className=' grid grid-cols-1 gap-4 py-10 max-w-screen-lg mx-auto justify-center items-center'>
                <div className='border-specialBorder border-8 rounded-2xl duration-200 scale-100 mx-auto bg-yellowPastel text-black font-signature'>
                    <div className=' mx-8 my-4'>
                        <h1 className='text-xl sm:text-3xl font-bold mb-4 '>What is Sprout lands ?</h1>
                        <p className=' text-base sm:text-lg font-poppin mb-8'>This is a simple cute 16-bit pixel art farming asset pack with animals, farming, and many other tiles in pastel colors.</p>
                        <h2 className='text-xl sm:text-2xl font-bold mb-4 '>&gt; Basic Pack : </h2>
                        <p className=' text-base sm:text-lg font-poppin mb-8'>Includes Grass and water tiles, simple character animations, and many other things.</p>
                        <h2 className='text-xl sm:text-2xl font-bold mb-4 '>&gt; Premium Pack : </h2>
                        <p className=' text-base sm:text-lg font-poppin mb-8'>Includes Everything from the free basic pack plus much more ( Early version available )</p>
                    </div>
                </div>
                <div className='border-specialBorder border-8 rounded-2xl bg-yellowPastel text-black font-signature'>
                    <Slide duration={1200}>
                        {slideImages.map((slideImage, id)=> (
                        <div key={id} style={slideImageContainerStyle}>
                        {/*<div className='bg-no-repeat bg-contain' style={{ ...slideImageStyle, 'backgroundImage': `url(${slideImage.url})`, paddingBottom: '100%' }}>*/}
                                <div>
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

export default GamePreview

// import React, { useEffect, useState } from 'react'
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// import { slideImages } from '../constants/GamePreview';

// const GamePreview = () => {

//     const [slideWidth, setSlideWidth] = useState(0);

//     const handleSlideResize = () => {
//         const slideElement = document.getElementById("slide-container")
//         if (slideElement) {
//             const width = slideElement.offsetWidth;
//             const height = slideImages[0].height;
//             const aspectRatio = height / width;
//             setSlideWidth(width);
//             setSlidePaddingBottom(`${aspectRatio * 100}%`)
//         } 
//     }

//     useEffect(() => {
//         handleSlideResize();
//         window.addEventListener('resize', handleSlideResize);
//         return () => {
//             window.removeEventListener('resize',handleSlideResize);
//         };
//     }, []);

//     const [slidePaddingBottom, setSlidePaddingBottom] = useState("100%");

//     // const divStyle = {
//     //     backgroundSize: 'contain',
//     //     backgroundPosition: 'center center',
//     // };
    
//     const spanStyle = {
//         backgroundColor: 'rgba(0, 0, 0, 0.4)',
//         padding: '8px 12px',
//         width: '100%',
//         position: 'relative',
//         bottom: 0,
//         left: 0,
//     };

//     return (
//         <div className=' max-w-screen-lg mx-auto px-4 py-16'>
//             <div name='container' className=' grid sm:grid-cols-1 md:grid-cols-2 gap-4 py-10'>
//                 <div className='border-specialBorder border-8 rounded-2xl duration-200 scale-100 mx-auto bg-yellowPastel text-black font-signature'>
//                     <div className=' mx-8 my-4'>
//                         <h1 className='text-xl sm:text-3xl font-bold mb-4 '>What is Sprout lands ?</h1>
//                         <p className=' text-base sm:text-lg font-poppin mb-8'>This is a simple cute 16-bit pixel art farming asset pack with animals, farming, and many other tiles in pastel colors.</p>
//                         <h2 className='text-xl sm:text-2xl font-bold mb-4 '>&gt; Basic Pack : </h2>
//                         <p className=' text-base sm:text-lg font-poppin mb-8'>Includes Grass and water tiles, simple character animations, and many other things.</p>
//                         <h2 className='text-xl sm:text-2xl font-bold mb-4 '>&gt; Premium Pack : </h2>
//                         <p className=' text-base sm:text-lg font-poppin mb-8'>Includes Everything from the free basic pack plus much more ( Early version available )</p>
//                     </div>
//                 </div>
//                 <div className='border-specialBorder border-8 rounded-2xl bg-yellowPastel text-black font-signature'>
//                     <Slide duration={1200}>
//                         {slideImages.map((slideImage, id)=> (
//                         <div key={id} id="slide-container">
//                             <div className='bg-no-repeat' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, paddingBottom: slidePaddingBottom }}>
//                                 <span className='text-white' style={spanStyle}>{slideImage.caption}</span>
//                             </div>
//                         </div>
//                         ))} 
//                     </Slide>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GamePreview