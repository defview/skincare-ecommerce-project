import React from 'react'
import { useState } from 'react'
import Plane from '../assets/plane.png'
import { ProductsData } from '../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'


export const Products = () => {
    const [parent] = useAutoAnimate()
    const [MenuProducts, setMenuProducts] = useState(ProductsData)

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }

  return (
    <div className='p-[3.2px] relative flex flex-col gap-[32px] items-center
    justify-center'>
        <img 
        className='w-[250px] absolute left-[22%] -top-[30px]'
        src={Plane} 
        alt='' 
        />
        <h1 className='font-bold text-3xl tracking-wider leading-loose'>Our Featured Products</h1>

        <div className='grid w-[70%] grid-cols-2 col-auto p-4'>
            <ul className='list-none flex flex-col space-y-4 font-medium text-lg tracking-wide leading-relaxed'>
                <li onClick={() => setMenuProducts(ProductsData)} className='menu'>All</li>
                <li onClick={() => filter("skin care")} className='menu'>Skin Care</li>
                <li onClick={() => filter("conditioner")} className='menu'>Conditioners</li>
                <li onClick={() => filter("foundation")} className='menu'>Foundations</li>
            </ul>


        <div 
        ref={parent}
        className='grid grid-cols-4 auto-cols-auto min-w-max -ml-64
        h-[370px] overflow-y-scroll scroll-smooth gap-4 justify-between'>
            {
                MenuProducts.map((product, i) => (
                    <div className='w-[240px] h-[150px] bg-white relative overflow-hidden
                    p-[1rem] flex rounded-xl space-x-9'>
                        <div>
                            <div className='block mb-1.5'>
                                <span className='text-xl font-bold tracking-wider'>{product.name} <br></br></span>
                                <span className='text-base font-medium tracking-wide'>{product.detail}</span>
                            </div>
                            <span className='text-2xl font-extrabold'>{product.price}$</span>
                            <div className='text-base font-normal border border-black
                            rounded-full px-1 py-1 cursor-pointer hover:bg-black hover:text-white
                            transition-all ease-in-out duration-700 mt-1'>Buy Now</div>
                        </div>

                        <img 
                        src={product.img} 
                        alt="" 
                        className='top-[48px] w-[96px] h-[176px] -rotate-[20deg]' 
                        />
                    </div>
                ))
            }
        </div>
        </div>

    </div>
  )
}
