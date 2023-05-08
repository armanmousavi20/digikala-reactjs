import React from 'react';
import './imagelist2.css';
import ImageList2img1 from '../../img/imagelist2img1.jpg';
import ImageList2img2 from '../../img/imagelist2img2.jpg';

 const ImageList2 = () =>
 {
 	return(<div className="ImageList2-container">
               <img className="ImageList2-img1" src={ImageList2img1} />
               <img className="ImageList2-img2" src={ImageList2img2} />                           
           </div>);
 }

 export default ImageList2;