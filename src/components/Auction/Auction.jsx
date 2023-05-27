import React from 'react';
import './Auction.css';
import auctionimg1 from '../../img/auctionimg1.webp'
import auctionimg2 from '../../img/auctionimg2.webp'
import auctionimg3 from '../../img/auctionimg3.webp'
import auctionimg4 from '../../img/auctionimg4.webp'
import auctionimg5 from '../../img/auctionimg5.webp'
import auctionimg6 from '../../img/auctionimg6.webp'
import auctionimg7 from '../../img/auctionimg7.webp'
import auctionimg8 from '../../img/auctionimg8.webp'
import auctionimg9 from '../../img/auctionimg9.webp'
import auctionimg10 from '../../img/auctionimg10.webp'
import auctionimg11 from '../../img/auctionimg11.webp'
import auctionimg12 from '../../img/auctionimg12.webp'
import auctionimg13 from '../../img/auctionimg13.webp'
import auctionimg14 from '../../img/auctionimg14.webp'
import auctionimg15 from '../../img/auctionimg15.webp'
import auctionimg16 from '../../img/auctionimg16.webp'
import auctionimg17 from '../../img/auctionimg17.webp'
import auctionimg18 from '../../img/auctionimg18.webp'

//redux
import { addToCart } from '../../features/shoppingcart/shoppingcartSlice';
import { useDispatch } from "react-redux";

const Auction = () =>{
   //redux   	 
		 const dispatch = useDispatch();
		 const handleAddToCart = (data) => {
			  dispatch(addToCart({
					 ...data,      
					 quantity: 1
			  }))
		  }
	return(<div className="Auction-container" id='Auction-container'>
		      <h1>
		        منتخب محصولات تخفیف و حراج
	          </h1>
       
         <div className="Auction-products"> 

	       <div className="Auction-product" 
	            style={{ borderRight:"1px solid #e3e0da", borderBottom:"1px solid #e3e0da" }}>
 	            <div>
                   <img src={auctionimg1} />  
                   <button onClick={()=>{  handleAddToCart({id:18,title:'مرغ بسته ای',price:160000,
                                                          count:1,
                                                           img:auctionimg1})
                                        }}> + 
                   </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       <div className="Auction-product"
	            style={{ borderRight:"1px solid #e3e0da", borderBottom:"1px solid #e3e0da" }}>
 	            <div>
                   <img src={auctionimg2} />  
                   <button onClick={()=>{ handleAddToCart({id:19,title:'پنیر',price:160000,
                                                          count:1,
                                                           img:auctionimg2})
                                        }}> 
                                        + 
                    </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       <div className="Auction-product" 
	       	     style={{ borderRight:"1px solid #e3e0da", borderBottom:"1px solid #e3e0da" }}>
 	            <div>
                   <img src={auctionimg3} />  
                   <button onClick={()=>{  handleAddToCart({id:20,title:'سیب زمینی',price:160000,
                                                          count:1,
                                                           img:auctionimg3})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       	<div className="Auction-product" 	            
	       	     style={{ borderRight:"1px solid #e3e0da", borderBottom:"1px solid #e3e0da" }}>

 	            <div>
                   <img src={auctionimg4} />  
                   <button onClick={()=>{  handleAddToCart({id:21,title:'روغن جامد',price:160000,
                                                          count:1,
                                                           img:auctionimg4})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       <div className="Auction-product"
	            style={{ borderRight:"1px solid #e3e0da", borderBottom:"1px solid #e3e0da" }}>
 	            <div>
                   <img src={auctionimg5} />  
                   <button onClick={()=>{  handleAddToCart({id:22,title:'هندزفری',price:160000,
                                                          count:1,
                                                           img:auctionimg5})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       	       <div className="Auction-product"
	       	       	    style={{ borderBottom:"1px solid #e3e0da" }}>
 	            <div>
                   <img src={auctionimg6} />  
                   <button onClick={()=>{  handleAddToCart({id:23,title:'پنیر',price:160000,
                                                          count:1,
                                                           img:auctionimg6})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       	       <div className="Auction-product" 
	       	       	    style={{ borderRight:"1px solid #e3e0da", borderBottom:"1px solid #e3e0da" }}>

 	            <div>
                   <img src={auctionimg7} />  
                   <button onClick={()=>{  handleAddToCart({id:24,title:'محلول',price:160000,
                                                          count:1,
                                                           img:auctionimg7})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       <div className="Auction-product"
	       	    style={{ borderRight:"1px solid #e3e0da", borderBottom:"1px solid #e3e0da" }}>

 	            <div>
                   <img src={auctionimg8} />  
                   <button onClick={()=>{  handleAddToCart({id:25,title:'ادکلن',price:160000,
                                                          count:1,
                                                           img:auctionimg8})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       <div className="Auction-product"
	       	    style={{ borderRight:"1px solid #e3e0da", borderBottom:"1px solid #e3e0da" }}>
 	            <div>
                   <img src={auctionimg9} />  
                   <button onClick={()=>{  handleAddToCart({id:26,title:'شامپو',price:160000,
                                                          count:1,
                                                           img:auctionimg9})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       <div className="Auction-product" 	           
	            style={{ borderRight:"1px solid #e3e0da", borderBottom:"1px solid #e3e0da" }}>

 	            <div>
                   <img src={auctionimg10} />  
                   <button onClick={()=>{  handleAddToCart({id:27,title:'همبرگر',price:160000,
                                                          count:1,
                                                           img:auctionimg10})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       <div className="Auction-product" 	            
	            style={{ borderRight:"1px solid #e3e0da", borderBottom:"1px solid #e3e0da" }}>
 	            <div>
                   <img src={auctionimg11} />  
                   <button onClick={()=>{  handleAddToCart({id:28,title:'روغن مایع',price:160000,
                                                          count:1,
                                                           img:auctionimg11})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       <div className="Auction-product"
	       	    style={{  borderBottom:"1px solid #e3e0da" }}>

 	            <div>
                   <img src={auctionimg12} />  
                   <button onClick={()=>{  handleAddToCart({id:29,title:'ماست',price:160000,
                                                          count:12,
                                                           img:auctionimg7})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       <div className="Auction-product"
	       	    style={{ borderRight:"1px solid #e3e0da" }}>

 	            <div>
                   <img src={auctionimg13} />  
                   <button onClick={()=>{  handleAddToCart({id:30,title:'کارتن',price:160000,
                                                          count:1,
                                                           img:auctionimg13})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       	       <div className="Auction-product"
	       	       	    style={{ borderRight:"1px solid #e3e0da" }}>

 	            <div>
                   <img src={auctionimg14} />  
                   <button onClick={()=>{  handleAddToCart({id:31,title:'عطر',price:160000,
                                                          count:1,
                                                           img:auctionimg14})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       	       <div className="Auction-product"
	       	       	    style={{ borderRight:"1px solid #e3e0da" }}>

 	            <div>
                   <img src={auctionimg15} />  
                   <button onClick={()=>{  handleAddToCart({id:32,title:'کفش اسپرت',price:160000,
                                                          count:1,
                                                           img:auctionimg15})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


	       	       <div className="Auction-product"
	       	       	    style={{ borderRight:"1px solid #e3e0da" }}>

 	            <div>
                   <img src={auctionimg16} />  
                   <button onClick={()=>{  handleAddToCart({id:33,title:'پوشک',price:160000,
                                                          count:1,
                                                           img:auctionimg16})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>

	       	<div className="Auction-product"
	       		 style={{ borderRight:"1px solid #e3e0da" }}>

 	            <div>
                   <img src={auctionimg17} />  
                   <button onClick={()=>{  handleAddToCart({id:34,title:'ماکارونی',price:160000,
                                                          count:1,
                                                           img:auctionimg17})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>

	       <div className="Auction-product">
 	            <div>
                   <img src={auctionimg18} />  
                   <button onClick={()=>{  handleAddToCart({id:35,title:'تخم مرغ',price:160000,
                                                          count:1,
                                                           img:auctionimg18})
                                        }}> + </button>
                   <br />
                   <div className="Auction-price-row">
                      <span className="Auction-auctionprice"> 160,000 تومان </span>
                      <p className="Auction-discount"> 15% </p>
                   </div>
                   <br />
                   <span className="Auction-original-price"> 180,000 تومان  </span>
	            </div>
	       </div>


        </div>
	   </div>);
}

export default Auction;