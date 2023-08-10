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
    // centerPadding: "5px",
  };
  return (
    <div className="simple-slider h-[539px] w-[56.67vw]">
      <Slider {...settings} className="">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide border-0 rounded-ss-[128px] rounded-ee-[128px] overflow-hidden h-full w-full"
          >
            {slide}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
