import React from "react";
import { BarItemWrapper, LogoBarWrapper, StyledSlider } from "./LogoBar.styled";

const LogoBar = () => {
  const imageStyle = { height: "100%", width: "100%", objectFit: "contain" };
  var settings = {
    autoplay: true,
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 0,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          centerMode: true,
          slidesToShow: 1,
          infinite: true,

          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <LogoBarWrapper>
      <StyledSlider {...settings}>
        <BarItemWrapper>
          <img
            src={require("../../../Assets/PysznePL.png")}
            alt="pyszne pl logo"
            style={imageStyle}
          />
        </BarItemWrapper>
        <BarItemWrapper>
          <img
            src={require("../../../Assets/DeliGoo.png")}
            alt="pyszne pl logo"
            style={imageStyle}
          />
        </BarItemWrapper>
        <BarItemWrapper>
          <img
            src={require("../../../Assets/Glovo.png")}
            alt="pyszne pl logo"
            style={imageStyle}
          />
        </BarItemWrapper>
        <BarItemWrapper>
          <img
            src={require("../../../Assets/UberEats.png")}
            alt="pyszne pl logo"
            style={imageStyle}
          />
        </BarItemWrapper>
        <BarItemWrapper>
          <img
            src={require("../../../Assets/BoltFood.png")}
            alt="pyszne pl logo"
            style={imageStyle}
          />
        </BarItemWrapper>
      </StyledSlider>
    </LogoBarWrapper>
  );
};

export default LogoBar;
