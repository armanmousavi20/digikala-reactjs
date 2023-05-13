import React , { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import './BestSellingProducts.css';

import bestsellingproductsimg1 from "../../img/bestsellingproductsimg1.webp"; 
import bestsellingproductsimg2 from "../../img/bestsellingproductsimg2.webp"; 
import bestsellingproductsimg3 from "../../img/bestsellingproductsimg3.webp"; 
import bestsellingproductsimg4 from "../../img/bestsellingproductsimg4.webp"; 
import bestsellingproductsimg5 from "../../img/bestsellingproductsimg5.webp"; 
import bestsellingproductsimg6 from "../../img/bestsellingproductsimg6.webp"; 
import bestsellingproductsimg7 from "../../img/bestsellingproductsimg7.webp"; 
import bestsellingproductsimg8 from "../../img/bestsellingproductsimg8.webp"; 
import bestsellingproductsimg9 from "../../img/bestsellingproductsimg9.webp"; 
import bestsellingproductsimg10 from "../../img/bestsellingproductsimg10.webp"; 
import bestsellingproductsimg11 from "../../img/bestsellingproductsimg11.webp"; 
import bestsellingproductsimg12 from "../../img/bestsellingproductsimg12.webp"; 
import bestsellingproductsimg13 from "../../img/bestsellingproductsimg13.webp"; 
import bestsellingproductsimg14 from "../../img/bestsellingproductsimg14.webp"; 
import bestsellingproductsimg15 from "../../img/bestsellingproductsimg15.webp"; 
import bestsellingproductsimg16 from "../../img/bestsellingproductsimg16.webp"; 
import bestsellingproductsimg17 from "../../img/bestsellingproductsimg17.webp"; 
import bestsellingproductsimg18 from  "../../img/bestsellingproductsimg18.webp"; 

// import Swiper core and required modules
import SwiperCore, { Pagination,Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


const BestSellingProducts = () =>{
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;
	return(<div className="bestsellingproducts-container">
		       
		        <div className="bestsellingproducts-top">
		        	 <a href="#"> مشاهده همه  </a>
		        	 <h1> پرفروش ترین کالاها  </h1>
		        </div>


		        <div className="bestsellingproducts-bottom">
                        <Swiper onSwiper={setSwiperRef} slidesPerView={4} 
		                        centeredSlides={false} spaceBetween={3} 
		                        navigation={true} className="mySwiper"
		                        autoHeight= {true}>

                                 <SwiperSlide className="SwiperSlide" >
                                      
                                       <div className="bestsellingproducts-bottom-item"> 
                                             <img src={bestsellingproductsimg1} />
                                            <span> 1 </span>
                                            <p> هندزفری بلوتوثی مدل  inpods 12  </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg2} />
                                            <span> 2 </span>
                                            <p>
                                                 زعفران درجه یک مصطفوی 
                                            </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg3} />
                                            <span> 3 </span>
                                            <p>
                                             موبایل سامسونگ مدل Galaxy A13                                             
                                           </p>
                                       </div>

                                 </SwiperSlide>

                                  <SwiperSlide className="SwiperSlide" >
                                      
                                       <div className="bestsellingproducts-bottom-item"> 
                                             <img src={bestsellingproductsimg4} />
                                            <span> 4 </span>
                                            <p>
                                                هدفون بی سیم مدل BTH-F9-5
                                             </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg6} />
                                            <span> 5 </span>
                                            <p>
                                              تخم مرغ تازه پروتانا بسته 20 عددی
                                            </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg7} />
                                            <span> 6 </span>
                                            <p>
                                           آب معدنی میوا - 1.5 لیتر بسته 6 عددی	                                             
                                           </p>

                                       </div>

                                 </SwiperSlide>

                                 <SwiperSlide className="SwiperSlide" >
                                      
                                       <div className="bestsellingproducts-bottom-item"> 
                                             <img src={bestsellingproductsimg8} />
                                            <span> 7 </span>
                                            <p>
                                              پنیر تازه پاک - 400 گرم                                             
                                            </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg9} />
                                            <span> 8 </span>
                                            <p>
                                               پنیر فتا دوشه هراز- 400 گرم                                             
                                            </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg9} />
                                            <span> 9 </span>
                                            <p>
                                               کنسرو ماهی تن در روغن گالکسی 
                                            </p>
                                       </div>

                                 </SwiperSlide>

                                 <SwiperSlide className="SwiperSlide" >                                      
                                       <div className="bestsellingproducts-bottom-item"> 
                                             <img src={bestsellingproductsimg10} />
                                            <span> 10 </span>
                                            <p> 
                                           کنسرو ماهی تن در روغن گالکسی 
                                             </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg11} />
                                            <span> 11 </span>
                                            <p>
                                              رب گوجه فرنگی مکنزی                                                
                                            </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg12} />
                                            <span> 12 </span>
                                            <p> خامه صباح - 200 میلی لیتر
                                            </p>
                                       </div>
                                 </SwiperSlide>


                                 <SwiperSlide className="SwiperSlide" >                                      
                                       <div className="bestsellingproducts-bottom-item"> 
                                             <img src={bestsellingproductsimg13} />
                                            <span> 13 </span>
                                            <p>
                                                           ماکارونی مانا
                                            </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg14} />
                                            <span> 14 </span>
                                            <p>
                                                خیارشور                                            
                                            </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg16} />
                                            <span> 15 </span>
                                            <p>
                                              روغن آفتاب گردان  چه پلاس
                                            </p>
                                       </div>
                                 </SwiperSlide>

                                 <SwiperSlide className="SwiperSlide" >                                      
                                       <div className="bestsellingproducts-bottom-item"> 
                                             <img src={bestsellingproductsimg17} />
                                            <span> 16 </span>
                                            <p>
                                              قارچ دکمه ای
                                            </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg18} />
                                            <span> 17 </span>
                                            <p>
                                               روغن آفتابگردان
                                            </p>
                                       </div>

                                       <div className="bestsellingproducts-bottom-item"> 
                                            <img src={bestsellingproductsimg18} />
                                            <span> 18 </span>
                                            <p>
                                              ماست موسیر
                                            </p>
                                       </div>
                                 </SwiperSlide>
		                  

		                </Swiper>        
		        </div>		     

		   </div>);
}

export default BestSellingProducts;