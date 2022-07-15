import styled from "styled-components";
import { device } from "../data";

export const LogoBarWrapper = styled.div`
  max-width: 1184px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 368px;
  margin-right: 368px;
  @media ${device.tablet} {
    margin-left: 16px;
    margin-right: 16px;
  }
  @media ${device.mobileL} {
    margin-left: 16px;
    margin-right: 16px;
    overflow: auto;
  }
`;

export const BarItemWrapper = styled.div``;
