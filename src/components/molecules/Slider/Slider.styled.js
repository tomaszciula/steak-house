import styled from "styled-components";
import { device } from "../../../data";

export const SliderItemWrapper = styled.div`
  width: 100vw;
  max-height: auto;
  display: flex;
  @media ${device.laptop} {
    display: flex;
    width: 100vw;
    align-content: center;
  }
  @media ${device.mobileL} {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 50px 10px;
  }
`;

export const SliderItemContent = styled.div`
  display: flex;
  width: 50vw;
  height: auto;
  flex-direction: column;
  margin-top: 44px;
  margin-left: 149px;
  margin-right: 120px;
  @media ${device.laptop} {
    display: flex;
    width: 100vw;
    align-items: center;
  }
  @media ${device.mobileL} {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 10px 10px;
  }
`;

export const SliderItemPhoto = styled.div`
  display: flex;
  width: 50vw;
  @media ${device.laptop} {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  max-width: 506px;
  margin-bottom: 36px;
  margin-top: 0;
  @media ${device.laptop} {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
  @media ${device.mobileL} {
    display: flex;
    width: 100%;
    margin: 0 20px;
  }
`;
