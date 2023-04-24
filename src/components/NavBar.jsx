import React , { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '../assets/game-logo.png'
import { Link } from 'react-scroll';
import 'animate.css';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'register'
        },
        {
            id: 3,
            link: 'game-info'
        },
        {
            id: 4,
            link: 'download'
        },
        {
            id: 5,
            link: 'about us'
        },
        {
            id: 6,
            link: 'contact'
        },
    ]

    return (
        <div className='navbar z-50 block justify-between items-center h-full w-52 px-5 text-black sticky top-0'>            
            <div className=''>
                <img className=' pt-5 hover:scale-125 duration-200 cursor-pointer' src={logoImage} alt="" width={200} height={100}/>
            </div>
            <br/>
            <div className=' border-l-4 border-specialLine hover:border-l-8 duration-300'>
                <ul className=' hidden md:block'>
                {links.map(({id,link}) => (
                    <li key={id} className=' font-medium text-center font-signature text-2xl px-4 py-6 cursor-pointer capitalize 
                    text-navText drop-shadow-[0_5px_5px_rgba(250,250,250,1)] 
                    hover:scale-125 duration-200'>
                    <Link to={link} smooth duration={600}>{link}</Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default NavBar

            {/*<div 
                onClick={() => setNav(!nav)} 
                className=' cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {nav && (
                <ul className=' inline-block items-center absolute top-0 left-0 h-full w-screen bg-specialBg text-gray-500'>
                {links.map(({id,link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl '><Link onClick={() => setNav(!nav)} to={link} smooth duration={600}>{link}</Link></li>
                ))}
                </ul>
                )}*/}