import React from 'react';
import './Footer.css';

const Footer3 = () =>{
	return(<div className="Footer3-container">
		        <div className="Footer3-item1">
		        	<h2> همراه ما باشید! </h2>
		        	
		        	<div className="Footer3-socialmedia" >
		        		<a href="#">
		        		   facebook
		        		</a>

		        	    <a href="#">
                            instagram
		        		</a>

		        	    <a href="#">
		        	        twiter
		        		</a>

		        		 <a href="#">
		        		   youtube
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
                    	<li> <a href="#"> نحوه ثبت صفارس </a> </li>
                    	<li> <a href="#">  رویه ثبت صفارش   </a> </li>
                    	<li> <a href="#">  شیوه های پرداخت    </a> </li>
                    </ul>                   
		        </div>

		        <div className="Footer3-item2">
		        	<h2> خدمات مشتریان  </h2>
		        	<ul>
                    	<li> <a href="#">  پاسخ به پرسشهای متداول   </a> </li>
                    	<li> <a href="#">   رویه های بازگرداندن کالا     </a> </li>
                    	<li> <a href="#">  شرایط استفادعه   </a> </li>
                    	<li> <a href="#">  حریم خصوصی   </a> </li>
                    	<li> <a href="#">  گزارش باگ     </a> </li>                    	
                    	                    	
                    </ul>  
		        </div>

		        <div className="Footer3-item2">
                   <h2> با دیجی‌کالا </h2>
                   <ul>
                    	<li> <a href="#">   اتاق خبر دیجیکالا  </a> </li>
                    	<li> <a href="#">  فروش در دیجیکالا     </a> </li>
                    	<li> <a href="#">  فرصت های شغلای      </a> </li>
                    	<li> <a href="#">  فرصت های شغلای      </a> </li>
                    	<li> <a href="#">  تماس با دیجی کالا  </a> </li>
                    	<li> <a href="#">  فرصت های شغلای      </a> </li>
                    	<li> <a href="#">    درباره دیجی کالا    </a> </li>

                    </ul>  
		        </div>
		        	
		        
	       </div>);
}

export default Footer3;