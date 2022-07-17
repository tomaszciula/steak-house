import React from "react";
import Slider from "react-slick";
import { sliderImages } from "../../../data";
import SliderItem from "./SliderItem";

const SimpleSlider = () => {
  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {sliderImages.map((item) => (
        <div>
          <SliderItem image={item} />
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
