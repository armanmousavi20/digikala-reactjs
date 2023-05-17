import React from 'react';
import './DigiClub.css';
import digiclubimg1 from '../../img/digiclubimg1.png';
import digiclubimg2 from '../../img/digiclubimg2.png';
import digiclubimg3 from '../../img/digiclubimg3.png';

const DigiClub = () =>{
  return(<div className="DigiClub-container">
                
             <div className="DigiClub-links">  
                 <a href="#" className="DigiClub-sublinks"
                    style={{ borderRadius : "10px 0 0 10px" }}> 
                    <img src={digiclubimg1} />
                    <span> جایزه ها </span>
                    <i class="fa fa-gift" aria-hidden="true"></i>
		           </a>

		         <a href="#" className="DigiClub-sublinks"> 
                    <img src={digiclubimg2} />
                    <span> 
                                ماموریت ها
                    </span>
                    <i class="fa fa-suitcase" aria-hidden="true"></i>
		         </a>

		         <a href="#" className="DigiClub-sublinks"
		            style={{ borderRadius : "0 10px 10px 0" }}> 
                    <img src={digiclubimg3} />
                    <span>
                           چرخ و بخت
                    </span>
                    <i class="fa fa-compass" aria-hidden="true"></i>
		         </a>
             </div>  


		      <div className="DigiClub-item"> <span> DigiClub </span>  </div>
              

	      </div>)
}

export default DigiClub;