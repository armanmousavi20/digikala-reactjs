import React from 'react';
import './menus.css';
import pic1 from '../../img/menus1.png';
import pic2 from '../../img/menus2.png';
import pic3 from '../../img/menus3.png';
import pic4 from '../../img/menus4.png';
import pic5 from '../../img/menus5.png';
import pic6 from '../../img/menus6.png';
import pic7 from '../../img/menus7.png';

const Menus = () =>
{
	return(<div className="container-menus">
		       <ul>
		           <li>
		              <a href="#" className="menus-link">
		                 <span className="menus-more"> ... </span>
                         <span> بیشتر </span>
                      </a>   
		           </li>

		           <li>
		              <a href="#" className="menus-link">
		                <img src={pic7} />
		                <span> دیجی پلاس </span>
		              </a>  
		           </li>

		           <li>
		              <a href="#" className="menus-link">
		                <img src={pic6} />
                        <span> کارت هدیه </span>
                      </a>  
		           </li>

		           <li>
		              <a href="#" className="menus-link">
		                 <img src={pic5} />
                         <span> خرید سر ماه </span>
                      </a>   
		           </li>

		           <li>
		              <a href="#" className="menus-link">
		                <img src={pic4} className="menus-bigbuy" />
                        <span> خرید عمده و سازمانی </span>
                      </a>  
		           </li>

		           <li> 
		                <a href="#" className="menus-link">
		                 <img src={pic3} />
                          <span> دیجی پی </span> 
                        </a>
		           </li>

		            <li>
		               <a href="#" className="menus-link">
		                    <img src={pic2} />
                           <span> حراج جت </span>
                       </a> 
		           </li>


		           <li> 
                      <a href="#" className="menus-link">
                        <img src={pic1} />
                        <span> دیجی کالا جت </span> 
                      </a>
		           </li>
		       
		       </ul>
	       </div>);
}
export default Menus;