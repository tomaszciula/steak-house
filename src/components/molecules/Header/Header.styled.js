import styled from "styled-components";
import { device } from "../../../data";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100vw;
  max-height: 81px;
  align-content: center;
  justify-content: space-between;
  margin-top: 12px;
  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    img {
      margin: 0 10px !important;
    }
  }
  @media ${device.mobileL} {
    flex-direction: column;
    align-content: center;
    margin: 0 10px;
    img {
      margin: 0 10px !important;
    }
  }
`;

export const LeftSectionWrapper = styled.div`
  width: auto;
  display: flex;
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

export const LeftSectionItemWrapper = styled.div`
  cursor: pointer;
  width: max-content;
  margin-right: 57px;
  @media ${device.tablet} {
    margin-right: 10px;
  }
  @media ${device.mobileS} {
    flex-direction: column;
    img {
      margin: 0 10px !important;
    }
  }
`;

export const RightSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  margin-right: 143px;
  @media ${device.tablet} {
    margin-right: 0;
  }
`;

export const LogoWrapper = styled.div`
  max-width: 48px;
  margin-left: 148.5px;
  margin-right: 68.5px;
`;

export const RightSectionItemWrapper = styled.div`
  cursor: pointer;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 39px;
  line-hight: ;
`;
