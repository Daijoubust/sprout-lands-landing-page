import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { uiImages } from '../constants/UiImages';

const UiPreviewTest = () => {

    const divStyle = {
        height: '13rem' ,
        width: 'auto'/*430px */,
        backgroundSize: 'contain',
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

    <div className='h-auto w-screen pb-20 p-6'>
        <div name='container' className='max-w-screen-lg mx-auto justify-center items-center h-auto w-auto lg:px-4'>
            <div className="border-specialBorder border-8 rounded-2xl duration-200 scale-100 mx-auto gap-4 mb-5 bg-yellowPastel text-black font-signature justify-center ">
                <div className=' mx-8 my-4'>
                    <h1 className='text-2xl sm:text-3xl font-bold '>Sprout Lands UI Pack</h1>
                    <p className=' text-lg py-4 font-poppin'>Create a Cute pastel farm With plants, pets, and friends ^^</p>
                </div>
            </div>
            <div className="border-specialBorder border-8 rounded-2xl duration-200 scale-100 mx-auto gap-4 h-56 bg-yellowPastel text-black font-signature justify-center">
                <Slide duration={2500}>
                {uiImages.map((uiImage, id)=> (
                    <div key={id}>
                        <div className='bg-no-repeat object-center' style={{ ...divStyle, 'backgroundImage': `url(${uiImage.url})` }}>
                            <span className=' rounded-none text-white' style={spanStyle}>{uiImage.caption}</span>
                        </div>
                    </div>
                ))} 
                </Slide>    
            </div>
        </div>
    </div>
    )
}

export default UiPreviewTest