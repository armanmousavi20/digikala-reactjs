import React from 'react';
import './list1.css'
import list1img1 from '../../img/list1img1.png';
import list1img2 from '../../img/list1img2.png';
import list1img3 from '../../img/list1img3.png';
import list1img4 from '../../img/list1img4.png';
import list1img5 from '../../img/list1img5.png';
import list1img6 from '../../img/list1img6.png';
import list1img7 from '../../img/list1img7.png';

const List1 = () =>{
	return(<div className="list1-container">
	          <ul>
	             <li> <a href="#" className="list1-item-end">  
                           <i class="fa fa-arrow-left" aria-hidden="true"></i>
	                      بیش از 90 کالا
                      </a> </li>
                 <li>
                    <ul className="list1-item-imgs">
	                   <li> <a href="#">  <img className="list1-item-img" src={list1img7} /> </a>
                            <span className="list1-item-img-badge"> 30% </span>
	                   </li>		             
	                   <li> <a href="#">  <img className="list1-item-img" src={list1img6} /> </a> 
                            <span className="list1-item-img-badge"> 33% </span>
	                   </li>		             
	                   <li> <a href="#">  <img className="list1-item-img" src={list1img5} /> </a>
                            <span className="list1-item-img-badge"> 50% </span>
	                    </li>
	                   <li> <a href="#">  <img className="list1-item-img" src={list1img4} /> </a> 
	                        <span className="list1-item-img-badge"> 23% </span>
	                   </li>		             		             
	                   <li> <a href="#">  <img className="list1-item-img" src={list1img3} /> </a>
	                        <span className="list1-item-img-badge"> 10% </span>
	                   </li>		             
	                   <li> <a href="#">  <img className="list1-item-img" src={list1img2} /> </a>
	                   	    <span className="list1-item-img-badge"> 20% </span>
	                   </li>
	                </ul>   
                 </li>
	             <li> <a href="#" className="list1-item-link2">  تا 36% تخفیف  </a> </li>		             
	             <li> <a href="#" className="list1-item-link1"> شگفت انگیز سوپرمارکتی   </a> </li>		             
	             <li> <a href="#">  <img src={list1img1} /> </a> </li>		             
	          </ul>
	       </div>)
}

export default List1;