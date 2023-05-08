import React,{useState} from 'react';
import img1 from '../../img/1.gif';
import img2 from "../../img/2.svg"; 
import './header.css';

const Header = () =>
{
	const[showCat, setShowCat] = useState(true);
  const[showList, setShowList] = useState(false);

	window.onscroll = () =>{if( window.scrollY > document.getElementById('img-header').clientHeight )
                               {
                                   document.getElementById('header-stick').classList.add("header-sticky");
                               }

                             if( window.scrollY < 50 )                              
                              {
                              document.getElementById('header-stick').classList.remove("header-sticky");
                              } 
                             }
  
    const showProductCategorymenu = async() =>{    	    	
    	setShowCat(await true);
    	document.getElementById('header-product-category').style.height = "400px";
    	document.getElementById('header-product-category').style.opacity = "1";
    	 console.log(`showProductCategorymenu : showlist=${showList} ,showCat=${showCat} `);
    	
    }

       const hiddenProductCategorymenu = () =>{
    	console.log(`hiddenProductCategorymenu : showlist=${showList} ,showCat=${showCat} `)
   	if(showList === false){
   	    setTimeout(() =>{
   	    	    	document.getElementById('header-product-category').style.height = "0";
   	    	    	document.getElementById('header-product-category').style.opacity = "0";
   	    	    	setShowCat(false);   	    	    	
   	              } , 1000);
   	  }
    }

      const showProductCategorylist = () =>{
    	console.log(`showProductCategorylist : showlist=${showList} ,showCat=${showCat} `)
    	if(showCat)
    	{
    	document.getElementById('header-product-category').style.height = "400px";
    	document.getElementById('header-product-category').style.opacity = "1";
    	setShowList(true);
    	setShowCat(false)
     }    
    }


   const hiddenProductCategorylist = () =>{
   console.log(`hiddenProductCategorylist : showlist=${showList} ,showCat=${showCat} `)
   setShowList(false);
   	if(showCat === false){
   	    setTimeout(() =>{
   	    	    	document.getElementById('header-product-category').style.height = "0";
   	    	    	document.getElementById('header-product-category').style.opacity = "0";
   	    	    	console.log("hidden hiddenProductCategorymenu")
   	    	    	setShowCat(false);
   	              } , 1000);
   	  }
    }
    
    const hiddenmobie = () =>{
    }
    const showmobile = () =>{
    	     document.querySelector('.header-product-category-right-mobile').style.display = "flex";
    	     document.querySelector('.header-product-category-right-digital').style.display = "none";
    	     document.querySelector('.header-product-category-right-car').style.display = "none";
    	     document.querySelector('.header-product-category-right-clothes').style.display = "none";
    	     document.querySelector('.header-product-category-right-supermarket').style.display = "none";
    	     document.querySelector('.header-product-category-right-beauty').style.display = "none";
    }


    const hiddendigital = () =>{
    }
    const showdigital = () =>{
    	     document.querySelector('.header-product-category-right-digital').style.display = "flex";
    	     document.querySelector('.header-product-category-right-mobile').style.display = "none";
    	     document.querySelector('.header-product-category-right-car').style.display = "none";
    	     document.querySelector('.header-product-category-right-clothes').style.display = "none";
    	     document.querySelector('.header-product-category-right-supermarket').style.display = "none";
    	     document.querySelector('.header-product-category-right-beauty').style.display = "none";
    }


    const hiddencar = () =>{
    }
    const showcar = () =>{
    	     document.querySelector('.header-product-category-right-car').style.display = "flex";
    	     document.querySelector('.header-product-category-right-mobile').style.display = "none";
    	     document.querySelector('.header-product-category-right-digital').style.display = "none";
    	     document.querySelector('.header-product-category-right-clothes').style.display = "none";
    	     document.querySelector('.header-product-category-right-supermarket').style.display = "none";
    	     document.querySelector('.header-product-category-right-beauty').style.display = "none";
    }


    const hiddenclothes = () =>{
    }
    const showclothes = () =>{
    	     document.querySelector('.header-product-category-right-clothes').style.display = "flex";
    	     document.querySelector('.header-product-category-right-mobile').style.display = "none";
    	     document.querySelector('.header-product-category-right-car').style.display = "none";
    	     document.querySelector('.header-product-category-right-digital').style.display = "none";
    	     document.querySelector('.header-product-category-right-supermarket').style.display = "none";
    	     document.querySelector('.header-product-category-right-beauty').style.display = "none";
    }


   const hiddensuper = () =>{
    }
    const showsuper = () =>{
    	     document.querySelector('.header-product-category-right-supermarket').style.display = "flex";
    	     document.querySelector('.header-product-category-right-mobile').style.display = "none";
    	     document.querySelector('.header-product-category-right-car').style.display = "none";
    	     document.querySelector('.header-product-category-right-clothes').style.display = "none";
    	     document.querySelector('.header-product-category-right-digital').style.display = "none";
    	     document.querySelector('.header-product-category-right-beauty').style.display = "none";
    }

       const hiddenbeauty = () =>{
    }
    const showbeauty = () =>{
    	     document.querySelector('.header-product-category-right-beauty').style.display = "flex";
    	     document.querySelector('.header-product-category-right-mobile').style.display = "none";
    	     document.querySelector('.header-product-category-right-car').style.display = "none";
    	     document.querySelector('.header-product-category-right-clothes').style.display = "none";
    	     document.querySelector('.header-product-category-right-supermarket').style.display = "none";
    	     document.querySelector('.header-product-category-right-digital').style.display = "none";
    }

	return(<div className="container" id="header">
	            <div className="img-header" id="img-header">
	                <img src={img1} />
	            </div>

             <div className="header-stick" id="header-stick">            
	            <div className="header-middle" id="header-middle">
	            	<div className="left-header">
	            	     <i className="fa fa-shopping-cart" aria-hidden="true"></i>
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
	                    <img src={img2} />
	                </div>

	            </div>
                              
	            <div className="header-bottom" id="header-bottom">
	                
	                <div className="header-bottom-item header-bottom1"
	                     onMouseOver={showProductCategorymenu}
	                     onMouseLeave={hiddenProductCategorymenu}>
	                	دسته بندی کالاها
	                	 <i class="fa fa-bars" aria-hidden="true"></i>
	                </div>

                   	<div id="right-line">
                    </div>

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

	                <div id="box">
                    </div>



	                <div className="header-bottom-item header-bottom3">
	                	<ul>
	                	    <li> در دیجی کالا بفروشید! </li>
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
	         </div> 
	         
	         <div className="header-product-category" 
	              id="header-product-category"
	               onMouseLeave={hiddenProductCategorylist}
	               onMouseOver={showProductCategorylist}>

	               <div className="header-product-category-left">

	               	    <div className="header-product-category-left-item"
	                         onMouseOver={showmobile}>
	               	    	<i class="fa fa-mobile" aria-hidden="true"></i>
	               	         <span> موبایل </span>
	               	    </div>
	               	    
	               	    <div className="header-product-category-left-item"
	                         onMouseOver={showdigital}>
	               	    	<i class="fa fa-desktop" aria-hidden="true"></i>
	               	    	<span> کالای دیجیتال  </span>
	               	    </div>

	               	    <div className="header-product-category-left-item"
	                         onMouseOver={showcar}>
	               	    	<i class="fa fa-car" aria-hidden="true"></i>
	               	    	<span> خودرو و تجهیزات صنعتی </span>
	               	    </div>

	               	    <div className="header-product-category-left-item"
	                         onMouseOver={showclothes}>
   	               	        <i class="fa fa-odnoklassniki" aria-hidden="true"></i>
	               	    	<span> مد و پوشاک </span>
	               	    </div>

	               	     <div className="header-product-category-left-item"
	                          onMouseOver={showsuper}>
	               	        <i class="fa fa-shopping-basket" aria-hidden="true"></i>
	               	    	<span> کالاهای سوپرمارکتی </span>
	               	    </div>
	               	     
	               	    <div className="header-product-category-left-item"
	                         onMouseOver={showbeauty}>
	               	        <i class="fa fa-heartbeat" aria-hidden="true"></i>
	               	    	<span>  زیبایی و سلامت  </span>
	               	    </div>

	               </div>

	               <div className="header-product-category-right">

	               	   <div className="header-product-category-right-mobile">
	               	   	    
                            <div className="header-product-category-right-mobile-col2">
                                  <h3> گوشی بر اساس قیمت </h3>
                                  <span> 2 میلیون </span>
                                  <span> 5 میلیون </span>
                                  <span> 8 میلیون </span>
                                  <span> 10 میلیون </span>
                                  <span> 15 میلیون </span>
                            </div>

                            <div className="header-product-category-right-mobile-col1">
	               	   	    	<h3> برندهای گوشی  </h3>
	               	   	    	<span> گوشی اپل </span>
	               	   	    	<span> گوشی سامسونگ </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    </div>

                        </div>

	               	   	  <div className="header-product-category-right-digital">	               	   	    
                            <div className="header-product-category-right-mobile-col2">
                                  <h3>  کالای دیجیتال   </h3>
                                  <span> 2 میلیون </span>
                                  <span> 5 میلیون </span>
                                  <span> 8 میلیون </span>
                                  <span> 10 میلیون </span>
                                  <span> 15 میلیون </span>
                            </div>

                            <div className="header-product-category-right-mobile-col1">
	               	   	    	<h3> برندهای گوشی  </h3>
	               	   	    	<span> گوشی اپل </span>
	               	   	    	<span> گوشی سامسونگ </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    </div>
	               	   </div>


	               	   	  <div className="header-product-category-right-car">	               	   	    
                            <div className="header-product-category-right-mobile-col2">
                                  <h3> car  </h3>
                                  <span> 2 میلیون </span>
                                  <span> 5 میلیون </span>
                                  <span> 8 میلیون </span>
                                  <span> 10 میلیون </span>
                                  <span> 15 میلیون </span>
                            </div>

                            <div className="header-product-category-right-mobile-col1">
	               	   	    	<h3> car </h3>
	               	   	    	<span> گوشی اپل </span>
	               	   	    	<span> گوشی سامسونگ </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    </div>
	                      </div>


	                     <div className="header-product-category-right-clothes">	               	   	    
                            <div className="header-product-category-right-mobile-col2">
                                  <h3> clothes </h3>
                                  <span> 2 میلیون </span>
                                  <span> 5 میلیون </span>
                                  <span> 8 میلیون </span>
                                  <span> 10 میلیون </span>
                                  <span> 15 میلیون </span>
                            </div>

                            <div className="header-product-category-right-mobile-col1">
	               	   	    	<h3> clothes  </h3>
	               	   	    	<span> گوشی اپل </span>
	               	   	    	<span> گوشی سامسونگ </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    </div>
	                    </div>

	                   <div className="header-product-category-right-supermarket">	               	   	    
                            <div className="header-product-category-right-mobile-col2">
                                  <h3>  super market  </h3>
                                  <span> 2 میلیون </span>
                                  <span> 5 میلیون </span>
                                  <span> 8 میلیون </span>
                                  <span> 10 میلیون </span>
                                  <span> 15 میلیون </span>
                            </div>
                            <div className="header-product-category-right-mobile-col1">
	               	   	    	<h3>  super market  </h3>
	               	   	    	<span> گوشی اپل </span>
	               	   	    	<span> گوشی سامسونگ </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    </div>
	                    </div>


	                    <div className="header-product-category-right-beauty">	               	   	    
                            <div className="header-product-category-right-mobile-col2">
                                  <h3> beauty  </h3>
                                  <span> 2 میلیون </span>
                                  <span> 5 میلیون </span>
                                  <span> 8 میلیون </span>
                                  <span> 10 میلیون </span>
                                  <span> 15 میلیون </span>
                            </div>

                            <div className="header-product-category-right-mobile-col1">
	               	   	    	<h3> بbeauty </h3>
	               	   	    	<span> گوشی اپل </span>
	               	   	    	<span> گوشی سامسونگ </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    	<span> گوشی شیائومی  </span>
	               	   	    </div>
	                    </div>

           
                 </div>
             </div>

	       </div>);
}

export default Header;
