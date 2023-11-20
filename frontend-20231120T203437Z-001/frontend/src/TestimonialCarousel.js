import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Testimonial";
import testimonialsData from "./testimonialsData";
import "./styles.css"; // Import the CSS file

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial-carousel">
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
