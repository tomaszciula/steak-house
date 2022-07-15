import styled from "styled-components";
import AdOneImg from "../Assets/Ad-1.png";
import Aplikacja from "../Assets/aplikacja@2x.png";

export const AdsWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
`;

export const AdOneWrapper = styled.div`
  background-image: url(${AdOneImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50%;
  height: 443px;
`;

export const AdTwoWrapper = styled.div`
  background-image: url(${Aplikacja});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50%;
  height: 443px;
`;
export const LeftSideWrapper = styled.div`
  flex-direction: column;
  margin-left: 124px;
  margin-top: 82px;
`;

export const AdTitleWrapper = styled.div`
  color: white;
  margin-bottom: 29px;
`;

export const AdContentWrapper = styled.div`
  width: 324px;
  margin-bottom: ${(props) => props.mb || "32px"};
`;

export const IconWrapper = styled.div`
&:hover {
  cursor: pointer;
}
`