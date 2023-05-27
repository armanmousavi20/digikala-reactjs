import React,{useState , useEffect} from 'react';
import img1 from '../../img/1.gif';
import img2 from "../../img/2.svg"; 
import menuicon from '../../img/header/menuicon.png';
import deleteicon from '../../img/header/deleteicon.jfif';

import './header.css';
import Navbar from './navbar';
import { FaShoppingCart , FaSearch  } from 'react-icons/fa';
import {  GrLocation} from 'react-icons/gr';

// redux
import { useSelector , useDispatch } from 'react-redux';
import { increment , decrement , removeitem } from '../../features/shoppingcart/shoppingcartSlice';

const Header = () =>
{
	const[showCat, setShowCat] = useState(false);
    const[showList, setShowList] = useState(false);
    const[counter, setCounter] = useState(0);

	// redux
	const dispatch = useDispatch();
	const count = useSelector((c) => c.shoppingcart.cart.length)
	let productslist = useSelector( (s) => s.shoppingcart.cart);
	let total = useSelector( (s) => s.shoppingcart.total);

	
	window.onscroll = () =>{if( window.scrollY > document.getElementById('img-header').clientHeight )
                               {
                                   document.getElementById('header-stick').classList.add("header-sticky");
                               }

                             if( window.scrollY < 50 )                              
                              {
                              document.getElementById('header-stick').classList.remove("header-sticky");
                              } 
                             }
  
							 function closeNav() {
								document.getElementById("myNav").style.width = "0%";
							  }
	return(<div className="container" id="header">
	            <div className="img-header" id="img-header">                   
   				        <img src={img1} />				   
	            </div>
				<div className='header1-mobile'>
                    <div className="header-mobile-top">					
					     {/* <img src={questionicon} className="header-top-img2" /> */}
						 <i className="fa fa-shopping-cart" aria-hidden="true"></i>
					     <img src={img2} className="header-top-img1" />
					     <img src={menuicon} className="header-top-img2" onClick={() => { document.getElementById("myNav").style.width = "100%"; }} />		
					</div>


					
						                   <div id="myNav" class="overlay">
						                          <a href="javascript:void(0)"
												    class="closebtn"
												     onClick={closeNav}
		                                            >&times;													  
												  </a>												
						                          <div class="overlay-content">
						                              <a href="#amazinproposal" onClick={closeNav}> پیشنهاد شگفت انگیز </a>
						                              <a href="#categories-container" onClick={closeNav}>دسته بندی کالاها</a>
						                              <a href="#digikalaoffer-container" onClick={closeNav}> پیشنهادات دیجی کالا </a>
													  <a href="#popularbrands-container" onClick={closeNav}>   محبوبترین برندها </a>
						                              <a href="#DigiPlus-container" onClick={closeNav}>  دیجی پلاس </a>
						                              <a href="#DigiClub-container" onClick={closeNav}>  دیجی کلوب </a>
						                              <a href="#bestsellingproducts-container" onClick={closeNav}>   پرفروش ترین </a>
													  <a href="#Auction-container" onClick={closeNav}>   حراجی </a>
						                          </div>
					                       </div>
					

					<div className="header-mobile-middle">
					    <div>
						    <span>
	                	       لطفا شهر خود را انتخاب کنید
	                	    </span>
	                        <i class="fa fa-map-marker" aria-hidden="true"></i>
						 </div>
					     <form className="header-mobile-middle-form">
	                         <input type="text" placeholder="جستجو" />
	                         <i className="fa fa-search" aria-hidden="true"></i>
	                     </form>
					</div>			 
				</div>
                 
             <div className="header-stick" id="header-stick">            
	            <div className="header-middle" id="header-middle">
	            	<div className="left-header">
					<span className='Badge'>
					{ productslist.length ? (productslist.length) : '' }
					</span>
						 <FaShoppingCart 
						 className='shoppingcart'						   
						  onClick={()=>{document.getElementById('shoppingbasket').style.height="auto";
							                  document.getElementById('shoppingbasket').style.opacity="1";
											  document.getElementById('shoppingbasket').style.zIndex="9999";
											  document.getElementById('shoppingbasket').style.display="block";
						                      }}
									/>	
		
{/* snap basket */}
							<div id='shoppingbasket'>                                      
								<div>	
									<div className="shoppingbasket-top">	
									<h2> سبد خرید شما </h2>
									   <p className="shoppingbasket-top-p"			
									   onClick={()=> {
										                document.getElementById('shoppingbasket').style.height="0"
							                            document.getElementById('shoppingbasket').style.opacity="0";
						 					            document.getElementById('shoppingbasket').style.zIndex="-9999";
						 					            document.getElementById('shoppingbasket').style.display="none";
													}}> 
											&times;
									   </p>	
									</div>

                                    {/* shopping basket products */}
									{
                                       productslist.length>0 ? (

										productslist.map((p , i ) =>{
											return(
											<div className='shoppingbasket-product' key={i}>
											<img src={`${p.img}`} className='shoppingbasket-product-img' />
											<p> {productslist[i].title} </p>
											<p> {productslist[i].price}</p>  
											<div className='shoppingbasket-count'>
											   <p className='shoppingbasket-count-plus' 
												   onClick={()=> {
													dispatch(increment(p)) ; 
												   }}>
													 + 
												</p>
											   <p className='shoppingbasket-count-number'> { productslist[i].count} </p>
												  <p className='shoppingbasket-count-minus' 
												  onClick={()=>{
													dispatch(decrement(p));
												   }}>
												- 
												</p>
											</div>
											<p> {productslist[i].price * productslist[i].count}</p>  
										<img src={deleteicon} className="deleteimg"
											  onClick={()=> { alert(`میخواهید محصول ${p.title} را حذف کنید؟`);
											                   dispatch(removeitem(p)) 
															   } }  />
										</div>
										)
										})): <div className='empty_shopping_basket'> سبد خرید شما خالی است </div>
									}

									</div>

                            <hr />
							{productslist.length>0 ?
                             <div> 
							<div className='shoppingbasket-total-price'>
								<p>  : جمع کل  </p>
								<p>  {total} </p>
								<p> تومان </p>
							</div>

							<div className='shoppingbasket-bottom'> 
							    <button>
							    ادامه خرید 
								</button>
							</div>
							</div>
							:''
                            } 
							</div>
{/* snap basket */}

	                     <button className="header-btn">
	                         <span className="header-btn-span"> ورود  </span>
	                         <span className="header-btn-span"> | </span> 
	                          <span className="header-btn-span">ثبت نام   </span>
	                     </button>
	                </div>

	                <div className="header-search">
	                     <form className="header-form">
	                         <input type="text" placeholder="جستجو" />							 
							 <FaSearch className='FaSearch' />
	                     </form>
	                </div>

	                <div className="header-mid-img">
						<a href='/'>
	                        <img src={img2} />
						</a>
	                </div>

	            </div> 				                             
	            <div className="header-bottom" id="header-bottom">	                
	                <div className="header-bottom-item header-bottom2">
	                	 <ul>
	                	    <li>
	                	        <span>
	                	           شگفت انگیزها 
	                	        </span>
	                	     </li>	                	                  	   
	                	    <li>
	                	        <span>
	                	      تخفیف ها و پیشنهادها 
	                	        </span>
	                	      </li>	                	   
	                	    <li>
	                	       <span>پرفروش ترین ها  </span>
	                	     </li>	                	   
	                	    <li>
	                	        <span> سوپر مارکت  </span> 
	                	     </li>	 
	                	 </ul>
	                </div>
					<div className="header-bottom-item header-bottom3">
	                	   <ul>
	                	      <li> !در دیجی کالا بفروشید </li>
	                	      <li> سوالی دارید؟ </li>

	                	   </ul>
	                     </div>
                   
	                <div className="header-bottom-item header-bottom4">
	                     <span>
	                	لطفا شهر خود را انتخاب کنید
	                	</span>
						<GrLocation className='GrLocation' />
	                </div>

	            </div>
				<Navbar />
	         </div> 	         
	       </div>);
}

export default Header;
