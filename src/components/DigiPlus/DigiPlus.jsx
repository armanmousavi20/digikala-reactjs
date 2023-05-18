import React from 'react';
import './DigiPlus.css';
import digiplusbg from '../../img/digiplusbg.png';
import digiplusleftimg1 from '../../img/digiplusleftimg1.jpg';
import digiplusleftimg2 from '../../img/digiplusleftimg2.jpg';
import digiplusleftimg3 from '../../img/digiplusleftimg3.jpg';
import digiplusleftimg4 from '../../img/digiplusleftimg4.jpg';
import digiplusleftimg5 from '../../img/digiplusleftimg5.jpg';
import digiplusleftimg6 from '../../img/digiplusleftimg6.jpg';
import digiplusleftimg7 from '../../img/digiplusleftimg7.jpg';
import digiplusleftimg8 from '../../img/digiplusleftimg8.jpg';
import digiplusleftimg9 from '../../img/digiplusleftimg9.jpg';
import digiplusleftimg10 from '../../img/digiplusleftimg10.jpg';
import digiplusleftimg11 from '../../img/digiplusleftimg11.jpg';
import digiplusleftimg12 from '../../img/digiplusleftimg12.jpg';


const DigiPlus = () =>{
	return(<div className="DigiPlus-container" id='DigiPlus-container'>

		       <div className="DigiPlus-left">
		           
		           <div className="DigiPlus-left-top">
		                <div className="DigiPlus-left-top-l"> 
                            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                            <span> مشاهده همه </span>
		                </div>

		                <div className="DigiPlus-left-top-r"> 
                           <span> ارسال فوری </span>
                           <i class="fa fa-rocket" aria-hidden="true"></i>
		                </div>
		           </div>

		           <div className="DigiPlus-left-bottom">
		               <a href="#"> <img src={digiplusleftimg1} /> </a>
		               <a href="#"> <img src={digiplusleftimg2} /> </a>
		               <a href="#"> <img src={digiplusleftimg3} /> </a>
		               <a href="#"> <img src={digiplusleftimg4} /> </a>
		               <a href="#"> <img src={digiplusleftimg5} /> </a>
		               <a href="#"> <img src={digiplusleftimg6} /> </a>
		               <a href="#"> <img src={digiplusleftimg7} /> </a>
		               <a href="#"> <img src={digiplusleftimg8} /> </a>
		               <a href="#"> <img src={digiplusleftimg9} /> </a>
		               <a href="#"> <img src={digiplusleftimg10} /> </a>
		               <a href="#"> <img src={digiplusleftimg11} /> </a>
		               <a href="#"> <img src={digiplusleftimg12} /> </a>
		            </div>
		       </div>


		       <div className="DigiPlus-right">
		           <h1> digiplus </h1>
		           <p>
		           	خدمات ویژه برای اعضای دیجی‌پلاس
		           </p>
		           <button> 
                         <i class="fa fa-chevron-left" aria-hidden="true"></i>
                         <span> عضویت  </span>
		           </button>
		           <img src={digiplusbg} />		              		           
		       </div>


	       </div>);
}

export default DigiPlus;