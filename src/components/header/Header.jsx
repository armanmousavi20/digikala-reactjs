import React,{useState , useEffect} from 'react';
import img1 from '../../img/1.gif';
import img2 from "../../img/2.svg"; 
import img3 from "../../img/location.png"; 
import menuicon from '../../img/header/menuicon.png';
import deleteicon from '../../img/header/deleteicon.jfif';
import './header.css';
import Navbar from './navbar';

const Header = () =>
{
	const[showCat, setShowCat] = useState(false);
    const[showList, setShowList] = useState(false);
    const[counter, setCounter] = useState(0);
    	
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
	            	     <i className="fa fa-shopping-cart" aria-hidden="true" 
						    onClick={()=>{document.getElementById('shoppingbasket').style.height="auto";
							                  document.getElementById('shoppingbasket').style.opacity="1";
											  document.getElementById('shoppingbasket').style.zIndex="9999";
						                      }}>								
							</i>

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
													}}> 
											&times;
									   </p>	
									</div>

                                    {/* p1 */}
									<div className='shoppingbasket-product'>
										<img src={img2} className='shoppingbasket-product-img' />
										<p> لبتاب asus </p>
										<p> 30000 تومان </p>  
                                        <div className='shoppingbasket-count'>
										   <p className='shoppingbasket-count-plus'> + </p>
										   <p className='shoppingbasket-count-number'> 1 </p>
   										   <p className='shoppingbasket-count-minus'> - </p>
                                        </div>
                                        <p> 30000 تومان </p>  
									<img src={deleteicon} className="deleteimg"/>
									</div>

									{/* p2 */}
									<div className='shoppingbasket-product'>
										<img src={img2} className='shoppingbasket-product-img' />
										<p> لبتاب asus </p>
										<p> 30000 تومان </p>  
                                        <div className='shoppingbasket-count'>
										   <p className='shoppingbasket-count-plus'> + </p>
										   <p className='shoppingbasket-count-number'> 1 </p>
   										   <p className='shoppingbasket-count-minus'> - </p>
                                        </div>
                                        <p> 30000 تومان </p>  
									<img src={deleteicon} className="deleteimg"/>
									</div>


									</div>

                            <hr />
							<div className='shoppingbasket-total-price'>
								<p>  : جمع کل  </p>
								<p>  300000 </p>
								<p> تومان </p>
							</div>

							<div className='shoppingbasket-bottom'> 
							    <button>
							    ادامه خرید 
								</button>
							</div>

							</div>
{/* snap basket */}

	                     <button className="header-btn">
	                         <span className="header-btn-span">								
	                              <i className="fa fa-sign-in" aria-hidden="true"></i>
	                         </span>	                         
	                         <span className="header-btn-span"> ورود  </span>
	                         <span className="header-btn-span"> | </span> 
	                          <span className="header-btn-span">ثبت نام   </span>
	                     </button>
	                </div>

	                <div className="header-search">
	                     <form className="header-form">
	                         <input type="text" placeholder="جستجو" />
	                         <i className="fa fa-search" aria-hidden="true"></i>
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
	                	        <i class="fa fa-fire" aria-hidden="true"></i>
	                	     </li>	                	                  	   
	                	    <li>
	                	        <span>
	                	      تخفیف ها و پیشنهادها 
	                	        </span>
                                <i class="fa fa-percent" aria-hidden="true"></i>
	                	      </li>	                	   
	                	    <li>
	                	       <span>پرفروش ترین ها  </span>
                               <i class="fa fa-trophy" aria-hidden="true"></i>
	                	     </li>	                	   
	                	    <li>
	                	        <span> سوپر مارکت  </span> 
	                	        <i class="fa fa-shopping-basket" aria-hidden="true"></i>                               
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
	                     <i class="fa fa-map-marker" aria-hidden="true"></i>
	                </div>

	            </div>
				<Navbar />
	         </div> 	         
	       </div>);
}

export default Header;
