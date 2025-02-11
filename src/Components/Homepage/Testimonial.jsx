import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {TestimonialData} from './TestimonialData';

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        centerPadding: '40px',
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint:767,
              settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
     <div className="section-heading text-center mb-10">
                    <h2 className='lg:text-[44px] md:text-[36px] text-[30px] font-bold mb-4'>What Our Customers Say About Us </h2>
                  </div>
    <Slider {...settings}>
        {TestimonialData.map((value, index)=>{
            return(
                <TestimonialCardGunction itemtext = {value}/>
            )
        })}
     
    </Slider>
    </>
  )
}

export default Testimonial

function TestimonialCardGunction({itemtext}){
    return(
        <div className="testi-card border border-[#CACACA] rounded-2xl lg:p-8 p-5 lg:mx-10 md:mx-5">
            <div className="card-head flex gap-5 items-center mb-5">
                <img src={itemtext.image} alt="" />
                <div className="title-head  ">
                    <h4 className='text-2xl font-bold mb-2'>{itemtext.title}</h4>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
            <p className='text-xl'>{itemtext.body}</p>
        </div>
    )
}