import React from "react";
import Slider from "react-slick";
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
      <div>
        <SliderItem />
      </div>
    </Slider>
  );
};
{
  /*}
const slider = (
    <AutoplaySlider play={true} interval={2000}>
        <div><SliderItem /></div>
        <div><SliderItem /></div>
        <div><SliderItem /></div>
    </AutoplaySlider>
  );

  const Slider = () => {
    return (
      slider
    )
  }
*/
}
export default SimpleSlider;
