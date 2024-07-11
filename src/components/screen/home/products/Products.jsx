"use client"
import EmptyCard from '@/components/productCard/EmptyCard';
import ProductCard from '@/components/productCard/ProductCard';
import React, { useState } from 'react'

const Products = () => {
    const [current, setCurrent] = useState(1);
  return (
    <section className='py-[56px]'>
      <div className="container">
        {/* product heaer  */}
        <div className="">
            <ul className='flex items-center gap-8'>
                <li onClick={()=>setCurrent(1)} className={`lg:text-lg font-medium leading-8  cursor-pointer border-b-2 text-[16px] ${current===1? "border-black text-black":"text-secondary border-transparent"}`}>New Arrival</li>
                <li onClick={()=>setCurrent(2)} className={`lg:text-lg font-medium leading-8 cursor-pointer border-b-2 text-[16px] ${current===2? "border-black text-black":"border-transparent text-secondary"}`}>Bestseller</li>
                <li onClick={()=>setCurrent(3)} className={`lg:text-lg font-medium leading-8 cursor-pointer border-b-2 text-[16px] ${current===3? "border-black text-black":"border-transparent text-secondary"}`}>Featured Products</li>
            </ul>
        </div>
        {/* product body  */}
        <div className="mt-8">
            {/* new Arrival  */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                { current === 1 &&
                    Array.from({length:8}).map((_,i)=>(
                        <ProductCard key={i} />
                    ))
                }
                { current === 2 &&
                    Array.from({length:8}).map((_,i)=>(
                        <EmptyCard key={i} name={"Bestseller product coming soon"}/>
                    ))
                }
                { current === 3 &&
                    Array.from({length:8}).map((_,i)=>(
                        <EmptyCard key={i} name={"Featured product coming soon"}/>
                    ))
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Products
