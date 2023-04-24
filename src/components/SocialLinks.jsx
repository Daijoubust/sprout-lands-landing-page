import React from 'react'
import { FaGithub} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {MdOutlineAttachMoney} from 'react-icons/md'
import {MdOutlineDomainVerification} from 'react-icons/md'

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                Official <MdOutlineDomainVerification size={30}/>
                </>
            ),
            href: 'https://cupnooble.itch.io/sprout-lands-asset-pack',
            style : 'rounded-tl-md'
        },
        {
            id:2,
            child: (
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Daijoubust',
        },
        {
            id:3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:test@gamil.com',
        },
        {
            id:4,
            child: (
                <>
                Donate <MdOutlineAttachMoney size={30}/>
                </>
            ),
            href: '/src/assets/resume.pdf',
            style : 'rounded-bl-md',
            download: true,
        },
        
    ]
    return (
        
        <div className='hidden lg:flex flex-col top-[35%] right-0 fixed'>
            <ul>

                {links.map(({id, child,href,style,download}) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 mr-[-30px] hover:ml-[-10px] bg-navText hover:rounded-md duration-300' + ' ' + style}>
                    <a 
                    href={href}
                    className='flex justify-between items-center w-full text-white font-signature'
                    download={download}
                    target='_blank'
                    rel='noreferrer'
                    >
                        {child}
                    </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks