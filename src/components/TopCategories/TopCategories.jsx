import React from 'react';
import './TopCategories.css';
import TopCategories1img1 from '../../img/TopCategories1img1.jpg';
import TopCategories1img2 from '../../img/TopCategories1img2.jpg';
import TopCategories1img3 from '../../img/TopCategories1img3.jpg';
import TopCategories1img4 from '../../img/TopCategories1img4.jpg';

import TopCategories2img1 from '../../img/TopCategories2img1.jpg';
import TopCategories2img2 from '../../img/TopCategories2img2.jpg';
import TopCategories2img3 from '../../img/TopCategories2img3.jpg';
import TopCategories2img4 from '../../img/TopCategories2img4.jpg';

import TopCategories3img1 from '../../img/TopCategories3img1.jpg';
import TopCategories3img2 from '../../img/TopCategories3img2.jpg';
import TopCategories3img3 from '../../img/TopCategories3img3.jpg';
import TopCategories3img4 from '../../img/TopCategories3img4.jpg';

import TopCategories4img1 from '../../img/TopCategories4img1.jpg';
import TopCategories4img2 from '../../img/TopCategories4img2.jpg';
import TopCategories4img3 from '../../img/TopCategories4img3.jpg';
import TopCategories4img4 from '../../img/TopCategories4img4.jpg';


const TopCategories = () =>{
	return(<div className="TopCategories-container">

                 <div className="TopCategories-items" style={{ borderRight : "1px solid #e3e0da" }}>  
                      <div className="TopCategories-subitem1">
                           <h1> ساعت هوشمند </h1>
                           <p> بر اساس بازدیدهای شما  </p>
                      </div>

                      <div className="TopCategories-subitem2">
                           <a href="#" style={{ borderRight:"1px solid #e3e0da" ,
                                                borderBottom:"1px solid #e3e0da" }}> 
                                <img src={TopCategories1img1} />
                           </a>
                           <a href="#" style={{ borderLeft:"1px solid #e3e0da" ,
                                                borderBottom:"1px solid #e3e0da" }}>
                                <img src={TopCategories1img2} /> 
                           </a>
                           <a href="#" style={{ borderRight:"1px solid #e3e0da" ,
                                                borderTop:"1px solid #e3e0da" }}> 
                              <img src={TopCategories1img3} /> 
                           </a>
                           <a href="#" style={{ borderLeft:"1px solid #e3e0da" ,
                                                borderTop:"1px solid #e3e0da" }}>
                               <img src={TopCategories1img4} /> 
                           </a>                           
                      </div> 

                      <div className="TopCategories-subitem3">
                            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                            <span> مشاهده همه </span>
                      </div> 
                 </div>


                <div className="TopCategories-items" style={{ borderRight : "1px solid #e3e0da" }}>  
                      <div className="TopCategories-subitem1">
                           <h1>  هدفون، هدست و هندزفری   </h1>
                           <p> بر اساس بازدیدهای شما  </p>
                      </div>

                      <div className="TopCategories-subitem2">
                           <a href="#" style={{ borderRight:"1px solid #e3e0da" ,
                                                borderBottom:"1px solid #e3e0da" }}> 
                                <img src={TopCategories2img1} />
                           </a>
                           <a href="#" style={{ borderLeft:"1px solid #e3e0da" ,
                                                borderBottom:"1px solid #e3e0da" }}>
                                <img src={TopCategories2img2} /> 
                           </a>
                           <a href="#" style={{ borderRight:"1px solid #e3e0da" ,
                                                borderTop:"1px solid #e3e0da" }}> 
                              <img src={TopCategories2img3} /> 
                           </a>
                           <a href="#" style={{ borderLeft:"1px solid #e3e0da" ,
                                                borderTop:"1px solid #e3e0da" }}>
                               <img src={TopCategories2img4} /> 
                           </a>                           
                      </div> 

                      <div className="TopCategories-subitem3">
                            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                            <span> مشاهده همه </span>
                      </div> 
                 </div>


                 <div className="TopCategories-items" style={{ borderRight : "1px solid #e3e0da" }}>  
                      <div className="TopCategories-subitem1">
                           <h1> کیف و کاور گوشی  </h1>
                           <p> بر اساس بازدیدهای شما  </p>
                      </div>

                      <div className="TopCategories-subitem2">
                           <a href="#" style={{ borderRight:"1px solid #e3e0da" ,
                                                borderBottom:"1px solid #e3e0da" }}> 
                                <img src={TopCategories3img1} />
                           </a>
                           <a href="#" style={{ borderLeft:"1px solid #e3e0da" ,
                                                borderBottom:"1px solid #e3e0da" }}>
                                <img src={TopCategories3img2} /> 
                           </a>
                           <a href="#" style={{ borderRight:"1px solid #e3e0da" ,
                                                borderTop:"1px solid #e3e0da" }}> 
                              <img src={TopCategories3img3} /> 
                           </a>
                           <a href="#" style={{ borderLeft:"1px solid #e3e0da" ,
                                                borderTop:"1px solid #e3e0da" }}>
                               <img src={TopCategories3img4} /> 
                           </a>                           
                      </div> 

                      <div className="TopCategories-subitem3">
                            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                            <span> مشاهده همه </span>
                      </div> 
                 </div>


                 <div className="TopCategories-items">  
                      <div className="TopCategories-subitem1">
                           <h1> گوشی موبایل  </h1>
                           <p> بر اساس بازدیدهای شما  </p>
                      </div>

                      <div className="TopCategories-subitem2">
                           <a href="#" style={{ borderRight:"1px solid #e3e0da" ,
                                                borderBottom:"1px solid #e3e0da" }}> 
                                <img src={TopCategories4img1} />
                           </a>
                           <a href="#" style={{ borderLeft:"1px solid #e3e0da" ,
                                                borderBottom:"1px solid #e3e0da" }}>
                                <img src={TopCategories4img2} /> 
                           </a>
                           <a href="#" style={{ borderRight:"1px solid #e3e0da" ,
                                                borderTop:"1px solid #e3e0da" }}> 
                              <img src={TopCategories4img3} /> 
                           </a>
                           <a href="#" style={{ borderLeft:"1px solid #e3e0da" ,
                                                borderTop:"1px solid #e3e0da" }}>
                               <img src={TopCategories4img4} /> 
                           </a>                           
                      </div> 

                      <div className="TopCategories-subitem3">
                            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                            <span> مشاهده همه </span>
                      </div> 
                 </div>


                

{/*                <div className="TopCategories-item">
                	 <div className="TopCategories-subitem" style={{borderRight: "1px solid #e3e0da"}}>                	 
                	       <div className="TopCategories-subitem1">
                	           <h2> ساعت هوشمند </h2>
                	           <p> بر اساس بازدیدهای شما  </p>
                	       </div>

                	 	   <div className="TopCategories-subitem2">
                	 	        <ul>
                	 	             <a href="#" style={{  borderBottom : "1px solid #e3e0da",
                                                        borderRight :"1px solid #e3e0da"}}> 
                                       <li> <img src={TopCategories1img1} />  </li>
                                  </a>
                	 	             <a href="#" style={{  borderBottom : "1px solid #e3e0da",
                                                        borderLeft :"1px solid #e3e0da"}}>
                                        <li> <img src={TopCategories1img2} />  </li> 
                                  </a>
                	 	             <a href="#" style={{  borderTop : "1px solid #e3e0da",
                                                        borderRight :"1px solid #e3e0da"}}> 
                                      <li>
                                          <img src={TopCategories1img3} />  
                                      </li> 
                                  </a>    
                	 	             <a href="#" style={{  borderTop : "1px solid #e3e0da",
                                                        borderLeft :"1px solid #e3e0da"}}>
                                      <li>
                                         <img src={TopCategories1img4} />  
                                      </li>
                                  </a>
                	 	        </ul>
                	       </div>

                	       <div className="TopCategories-subitem3">
                	            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                	 	        <span>  مشاهده همه </span>
                	       </div>
                	 </div>
                </div>
*/}
{/*                <div className="TopCategories-item">
                	 <div className="TopCategories-subitem">
                	      <div className="TopCategories-subitem1">             	 	
                	      </div>
                	      <div className="TopCategories-subitem2">                	 	
                	      </div>                	 	
                	 </div>
                </div>*/}

	       </div>);
}

export default TopCategories;