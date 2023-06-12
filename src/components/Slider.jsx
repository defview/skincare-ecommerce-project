import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {SliderProducts} from '../data/products'

export const Slider = () => {
  return (
    <div className=''>
        <Swiper
        className='w-[70%] h-[12rem]'
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        >
            {SliderProducts.map((slide, i) => (
                <SwiperSlide
                className='bg-white flex rounded-lg py-3 px-11 overflow-hidden relative
                box-border'
                >
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col'>
                            <span className='text-base font-bold tracking-wide'>{slide.name}</span>
                            <span className='"text-ellipsis overflow-hidden w-full max-w-[400px] text-sm font-semibold italic'>{slide.detail}</span>
                        </div>

                        <span className='text-2xl font-bold'>{slide.price}$</span>
                        <p className='px-[6px] py-[3px] text-base font-medium tracking-wide
                        rounded-xl border-2 border-black w-fit'>Shop now</p>
                    </div>

                        <img 
                        className='-rotate-[20deg] absolute right-0 w-[40%] h-[40%] bottom-[10%]'
                        src={slide.img}
                        alt='product'
                        />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}
