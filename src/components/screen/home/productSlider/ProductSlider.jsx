"use client"
import ProductsliderCard from '@/components/productSliderCard/ProductsliderCard';
import React from 'react'
import Slider from "react-slick";
import image1 from "@/assets/images/products/ipd2.webp"
import image2 from "@/assets/images/products/airBuds.webp"
import image3 from "@/assets/images/products/samsung-phone.webp"
import image4 from "@/assets/images/products/MackBook.webp"
const productData = [{
    index: 0,
    bgColor: "bg-white",
    img: image1,
    title: "Popular Products",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    buttonClass: "border-black text-black hover:text-white",
    buttonLink: "#"
},
{
    index: 1,
    bgColor: "bg-[#F9F9F9]",
    img: image2,
    title: "Popular Products",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    buttonClass: "border-black text-black hover:text-white",
    buttonLink: "#"
},
{
    index: 2,
    bgColor: "bg-[#EAEAEA]",
    img: image3,
    title: "Popular Products",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    buttonClass: "border-black text-black hover:text-white",
    buttonLink: "#"
},
{
    index: 3,
    bgColor: "bg-[#2C2C2C]",
    img: image4,
    title: "Popular Products",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    buttonClass: "",
    buttonLink: "#"
},
{
    index: 4,
    bgColor: "bg-gray-200",
    img: image3,
    title: "Popular Products",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    buttonClass: "border-black text-black hover:text-white",
    buttonLink: "#"
}
];



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
                        productData.map((item, index) => (
                            <ProductsliderCard key={index} index={index} item={item} />

                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default ProductSlider
