import ProductCard from '@/components/productCard/ProductCard'
import React from 'react'
import img0 from '@/assets/images/products/Iphone14pro.webp';
import img1 from '@/assets/images/products/camera.webp';
import img2 from '@/assets/images/products/watch.webp';
import img3 from '@/assets/images/products/headset.webp';
import img4 from '@/assets/images/products/watch2.webp';
import img5 from '@/assets/images/products/z-fold.webp';
import img6 from '@/assets/images/products/airbirds.webp';
import img7 from '@/assets/images/products/ipd2.webp';
const phones = [
    {
        img: img0,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
        price: "$3456"
    },
    {
        img: img1,
        name: "Blackmagic Pocket Cinema Camera 6k",
        price: "$3899"
    },
    {
        img: img2,
        name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
        price: "$2998"
    },
    {
        img: img3,
        name: "AirPods Max Silver",
        price: "$1699"
    },
    {
        img: img4,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
        price: "$3456"
    },
    {
        img: img5,
        name: "Blackmagic Pocket Cinema Camera 6k",
        price: "$3899"
    },
    {
        img: img6,
        name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
        price: "$2998"
    },
    {
        img: img7,
        name: "AirPods Max Silver",
        price: "$1699"
    }
];
const RelatedProduct = () => {
  return (
    <section className='py-20'>
      <div className="container">
        <h2 className='text-2xl font-medium leading-8 text-black'>Related Products</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {
            phones.slice(0,4).map((item, index) => (
              <ProductCard key={index} product={item}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default RelatedProduct
