import React from "react";
import './carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      adaptiveHeight: true
    };

  //   responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //      slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //      slidesToShow: 1,
  //     }
  //    }
  // ]


  const hotelCards = [
    {
      imageSrc: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/22a76fdf6749d4816a3093d923b1400c9835e1e3_1674305406.gif?x-oss-process=image',
      title: 'Studio Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 50/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/687b91c74a0a3657e50191fdf26fa96d19dee232_1674311259.jpg?x-oss-process=image/quality,q_95',
      title: 'Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/1d0eac69d8efb5e3cf81593d0014459547a8f858_1674473139.jpg?x-oss-process=image/quality,q_95',
      title: 'King Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
    {
      imageSrc: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/62c5e4f9c2d962dfa8fd4d897d872ac49b86078d_1674479642.jpg?x-oss-process=image/quality,q_95',
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