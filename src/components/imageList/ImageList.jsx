
import React from 'react';
import './imagelist.css';
import imagelistimg1 from '../../img/imagelistimg1.jpg';
import imagelistimg2 from '../../img/imagelistimg2.jpg';
import imagelistimg3 from '../../img/imagelistimg3.jpg';
import imagelistimg4 from '../../img/imagelistimg4.jpg';


const ImageList = () =>
{
	return(<div className="ImageList-container">
		        <ul>
		           <li>
		              <a href="#">
		                <img src={imagelistimg1} style={{ marginLeft : "-38px" }} />
		              </a>  
		           </li>

		           <li>
		              <a href="#">
		                  <img src={imagelistimg2} />
		              </a>    
		           </li>

		           <li>
		              <a href="#">
		                 <img src={imagelistimg3} />
		              </a>   
		           </li>

		           <li>
		              <a href="#" >
                        <img src={imagelistimg4}  />	
                      </a>  	           
                   </li>		        

		        </ul>
	       </div>);
}
export default ImageList