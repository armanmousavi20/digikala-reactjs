import React from 'react';
import './list1.css'
import list1img1 from '../../img/list1img1.png';
import list1img2 from '../../img/list1img2.png';
import list1img3 from '../../img/list1img3.png';
import list1img4 from '../../img/list1img4.png';
import list1img5 from '../../img/list1img5.png';
import list1img6 from '../../img/list1img6.png';
import list1img7 from '../../img/list1img7.png';

import { addToCart } from '../../features/shoppingcart/shoppingcartSlice';
import { useDispatch } from "react-redux";


const List1 = () =>{
	 //redux
		 const dispatch = useDispatch();
		 const handleAddToCart = (data) => {
			  dispatch(addToCart({
					 ...data,      
					 quantity: 1
			  }))
		  }  
	return(<div className="list1-container">
	          <ul>
	             <li> <a href="#" className="list1-item-end">  
	                      بیش از 90 کالا
                      </a> </li>
                 <li>
                    <ul className="list1-item-imgs">
	                   <li onClick={()=>{  handleAddToCart({id:12,title:'ّبرنج ایرانی',price:1000000,
                                                          count:1,
                                                           img:list1img7})
                                        }}
					    > <div>  <img className="list1-item-img" src={list1img7} /> </div>
                            <span className="list1-item-img-badge"> 30% </span>
	                   </li>		             
	                   <li onClick={()=>{  handleAddToCart({id:13,title:'پوشک کودک',price:1000000,
                                                          count:1,
                                                           img:list1img6})
                                        }}>
							 <div>  <img className="list1-item-img" src={list1img6} /> </div> 
                            <span className="list1-item-img-badge"> 33% </span>
	                   </li>

	                   <li onClick={()=>{  handleAddToCart({id:14,title:'شامپو',price:1000000,
                                                          count:1,
                                                           img:list1img5})
                                        }}>
							 <div>  <img className="list1-item-img" src={list1img5} /> </div>
                            <span className="list1-item-img-badge"> 50% </span>
	                    </li>

	                   <li onClick={()=>{  handleAddToCart({id:15,title:'روغن',price:1000000,
                                                          count:1,
                                                           img:list1img4})
                                        }}> 
										<div>  <img className="list1-item-img" src={list1img4} /> </div> 
	                        <span className="list1-item-img-badge"> 23% </span>
	                   </li>

	                   <li onClick={()=>{  handleAddToCart({id:16,title:'خیارشور',price:1000000,
                                                          count:1,
                                                           img:list1img3})
                                        }}>
						 <div>  <img className="list1-item-img" src={list1img3} /> </div>
	                        <span className="list1-item-img-badge"> 10% </span>
	                   </li>

	                   <li onClick={()=>{  handleAddToCart({id:17,title:'ناگت مرغ',price:1000000,
                                                          count:1,
                                                           img:list1img2})
                                        }}>
						 <div>  <img className="list1-item-img" src={list1img2} /> </div>
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