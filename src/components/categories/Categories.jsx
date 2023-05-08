import React from 'react';
import './categories.css';
import categoryimg1 from '../../img/categoryimg1.png';
import categoryimg2 from '../../img/categoryimg2.png';
import categoryimg3 from '../../img/categoryimg3.png';
import categoryimg4 from '../../img/categoryimg4.png';
import categoryimg5 from '../../img/categoryimg5.png';
import categoryimg6 from '../../img/categoryimg6.png';
import categoryimg7 from '../../img/categoryimg7.png';
import categoryimg8 from '../../img/categoryimg8.png';
import categoryimg9 from '../../img/categoryimg9.png';
import categoryimg10 from '../../img/categoryimg10.png';
import categoryimg11 from '../../img/categoryimg11.png';


const Categories = () =>{
	return(<div className="categories-container">

	          	<h1>  دسته بندی های دیجی کالا  </h1>
	          	
	          	<div className="categories-row1">
	          	    <ul className="categories-row1-list">
	          	       <li>
	          	           <img src={categoryimg1} />
	          	           <span>
	          	               محصولات بومی و محلی
	          	          </span>
	          	       </li>

	          	       <li>
	          	          <img src={categoryimg2} />
	          	          <span>
	          	             کالاهای سوپرمارکتی
	          	          </span>   
	          	       </li>
	          	       
	          	       <li>
	          	          <img src={categoryimg3} />
                          <span>
	          	          مد و پوشاک
	          	          </span>
	          	       </li>

	          	       <li>
	          	       	   <img src={categoryimg4} />
	          	       	   <span>
                             موبایل
                           </span>  
	          	       </li>

	          	       <li>
	          	           <img src={categoryimg5} />
                           <span>
                            کالای دیجیتال
                           </span>
	          	       </li>

	          	       <li>
	          	           	<img src={categoryimg6} />
	          	           	<span>
                              خودرو ابزار و تجهیزات صنعتی
                            </span>  
	          	       </li>

	          	    </ul>
	          	</div>

                <div className="categories-row2">
                    <ul className="categories-row2-list">
                       <li>
                          	<img src={categoryimg7} />
                          	<span>
                              ورزش و سفر
                            </span>  
                       </li>

	          	       <li>
	          	          <img src={categoryimg8} />
	          	          <span>
	          	            کتاب ، لوازم تحریر و هنر
                          </span>
	          	       </li>
	          	       
	          	       <li>
	          	          <img src={categoryimg9} />
	          	          <span>
                           خانه و آشپزخانه
                          </span> 
	          	       </li>

	          	       <li>
	          	       	  <img src={categoryimg10} />
	          	          <span>
                           زیبایی و سلامت
                          </span> 
	          	       </li>

	          	       <li>
	          	          <img src={categoryimg11} />
	          	          <span>
	          	            اسباب بازی ، زیبایی و کودک
	          	          </span>  
	          	       </li>
                     </ul>
                </div>
		 </div>)
}

export default Categories;