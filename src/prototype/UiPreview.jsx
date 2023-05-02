import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { uiImages } from '../constants/UiImages';

const UiPreview = () => {

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
        <div className='h-screen w-full pl-20 sm:py-20'>
            <div name='container' className='max-w-screen-lg mx-auto inline-block
            items-center justify-center h-full px-4 md:flex-row ml-44 w-screen'>
                <div className='border-specialBorder border-[10px] rounded-2xl scale-100 mx-auto md:w-full sm:h-auto bg-specialBg text-black font-signature justify-center'>
                    <div className=' mx-8 my-4'>
                        <h1 className='text-2xl sm:text-3xl font-bold '>Sprout Lands UI Pack</h1>
                        <p className=' text-lg py-4 font-poppin'>Create a Cute pastel farm With plants, pets, and friends ^^</p>
                    </div>
                </div>
                <div className='border-specialBorder border-[10px] rounded-2xl scale-150 mx-auto md:w-96 h-auto bg-specialBg text-black font-signature justify-center mt-20'>
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
    
    /*<div className='h-screen w-full pl-20 sm:my-20'>
            <div name='container' className='max-w-screen-lg mx-auto inline-block
            items-center justify-center h-full px-4 md:flex-row ml-48 w-screen'>
                <div className='border-specialBorder border-[10px] rounded-2xl duration-200 scale-100 w-96 md:w-full bg-specialBg text-black font-signature mr-32'>
                    <div className=' m-8'>
                        <h1 className='text-2xl sm:text-3xl font-bold '>Premium version license (paying at least <b className='font-poppin'>$3.99</b>) :</h1>
                        <p className=' text-lg py-4 font-poppin'>This asset pack can be used in any commercial or non-commercial project, you may modify the assets as you wish.  This asset pack can't be resold or redistributed even if modified.</p>
                        <br/>
                        <h1 className='text-2xl sm:text-3xl font-bold '>Free version license :</h1>
                        <p className=' text-lg py-4 font-poppin'>This asset pack can be used in any non-commercial project, you may modify the asset as you wish. This asset pack can't be used in any commercial project, resold/redistributed, even if modified

                        Please Credit : Cup Nooble or use 
                        <a className=' underline underline-offset-5 text-neutral-500 font-bold hover:' href="https://cupnooble.itch.io/">(this link)</a>
                        </p>
                        <br/>
                        <h2 className='text-xl sm:text-2xl font-semibold '>&gt; Premium Pack : </h2>
                        <p className=' text-lg py-4 font-poppin'>Includes Everything from the free basic pack plus much more ( Early version available )</p>
                    </div>
                </div>
            </div>
    </div>*/
    )
}

export default UiPreview