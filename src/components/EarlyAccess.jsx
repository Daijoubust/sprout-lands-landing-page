import React from 'react'
import stillDev from '../assets/stilldev.gif'

const EarlyAccess = () => {
    return (
        <div className='h-screen w-full pl-20 sm:mt-24'>
            <div name='container' className='max-w-screen-lg mx-auto flex flex-col
            px-4 md:flex-row ml-48 w-screen'>
                <img src={stillDev} alt="stillDev" className=' bg-specialBg border-specialBorder border-[25px] rounded-2xl hover:scale-[1.1] duration-200 scale-100'/>
            </div>
        </div>
    )
}

{/*     height: '630px',
        width: '430px',
        backgroundSize: 'contain',
        backgroundPosition: 'center', */}

export default EarlyAccess