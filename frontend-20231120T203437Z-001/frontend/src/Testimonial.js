import React from "react";
import "./styles.css";
const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial">
       <div className="testimonial-image">
        <img src={testimonial.image} alt={testimonial.name} />
      </div> 
      <p className="testimonial-text">{testimonial.text}</p>
      <p className="testimonial-name"><b>{testimonial.name}</b></p>
    </div>
  );
};

export default Testimonial;
