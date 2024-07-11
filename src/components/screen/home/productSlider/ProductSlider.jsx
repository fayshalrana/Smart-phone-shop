"use client"
import ProductsliderCard from '@/components/productSliderCard/ProductsliderCard';
import React from 'react'
import Slider from "react-slick";
const ProductSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <section className='max-w-[1440px] mx-auto'>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        Array.from({length:4}).map((_, index) => (
                            <ProductsliderCard key={index} index={index}/>

                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default ProductSlider
