import React , { useState , useEffect } from 'react'
import logoImage from '../assets/game-logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { links } from '../constants/NavBar';

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const [screenWidth , setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isSmallScreen = screenWidth < 1024;
    //window.screen.availWidth

    return (
        <div className='navbar z-50 block w-screen lg:flex lg:justify-between lg:items-center px-5 text-black sticky top-0 bg-white bg-opacity-25'>            
            <div className='flex justify-between items-center w-full lg:w-auto'>
                <div className={` ${isSmallScreen ? 'h-14 w-18' : ''}`}>
                    <img
                    className={`lg:h-20 lg:w-30 p-3 duration-200 cursor-pointer hover:scale-105 ${isSmallScreen ? "w-full h-full " : "w-full h-full"}`}
                    src={logoImage}
                    alt="Logo"
                    />
                </div>
                <div className=' flex lg:hidden'>
                    <button
                        className='flex justify-center items-center h-10 w-10 text-white'
                        onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className=' hover:text-gray-500' size={30}/> : <FaBars className=' hover:text-gray-500' size={30}/>}
                    </button>
                </div>
            </div>
                <ul className={`lg:flex lg:items-center ${menuOpen ? 'block lg:flex-row flex-row bg-transparent duration-300' : 'hidden'}`}>
                {links.map(({id,link,href}) => (
                    <li
                    key={id} 
                    className=' font-medium font-signature text-xl text-center px-4 py-6 
                    cursor-pointer capitalize text-navText drop-shadow-[0_5px_5px_rgba(250,250,250,1)]
                    hover:scale-125 duration-200'>
                    <a href={href}                     
                    target='_blank'
                    rel='noreferrer'>
                    {link}
                    </a>
                    <Link to={link} Daduration={600}></Link>
                    </li>
                ))}
                </ul>
        </div>
    )
}

export default NavBar



 // const [nav, setNav] = useState(false);

            {/*<div 
                onClick={() => setNav(!nav)} 
                className=' cursor-pointer pr-4 z-10 text-gray-500 lg:hidden'>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {nav && (
                <ul className=' inline-block items-center absolute top-0 left-0 h-full w-screen bg-specialBg text-gray-500'>
                {links.map(({id,link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl '><Link onClick={() => setNav(!nav)} to={link} smooth duration={600}>{link}</Link></li>
                ))}
                </ul>
                )}*/}