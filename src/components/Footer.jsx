import React from 'react'
import Skin from '../assets/logo2.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
import SecurityIcon from '@mui/icons-material/Security';

export const Footer = () => {
  return (
    <div className='w-full mt-[80px]'>
        <hr className='w-full h-0.5 border-none bg-white mt-[16px] mb-9' />

        <div className='flex w-full justify-around'>
            <div className='flex items-start gap-[16px]'>
                <img src={Skin} alt='' className='w-[40px] h-[40px]' />
                <span className='font-semibold'>SkinCare</span>
            </div>

            <div className='flex flex-col gap-[16px]  w-full max-w-[192px]'>
                <div className='flex flex-col w-full text-base tracking-wider 
                leading-normal gap-[16px] italic'>
                    <span className='font-semibold'>Contact us</span>
                    <span className='flex gap-[16px] items-center'>
                        <LocationOnIcon className='w-[25px]' />
                        <p className='cursor-pointer font-medium text-sm not-italic'>111 bayview miami, FL 2089</p>
                    </span>

                    <span className='flex gap-[16px] items-center'>
                        {" "}
                        <PhoneIcon className='w-[25px]' />
                        <a 
                        href='tek: 376-425-9276'
                        className='cursor-pointer font-medium text-sm not-italic'>376-425-9276</a>
                    </span>
                    
                    <span className='flex gap-[16px] items-center'>
                        <AllInboxIcon className='w-[25px]' />
                        <p className='cursor-pointer font-medium text-sm not-italic'>support@skincare.com</p>
                    </span>
                </div>
            </div>

            <div className='flex flex-col gap-[16px]  w-full max-w-[192px]'>
                <div className='flex flex-col w-full text-base tracking-wider 
                leading-normal gap-[16px] italic'>
                    <span className='font-semibold'>Account</span>
                    <span className='flex gap-[16px] items-center'>
                        <LoginIcon className='w-[25px]' />
                        <p className='cursor-pointer font-medium text-sm not-italic'>Signin</p>
                    </span>
                </div>
            </div>

            <div className='flex flex-col gap-[16px]  w-full max-w-[192px]'>
                <div className='flex flex-col w-full text-base tracking-wider 
                leading-normal gap-[16px] italic'>
                    <span className='font-semibold'>Company</span>
                    <span className='flex gap-[16px] items-center'>
                        <InfoIcon className='w-[25px]' />
                        <p className='cursor-pointer font-medium text-sm not-italic'>About us</p>
                    </span>
                </div>
            </div>

            <div className='flex flex-col gap-[16px]  w-full max-w-[192px]'>
                <div className='flex flex-col w-full text-base tracking-wider 
                leading-normal gap-[16px] italic'>
                    <span className='font-semibold'>Resorces</span>
                    <span className='flex gap-[16px] items-center'>
                        <SecurityIcon className='w-[25px]' />
                        <p className='cursor-pointer font-medium text-sm not-italic'>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>

        </div>
        <div className='flex flex-col w-full items-center text-sm mt-5'>
            <span>Copyright &#169;2022 by SkinCare, Inc.</span>
            <span>All rights reserved</span>
        </div>
    </div>
  )
}
