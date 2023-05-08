import React from 'react';
import './Footer.css';

import footer4img1 from '../../img/footer4img1.svg';
import footer4img2 from '../../img/footer4img2.svg';
import footer4img3 from '../../img/footer4img3.svg';
import footer4img4 from '../../img/footer4img4.svg';
import footer4img5 from '../../img/footer4img5.svg';
import footer4img6 from '../../img/footer4img6.png';


const Footer4 = () =>{
   return(<div className="Footer4-container">
   	           <div className="Footer4-left">
   	              <img src={footer4img1} className="img-left" />
   	              <img src={footer4img2} />
   	              <img src={footer4img3} />
   	              <img src={footer4img4} />
   	              <img src={footer4img5} />
   	           </div>
   	           <div className="Footer4-right">  
   	               <h1> 
                       دانلود اپلیکیشن دیجی‌کالا
   	               </h1>
   	               <img src={footer4img6} />
   	           </div>
          </div>);
}

export default Footer4;