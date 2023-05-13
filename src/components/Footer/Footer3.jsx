import React from 'react';
import './Footer.css';
import facebookimg from '../../../src/img/footer/facebook.png';
import instagramimg from '../../../src/img/footer/instagram.jfif';
import telimg from '../../../src/img/footer/tel.jfif';
import twitterimg from '../../../src/img/footer/twitter.png';


const Footer3 = () =>{
	return(<div className="Footer3-container">
		        <div className="Footer3-item1">
		        	<h2> !همراه ما باشید </h2>
		        	
		        	<div className="Footer3-socialmedia" >
		        		<a href="#">
		        		   <img src={facebookimg} />
		        		</a>

		        	    <a href="#">
						   <img src={instagramimg} />
		        		</a>

		        	    <a href="#">
						  <img src={telimg} />
		        		</a>

		        		 <a href="#">
						     <img src={twitterimg} />		        		    
		        		</a>
		        	</div>

		        	<h2>                      
                      با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
		        	</h2>

		        	<form>
		        		<button type="submit"> ثبت  </button>
		        		<input type="text" placeholder="ایمیل شما " />
		        	</form>

		        </div>

		        <div className="Footer3-item2">
                    <h2> راهنمای خرید از دیجی‌کالا </h2> 
                    <ul>
                    	<li> <a href="#"> نحوه ثبت سفارس </a> </li>
                    	<li> <a href="#">  رویه ثبت سفارش   </a> </li>
                    	<li> <a href="#">  شیوه های پرداخت    </a> </li>
                    </ul>                   
		        </div>

		        <div className="Footer3-item2">
		        	<h2> خدمات مشتریان  </h2>
		        	<ul>
                    	<li> <a href="#">  پاسخ به پرسشهای متداول   </a> </li>
                    	<li> <a href="#">   رویه های بازگرداندن کالا     </a> </li>
                    	<li> <a href="#">  شرایط استفاده   </a> </li>
                    	<li> <a href="#">  حریم خصوصی   </a> </li>
                    	<li> <a href="#">  گزارش باگ     </a> </li>                    	
                    	                    	
                    </ul>  
		        </div>

		        <div className="Footer3-item2">
                   <h2> با دیجی‌کالا </h2>
                   <ul>
                    	<li> <a href="#">   اتاق خبر دیجیکالا  </a> </li>
                    	<li> <a href="#">  فروش در دیجیکالا     </a> </li>
                    	<li> <a href="#">  فرصت های شغلی      </a> </li>
                    	<li> <a href="#">  فرصت های شغلی      </a> </li>
                    	<li> <a href="#">  تماس با دیجی کالا  </a> </li>
                    	<li> <a href="#">  فرصت های شغلی      </a> </li>
                    	<li> <a href="#">    درباره دیجی کالا    </a> </li>

                    </ul>  
		        </div>
		        	
		        
	       </div>);
}

export default Footer3;