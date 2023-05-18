import React from 'react';
import './digikalaoffers.css';
import digikalaoffersimg1 from '../../img/digikalaoffersimg1.jpg'
import digikalaoffersimg2 from '../../img/digikalaoffersimg2.jpg'
import digikalaoffersimg3 from '../../img/digikalaoffersimg3.jpg'
import digikalaoffersimg4 from '../../img/digikalaoffersimg4.jpg'
import digikalaoffersimg5 from '../../img/digikalaoffersimg5.jpg'
import digikalaoffersimg6 from '../../img/digikalaoffersimg6.jpg'
import digikalaoffersimg7 from '../../img/digikalaoffersimg7.jpg'
import digikalaoffersimg8 from '../../img/digikalaoffersimg8.jpg'
import digikalaoffersimg9 from '../../img/digikalaoffersimg9.jpg'
import digikalaoffersimg10 from '../../img/digikalaoffersimg10.jpg'
import digikalaoffersimg11 from '../../img/digikalaoffersimg11.jpg'
import digikalaoffersimg12 from '../../img/digikalaoffersimg12.jpg'

const DigikalaOffers = () =>
{
	return(<div> 
		       <div className="digikalaoffer-container" id='digikalaoffer-container'>
		       <h1> پیشنهادات دیجی کالا </h1>
		            <div className="digikalaoffer-row1">
		                <ul>		                    
		                    <a href="#" style={{ borderRadius:"15px 0 0 0" }}>
		                      <li>
		                        <div className="digikalaoffer-row1-img">
		                           <img src={digikalaoffersimg1} />
		                        </div>  
		                        <span>  گوشی موبایل   </span>
		                      </li>  
		                    </a>  

		                    
		                      <a href="">
		                       <li>
		                         <img src={digikalaoffersimg2} />
		                         <span>  هدفون و ست  </span>
		                       </li>
		                      </a>  
		                    

		                    
		                   <a href="">
		                      <li>
		                         <img src={digikalaoffersimg4} />
		                         <span>  ماوس    </span>
		                       </li>
		                    </a>   
		                    

		                    
		                    <a href="">
		                      <li>
		                        <img src={digikalaoffersimg3} />
		                        <span>  لبتاب  </span>
		                       </li> 
		                     </a>
		                    

		                    
		                    <a href="">
                              <li>                                 
		                         <img src={digikalaoffersimg5} />		                         
		                         <span>  جوراب مردانه   </span>		                        
		                      </li>
                             </a>
		                    
		                    <a href="#" style={{ borderRadius:"0 15px 0 0" , borderRight:"none !important"  }}>
                             <li>
		                        <img src={digikalaoffersimg6} />
		                        <span>  آشنایی با فنون     </span>
		                      </li>  
		                    </a>  
		                    		               		        		                                 		                		                    
		                    <a href="#" style={{ borderRadius:"0 0 0 15px" }}>
		                      <li>
		                        <img src={digikalaoffersimg7} />
		                        <span>  کیف و کاور گوشی    </span>
		                      </li>  
		                    </a>  

		                    
		                      <a href="">
		                       <li>
		                         <img src={digikalaoffersimg8} />
		                         <span>  ساعت هوشمند   </span>
		                       </li>
		                      </a>  
		                    

		                    
		                   <a href="">
		                      <li>
		                         <img src={digikalaoffersimg9} />
		                         <span>  کنسول خانگی   </span>
		                       </li>
		                    </a>   
		                    

		                    
		                    <a href="">
		                      <li>
		                        <img src={digikalaoffersimg10} />
		                        <span>  کنسول بازی    </span>
		                       </li> 
		                     </a>
		                    

		                    
		                    <a href="">
                              <li>
		                         <img src={digikalaoffersimg11} />
		                         <span>  اسپیکر   </span>		                        
		                      </li>
                             </a>
		                    
		                    <a href="#" style={{ borderRadius:"0 0 15px 0" }}>
                             <li>
		                        <img src={digikalaoffersimg12}/>
		                        <span>  تخت خواب   </span>
		                      </li>  
		                    </a>  
		                    

		                </ul>

		            </div>
		       </div>

		   </div>);
}

export default DigikalaOffers;
