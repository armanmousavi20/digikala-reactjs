import React , { useRef, useState } from 'react';
import "./popularbarnds.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import popolarbrandimg1 from "../../img/popularbrandimg1.png"
import popolarbrandimg2 from "../../img/popularbrandimg2.png"
import popolarbrandimg3 from "../../img/popularbrandimg3.png"
import popolarbrandimg4 from "../../img/popularbrandimg4.png"
import popolarbrandimg5 from "../../img/popularbrandimg5.png"
import popolarbrandimg6 from "../../img/popularbrandimg6.png"
import popolarbrandimg7 from "../../img/popularbrandimg7.png"
import popolarbrandimg8 from "../../img/popularbrandimg8.png"
import popolarbrandimg9 from "../../img/popularbrandimg9.png"
import popolarbrandimg10 from "../../img/popularbrandimg10.png"
import popolarbrandimg11 from "../../img/popularbrandimg11.png"
import popolarbrandimg12 from "../../img/popularbrandimg12.png"
import popolarbrandimg13 from "../../img/popularbrandimg13.png"
import popolarbrandimg14 from "../../img/popularbrandimg14.png"

// import Swiper core and required modules
import SwiperCore, { Pagination,Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


const PopularBrands = () =>{
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
  }

  const prepend = () => {
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  }

    const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  }

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  }
	return(<div className="popularbrands-container">
	          <div className="popularbrands-header">
	           	  <h1> محبوبترین برندها </h1>
	           	  <i class="fa fa-star" aria-hidden="true"></i>
	          </div>
              <div className="popularbrands-slider"> 
	            <Swiper onSwiper={setSwiperRef} slidesPerView={6} 
		                centeredSlides={false} spaceBetween={3} 
		                 navigation={true} className="mySwiper">
                        
                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg1}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg2}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg3}  />
                             </a>   
                          </SwiperSlide>

                         <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg4}  />
                             </a>   
                          </SwiperSlide>

                           <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg5}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg6}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg7}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg8}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg9}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg10}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg11}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg12}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg13}  />
                             </a>   
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide popularbarnds-slider-item">
                             <a href="#">                          
                                <img src={popolarbrandimg14}  />
                             </a>   
                          </SwiperSlide>
                      </Swiper>    
              </div>                                                            
	       </div>);
}

export default PopularBrands;