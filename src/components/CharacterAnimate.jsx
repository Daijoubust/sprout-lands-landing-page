import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { animationImages } from '../constants/CharacterAnimation';

const CharacterAnimate = () => {

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

    const animationList = [
        {
            id: 1,
            caption: 'Idle animations '
        },        {
            id: 2,
            caption: 'Walking animations '
        },        {
            id: 3,
            caption: 'Running animations '
        },        {
            id: 4,
            caption: 'Tilling dirt animations '
        },        {
            id: 5,
            caption: 'Chopping animations '
        },        {
            id: 6,
            caption: 'Watering animations '
        },
    ]

    return (
        <div className='w-screen h-auto pb-20 p-6'>
            <div name='container' className='max-w-screen-lg mx-auto justify-center items-center h-auto w-auto lg:px-4'>
                <div className='border-specialBorder border-8 rounded-2xl duration-200 scale-100 mx-auto gap-4 h-56 bg-yellowPastel text-black font-signature justify-center'>
                    <Slide duration={3000}>
                            {animationImages.map((animationImage, id)=> (
                                <div key={id}>
                                    <div className='bg-no-repeat object-center' style={{ ...divStyle, 'backgroundImage': `url(${animationImage.url})` }}>
                                        <span className=' text-white' style={spanStyle}>{animationImage.caption}</span>
                                    </div>
                                </div>
                            ))} 
                    </Slide>
                </div>
                <div className='border-specialBorder border-[10px] rounded-2xl duration-200 scale-100 mx-auto w-96 md:w-full bg-yellowPastel text-black font-signature mr-32 mt-5'>
                    <div className=' mx-8 my-4'>
                        <h1 className='text-2xl sm:text-3xl font-bold '>Character animations</h1>
                        <p className=' text-lg py-4 font-poppin'>The premium pack includes 6 different kinds of animations all in 4 different directions so 24 animations in total ^^</p>
                        <ul>
                        {animationList.map(({id,caption}) => (
                            <li key={id} className=' list-disc ml-5 font-poppin'>{caption}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterAnimate