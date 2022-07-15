import styled from "styled-components";
import AdOneImg from "../Assets/Ad-1.png";
import Aplikacja from "../Assets/aplikacja@2x.png";
import { device } from "../data";

export const AdsWrapper = styled.div`
  display: flex;
  max-width: 100vw;
  height: auto;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const AdOneWrapper = styled.div`
  background-image: url(${AdOneImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50vw;
  height: 443px;
  margin: 8px;
  @media ${device.tablet} {
    width: 100vw;
  }
`;

export const AdTwoWrapper = styled.div`
  background-image: url(${Aplikacja});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50vw;
  height: 443px;
  margin: 8px;
  @media ${device.tablet} {
    width: 100vw;
  }
`;
export const LeftSideWrapper = styled.div`
  flex-direction: column;
  margin-left: 124px;
  margin-top: 82px;
`;

export const AdTitleWrapper = styled.div`
  color: white;
`;

export const AdContentWrapper = styled.div`
  width: 380px;
  margin-bottom: ${(props) => props.mb || "32px"};
`;

export const IconsGroupWrapper = styled.div`
display: flex;
`

export const IconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
