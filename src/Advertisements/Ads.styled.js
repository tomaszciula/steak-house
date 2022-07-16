import styled from "styled-components";
import AdOneImg from "../Assets/Ad-1.png";
import Aplikacja from "../Assets/aplikacja@2x.png";
import { device } from "../data";

export const AdsWrapper = styled.div`
  display: flex;
  max-width: 100%;
  height: auto;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const AdOneWrapper = styled.div`
  display: flex;
  background-image: url(${AdOneImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50%;
  height: 415px;
  margin: 8px;
  @media ${device.tablet} {
    width: 100vw;
  }
`;

export const AdTwoWrapper = styled.div`
  display: flex;
  background-image: url(${Aplikacja});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50%;
  height: 415px;
  margin: 8px;
  @media ${device.tablet} {
    width: 100vw;
  }
`;
export const LeftSideWrapper = styled.div`
  width: 289px;
  height: 63px;
  flex-direction: column;
  margin-left: 124px;
  margin-top: 12px;
`;

export const AdTitleWrapper = styled.div`
  color: white;
`;

export const AdContentWrapper = styled.div`
  max-width: 380px;
  margin-bottom: ${(props) => props.mb || "32px"};
`;

export const IconsGroupWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
