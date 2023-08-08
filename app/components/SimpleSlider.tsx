import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SimpleSliderProps {
  slides: React.ReactNode[];
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="simple-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
