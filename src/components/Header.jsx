import React, { useState } from 'react'
import Skin from '../assets/logo2.png'
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(true)

  return (
    <div className='p-[24px] flex'>
        <div className='flex items-center flex-1 space-x-2'>
            <img
            className='w-[40px] h-[40px]'
            src={Skin}
            alt=''
            />
            <span className='font-semibold'>SkinCare</span>
        </div>

        <div className='flex gap-[32px] items-center justify-center'>

            <div>
                <MenuIcon />
            </div>

            <div className=''>
                <ul className='flex gap-[32px] font-medium list-none'>
                    <li className='list'>Collections</li>
                    <li className='list'>Brands</li>
                    <li className='list'>New</li>
                    <li className='list'>Sales</li>
                    <li className='list'>ENG</li>
                </ul>
            </div>

            <input 
            className='w-[200px] focus:outline-black hover:outline-white placeholder:text-gray-700/30
            shadow-md rounded-lg p-1 transition-all duration-700 ease-in-out h-[70%]'
            type='text' 
            placeholder='Search'
            />     
            <ShoppingBagRoundedIcon className='w-[24px] h-[24px] cursor-pointer' />
        </div>
    </div>
  )
}
