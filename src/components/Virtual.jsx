import React from 'react'
import Shades from '../assets/shades (1).png'
import ReactCompareImage from 'react-compare-image'
import Before from '../assets/skin3.jpg'
import After from '../assets/skin4.jpg'

export const Virtual = () => {
  return (
    <div className='mt-[6rem] mb-[6rem] p-[2rem] flex justify-center items-center space-x-[250px]'>
        <div className='flex flex-col gap-y-[16px] relative'>
            <span className='text-lg uppercase block font-bold'>Virtual Try-On</span>
            <span className='text-base uppercase block w-[320px] font-semibold tracking-wide leading-relaxed'>Never Buy the wrong <br></br> shade Again!</span>
            <span className='text-sm font-bold tracking-wider'>Try Now</span>
            <img
            className='w-[200px] h-[200px] absolute -bottom-40'
            src={Shades} 
            alt=''
            />
        </div>

        <div>
            <div className='w-[300px] '>
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </div>
        </div>
    </div>
  )
}
