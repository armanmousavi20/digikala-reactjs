import React from 'react';
import './Footer.css'

import footer2img1 from '../../img/footer2img1.svg';
import footer2img2 from '../../img/footer2img2.svg';
import footer2img3 from '../../img/footer2img3.svg';
import footer2img4 from '../../img/footer2img4.svg';
import footer2img5 from '../../img/footer2img5.svg';


const Footer2 = () =>{
   return(<div className="Footer2-container"> 
              
              <a href="#">
                   <img src={footer2img1} />
                    <span> ضمانت اصل بودن کالا </span> 
              </a> 

              <a href="#">
                   <img src={footer2img2} />
                    <span> 
                     هفت روز ضمانت بازگشت کالا
                    </span> 
              </a> 

              <a href="#">
                   <img src={footer2img3} />
                    <span>
                      ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
                    </span> 
              </a> 

              <a href="#">
                   <img src={footer2img4} />
                    <span> 
                      امکان پرداخت در محل
                    </span> 
              </a> 

             <a href="#">
                   <img src={footer2img5} />
                    <span>
                       اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس
                     </span> 
              </a> 



          </div>);   
}

export default Footer2;