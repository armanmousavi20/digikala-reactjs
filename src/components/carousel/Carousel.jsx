import React from "react";
import './carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../img/slider1/img1.gif';
import img2 from '../../img/slider1/img2.jpg';
import img3 from '../../img/slider1/img3.jpg';
import img4 from '../../img/slider1/img4.jpg';


export default function Carousel() {
var settings = {
      className: "slider-body",
      dots: true,
      navigation : true,
      arrows : true,
      infinite: true,
      autoplay: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };




  const hotelCards = [
    {
      imageSrc: img1,
      title: 'Studio Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 50/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc: img2,
      title: 'Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc: img3,
      title: 'King Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
    {
      imageSrc: img4,
      title: 'Royal Suite',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
  ]
  return (
      <div className="slider-container">
        <Slider {...settings} id="slider-body">
          {
            hotelCards.map((item) => (
            <div key={item.title} className="sliderimg-div">
              <img  src={item.imageSrc}  alt={item.title} className="slider-img" />
            </div>
          ))}              
        </Slider>
      </div>
  )

};