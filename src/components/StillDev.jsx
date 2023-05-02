import React from 'react'
import stillDev from '../assets/stilldev.gif';

const StillDev = () => {
    return (
        <div 
        className='h-auto w-screen pb-20 p-6'>
            <div 
            name='container' 
            className='max-w-screen-lg mx-auto justify-center items-center
            h-auto w-auto lg:px-4'>
                <div className="border-specialBorder border-8 rounded-2xl w-full bg-specialBg text-black font-signature ">
                    <div className="mx-8 my-4">
                    <h1 className="text-2xl sm:text-3xl font-bold ">
                        Premium version license (paying at least{' '}
                        <b className="font-poppin">$3.99</b>) :
                    </h1>
                    <p className="text-lg py-4 font-poppin">
                        This asset pack can be used in any commercial or non-commercial
                        project, you may modify the assets as you wish. This asset pack
                        can't be resold or redistributed even if modified.
                    </p>
                    <br />
                    <h1 className="text-2xl sm:text-3xl font-bold ">
                        Free version license :
                    </h1>
                    <p className="text-lg py-4 font-poppin">
                        This asset pack can be used in any non-commercial project, you may
                        modify the asset as you wish. This asset pack can't be used in any
                        commercial project, resold/redistributed or offered for free.
                    </p>
                    </div>
                </div>
            </div>
            <div 
            name='container' 
            className='max-w-screen-lg mx-auto justify-center items-center
            h-auto w-auto lg:px-4 pt-5'>
                <div>
                    <img 
                    src={stillDev} 
                    alt="gamePreview" 
                    className=' border-specialBorder bg-yellowPastel border-8 p-2 rounded-2xl scale-[0.7] hover:scale-[0.75] duration-200 w-full'/>
                </div>
            </div>
        </div>
    )
}

export default StillDev