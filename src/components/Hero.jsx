import React from 'react'
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Beauty from '../assets/BlackHat.png'
import {motion} from 'framer-motion'

export const Hero = () => {

    const transition = { duration: 3, type: "spring"}

  return (
    <div className='py-[32px] px-[24px] grid grid-cols-3'>

        <div className='grid grid-rows-1 gap-y-20'>
            <span className='text-2xl uppercase min-w-min w-full font-bold block leading-8 tracking-wider'>skin <br></br> protection <p></p> cream</span>

            <div className='flex flex-col min-w-min text-black space-y-2'>
                <span className='font-extrabold text-3xl leading-snug tracking-wider'>What's <br></br> in <br></br> vogue</span>
                <span className='block text-base font-semibold text-black leading-relaxed tracking-wider'>
                    {" "}
                    As the saying goes, less is more! When we <br></br> reduce the number of 
                    products used, we <br></br> ultimately reduce the amount of waste <br></br> generated. 
                </span>
            </div>

        </div>

        <div className='flex items-baseline justify-center relative'>
            <motion.div 
            initial={{bottom: "2rem"}}
            whileInView={{bottom: "0rem"}}
            transition={transition}
            className='w-[430px] h-[430px] bg-gradient-to-b from-[#508549] rounded-full -z-10 absolute bottom-0'></motion.div>
            <motion.img
            transition={transition}
            initial={{bottom: "-2rem"}}
            whileInView={{bottom: "0rem"}}
            className='w-[480px] absolute bottom-0 z-10'
            src={Beauty}
            alt=''
            />
            <motion.div 
            transition={transition}
            initial={{right: "4%"}}
            whileInView={{right: "-29%"}}
            className='absolute bottom-[20%] -right-[29%] flex gap-[16px] items-center'>
                <div className='rounded-full border-[3px] border-solid border-black
                    w-[35px] h-[35px] items-center flex bg-white justify-center'>
                <ShoppingBagRoundedIcon />
                </div>

                <div className='flex space-x-2 items-center bg-white p-2.5 font-semibold
                rounded-lg shadow-lg'>
                    <span className='text-black text-base tracking-widest'>Best Signup <br></br> Deals</span>

                    <div className='rounded-full border-[3px] border-solid border-[#508549]
                    w-[22px] h-[22px] items-center flex justify-center'>
                        <ArrowForwardIcon className='p-[5px]' />
                    </div>
                </div>
            </motion.div>      
        </div>

        <div className='space-y-28'>
            <div className='flex flex-col items-end'>
                <span className='font-extrabold text-3xl'>1.7m</span>
                <span className='text-base font-semibold text-black leading-relaxed tracking-wider'>Monthly Traffic</span>
            </div>

            <div className='flex flex-col items-end'>
                <span className='font-extrabold text-3xl'>200k</span>
                <span className='text-base font-semibold text-black leading-relaxed tracking-wider'>Happy Customers</span>
            </div>
        </div>
    </div>
  )
}
