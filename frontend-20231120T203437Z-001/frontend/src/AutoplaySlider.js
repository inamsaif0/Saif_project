import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutoplaySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0, // Auto-advance delay
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const images = [
    '134.webp',
    '135.webp',
    '136.webp',
    '137.webp',
    '138.webp',
  ];

  return (
    <div className="autoplay-slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={require(`./images/${image}`)} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoplaySlider;
