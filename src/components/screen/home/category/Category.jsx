"use client"
import CategoryCard from '@/components/categoryCard/CategoryCard'
import { categoryData } from '@/data/Category'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import './Category.css'

const Category = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
       nextArrow:<MdOutlineArrowForwardIos />,
        prevArrow: <MdOutlineArrowBackIosNew  />
    };
     const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} style={{ /* Your CSS styles for Next Arrow */ }}>
        <MdOutlineArrowForwardIos onClick={onClick} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} style={{ /* Your CSS styles for Previous Arrow */ }}>
        <MdOutlineArrowBackIosNew onClick={onClick} />
      </div>
    );
  };

    return (
        <section className='py-[80px] bg-[#FAFAFA]'>
            <div className="container">
                <div className="">
                    <h2 className='text-2xl leading-8 text-black font-bold'>Browse By Category</h2>
                </div>
                <div className="mt-8">
                    <Slider {...settings}>
                        <div className="">
                            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-3">
                                {
                                    categoryData.map((item) =>
                                        <CategoryCard img={item.image} name={item.name} key={item.id} />
                                    )
                                }
                            </div>
                        </div>
                        <div className="">
                            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-3">
                                {
                                    categoryData.map((item) =>
                                        <CategoryCard img={item.image} name={item.name} key={item.id} />
                                    )
                                }
                            </div>
                        </div>
                        <div className="">
                            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-3">
                                {
                                    categoryData.map((item) =>
                                        <CategoryCard img={item.image} name={item.name} key={item.id} />
                                    )
                                }
                            </div>
                        </div>
                    </Slider>

                </div>
            </div>
        </section>
    )
}

export default Category
