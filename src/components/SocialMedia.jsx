import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

//Social media link pages

const SocialMedia = () => {
    return (
        <div className='h-screen w-full pl-20 sm:py-20'>
            <div name='container' className='max-w-screen-lg mx-auto inline-block
            items-center justify-center h-full px-4 md:flex-row ml-44 w-screen'>
                <div className='border-specialBorder border-[10px] rounded-2xl scale-100 sm:w-96 bg-specialBg text-black font-signature justify-center'>
                    <div className=' mx-8 my-4'>
                        <h1 className='text-2xl sm:text-3xl font-bold '>Social media</h1>
                        <div className=' flex leading-6 items-center'>
                            <p className=' text-lg py-4 font-poppin'>Twitter : </p>
                            <a href="https://twitter.com/Sprout_Lands" rel='noreferrer'><FaTwitterSquare size={50} /></a>
                        </div>
                        <div className=' flex leading-6 items-center'>
                            <p className=' text-lg py-4 font-poppin'>Instagram : </p>
                            <a href="https://www.instagram.com/cup_nooble/?hl=da"><FaInstagram size={50}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia