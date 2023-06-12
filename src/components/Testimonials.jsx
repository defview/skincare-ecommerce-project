import React from 'react'
import Beauty from '../assets/bea3.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import { TestimonialsData } from '../data/testimonials'

export const Testimonials = () => {

  return (
    <div className='flex flex-col justify-center items-center px-[24px] py-[32px] mt-20 space-y-8'>
        <div className='grid items-center w-[100%] grid-cols-3'>
            <div className='flex flex-col space-y-5'>
                <span className='text-2xl font-bold tracking-wider uppercase'>Top Rated</span>
                <span className='block text-lg font-medium tracking-wider leading-relaxed '>Drink a bunch of water and get<br></br> facials regularly. I take care of my skin.”<br></br> — Angela Bassett</span>          
            </div>
            
            <div className='flex items-baseline justify-center relative'>
                <div className='w-[430px] h-[430px] bg-gradient-to-b from-[#FFE87C] rounded-full -z-10 absolute bottom-0'></div>
                <img 
                src={Beauty} alt='' 
                className='w-[23rem]' 
                />
            </div>

        <div className='flex flex-col space-y-2 text-right'>
            <span className='text-2xl font-bold tracking-wider'>200K</span>
            <span className='block text-lg font-medium tracking-wider leading-relaxed '>Happy Customers with us</span>
        </div>
        </div>
        
        <p className='font-bold text-2xl uppercase tracking-wider'>Reviews</p>

        <div className='w-full'>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className='p-[2rem] '
            >
                {
                    TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide>
                            <div className='flex flex-col relative bg-white rounded-lg
                            items-center justify-center p-[16px] gap-x-[16px] shadow-xl space-y-4'>
                                <img 
                                className='absolute w-[48px] h-[48px] -top-[25px] left-[45%] rounded-full'
                                src={testimonial.image} 
                                alt="" 
                                />
                                <span className='items-center text-base font-medium tracking-wide leading-relaxed'>{testimonial.comment}</span>
                                <hr className='h-[1px] w-[80%] bg-black border-solid' />
                                <span className='items-center text-lg font-bold tracking-wider'>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}
