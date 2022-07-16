import styled from "styled-components";
import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  .slick-list {
    margin-top: 50px;
    width: 100vw !important;
  }
  .slick-track {
    align-items: center !important;
  }
  .slick-slider {
    
  }
`;

export const LogoBarWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BarItemWrapper = styled.div`
  width: auto;
  height: 45px;
`;
