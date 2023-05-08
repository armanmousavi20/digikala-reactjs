import React from 'react';
import './ImageList3.css';
import ImageList3img1 from '../../img/imagelist3img1.jpg';
import ImageList3img2 from '../../img/imagelist3img2.jpg';

 const ImageList2 = () =>
 {
 	return(<div className="ImageList3-container">
               <img className="ImageList3-img1" src={ImageList3img2} />
               <img className="ImageList3-img2" src={ImageList3img1} />                           
           </div>);
 }

 export default ImageList2;