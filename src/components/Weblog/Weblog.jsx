import React from 'react';
import './Weblog.css';

import weblogimg1 from '../../img/weblogimg1.jpg'
import weblogimg2 from '../../img/weblogimg2.jpg'
import weblogimg3 from '../../img/weblogimg3.jpg'
import weblogimg4 from '../../img/weblogimg4.jpg'


const Weblog = () =>{
	return(<div className="Weblog-container">	

	           <div className="weblog-header">	       
		          <a href="#">
		              <i class="fa fa-angle-left" aria-hidden="true"></i>
		              <span>
		                مطالب بیشتر در دیجیکالا مگ 		           
		              </span>
		          </a>
		          <h2> خواندنی ها </h2>
               </div>

               <div className="Weblog-items">
               	   <a href="#" className="Weblog-item">
               	   	   <img src={weblogimg1} />
               	   	   <p> 
                         راهنمای خرید ساعت هوشمند؛ بهمن ۱۴۰۱
               	   	   </p>
               	   </a>
               
               	   <a href="#" className="Weblog-item">
               	   	   <img src={weblogimg2} />
               	   	   <p> 
               	   	      ۲۶ کالای الکترونیک جذاب که همین الان می‌توانید بخرید
               	   	   </p>
               	   </a>

               	   <a href="#" className="Weblog-item">
               	   	   <img src={weblogimg3} />
               	   	   <p> 
               	   	   بررسی هدفون بی‌سیم هوآوی FreeBuds 4i؛ فراتر از رقبا
               	   	   </p>
               	   </a>

               	   <a href="#" className="Weblog-item">
               	   	   <img src={weblogimg4} />
               	   	   <p> 
                           راهنمای خرید انواع گوشواره با توجه به شکل صورت شما
               	   	   </p>
               	   </a>
             </div>
	       </div>);
}

export default Weblog;

