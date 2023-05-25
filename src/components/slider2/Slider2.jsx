import React , { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./slider2.css";

import img1 from "../../img/slider2Left.png"; 
import slider2img1 from "../../img/slider2img1.jpg"; 
import slider2img2 from "../../img/slider2img2.jpg"; 
import slider2img3 from "../../img/slider2img3.jpg"; 
import slider2img4 from "../../img/slider2img4.jpg"; 
import slider2img5 from "../../img/slider2img5.jpg"; 
import slider2img6 from "../../img/slider2img6.jpg"; 
import slider2img7 from "../../img/slider2img7.jpg"; 
import slider2img8 from "../../img/slider2img8.jpg"; 
import slider2img9 from "../../img/slider2img9.jpg"; 
import { addToCart } from '../../features/shoppingcart/shoppingcartSlice';
import { useDispatch } from "react-redux";

// import Swiper core and required modules
import SwiperCore, { Pagination,Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


const Slider2 = () =>
{
     const dispatch = useDispatch();
     // add redux
     const handleAddToCart = (data) => {
          dispatch(addToCart({
                 ...data,      
                 quantity: 1
          }))
      }   

  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

	return(<div className="slider2-container" id="amazinproposal"> 
		        <Swiper onSwiper={setSwiperRef} slidesPerView={6} 
		                centeredSlides={false} spaceBetween={3} 
		                 navigation={true} className="mySwiper"
                           breakpoints={{
                              1024:{
                                   slidesPerView:6
                              },
                              900:{
                                   slidesPerView:5
                              },
                              768:{
                                   slidesPerView:4
                              },
                              480:{
                                   slidesPerView:3
                              },
                              360:{
                                   slidesPerView:2
                              }                              
                             }}>
                        
                          <SwiperSlide className="SwiperSlide slider2-amizing-proposal" 
                                       style={{ backgroundColor : "#ef4056" }}>
                             <span> 
                                پیشنهاد
                                 <br />
                                 شگفت
                                 <br />
                                 انگیز                                 
                            </span>                             
                             <img src={img1}  />
                             <a href="#"> مشاهده همه  </a>
                          </SwiperSlide>
                        
                        
                          <SwiperSlide className="SwiperSlide" style={{ borderRadius : "0 10px 10px 0" }}
                            onClick={()=>{ 
                                         handleAddToCart({id:1,title:'mobile',price:3000,count:1})
                                        }}>                       

                              <img src={slider2img1} />
                              <span className="SwiperSlide-row1">
                                   <span className="slider2-discount-percent"> 20%   </span>
                                   <span> 120,000 تومان  </span>
                              </span>
                              <span className="SwiperSlide-row2">
                                   <span className="SwiperSlide-row2-span"> 100,000 تومان  </span>
                               </span>                                                            
                          </SwiperSlide>
                          
                          <SwiperSlide className="SwiperSlide"
                                        onClick={()=>{ 
                                                      handleAddToCart({id:2,title:'lab',
                                                                        price:100000,count:1});                                                                        
                                                       }}>                            
                              <img src={slider2img2} />
                              <span className="SwiperSlide-row1">
                                    <span className="slider2-discount-percent"> 20%   </span>
                                    <span> 120,000 تومان  </span>
                              </span>
                              <span className="SwiperSlide-row2">
                                   <span className="SwiperSlide-row2-span"> 100,000 تومان  </span>
                               </span>                               
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide"
                                       onClick={()=>{ 
                                             handleAddToCart({id:3,title:'tablet',price:7000,count:1})
                                                       }}>
                              <img src={slider2img3} />
                              <span className="SwiperSlide-row1">
                                    <span className="slider2-discount-percent"> 20%   </span>
                                    <span> 120,000 تومان  </span>
                              </span>
                              <span className="SwiperSlide-row2">
                                   <span className="SwiperSlide-row2-span"> 100,000 تومان  </span>
                               </span>
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide"
                                       onClick={()=>{ 
                                        handleAddToCart({id:4,title:'watch',price:3000,count:1})
                                       }}
                          >
                              <img src={slider2img4} />
                               <span className="SwiperSlide-row1">
                                    <span className="slider2-discount-percent"> 20%   </span>
                                    <span> 120,000 تومان  </span>
                              </span>
                              <span className="SwiperSlide-row2">
                                   <span className="SwiperSlide-row2-span"> 100,000 تومان  </span>
                               </span>
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide"
                                      onClick={()=>{ 
                                      handleAddToCart({id:5,title:'note11',price:54000,count:1})
                                                       }}>
                              <img src={slider2img5} />
                              <span className="SwiperSlide-row1">
                                    <span className="slider2-discount-percent"> 20%   </span>
                                    <span> 120,000 تومان  </span>
                              </span>
                              <span className="SwiperSlide-row2">
                                   <span className="SwiperSlide-row2-span"> 100,000 تومان  </span>
                               </span>
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide"
                                        onClick={()=>{ 
                                        handleAddToCart({id:6,title:'note8',price:8700,count:1})
                                                       }}>
                              <img src={slider2img6} />
                              <span className="SwiperSlide-row1">
                                    <span className="slider2-discount-percent"> 20%   </span>
                                    <span> 120,000 تومان  </span>
                              </span>
                              <span className="SwiperSlide-row2">
                                   <span className="SwiperSlide-row2-span"> 100,000 تومان  </span>
                               </span>
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide"
                                        onClick={()=>{ 
                                        handleAddToCart({id:9,title:'asus',price:38000,count:1})
                                                       }}>
                              <img src={slider2img7} />
                               <span className="SwiperSlide-row1">
                                    <span className="slider2-discount-percent"> 20%   </span>
                                    <span> 120,000 تومان  </span>
                              </span>
                              <span className="SwiperSlide-row2">
                                   <span className="SwiperSlide-row2-span"> 100,000 تومان  </span>
                               </span>
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide"
                                        onClick={()=>{ 
                                         handleAddToCart({id:9,title:'hp',price:39000,count:1})
                                                       }}>
                              <img src={slider2img8} />
                              <span className="SwiperSlide-row1">
                                    <span className="slider2-discount-percent"> 20%   </span>
                                    <span> 120,000 تومان  </span>
                              </span>
                              <span className="SwiperSlide-row2">
                                   <span className="SwiperSlide-row2-span"> 100,000 تومان  </span>
                               </span>
                          </SwiperSlide>

                          <SwiperSlide className="SwiperSlide"
                                       onClick={()=>{ 
                                       handleAddToCart({id:10,title:'fj',price:30800,count:1})
                                                       }}>
                              <img src={slider2img9} />
                              <span className="SwiperSlide-row1">
                                    <span className="slider2-discount-percent"> 20%   </span>
                                    <span> 120,000 تومان  </span>
                              </span>
                              <span className="SwiperSlide-row2">
                                   <span className="SwiperSlide-row2-span"> 100,000 تومان  </span>
                               </span>
                          </SwiperSlide>

                           <SwiperSlide className="SwiperSlide SwiperSlide-end"
                                        onClick={()=>{ 
                                        handleAddToCart({id:11,title:'sam',price:398000,count:1})
                                                        }}>
                                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                <span>
                                  مشاهده همه 
                                </span>
                          </SwiperSlide>
                </Swiper>

		   </div>)
}

export default Slider2;

