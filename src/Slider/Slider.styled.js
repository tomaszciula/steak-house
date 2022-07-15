import styled from "styled-components";
import { device } from "../data";

export const SliderWrapper = styled.div`

`

export const SliderItemWrapper = styled.div`
width: 100vw;
height: auto;
display: flex;
justify-content: space-between;
color: white;
@media ${device.tablet} {
    flex-direction: column;
  }
`
export const SliderItemContent = styled.div`
display: flex;
max-width: 935px;
flex-direction: column;
margin-top: 44px;
margin-left: 149px;
margin-right: 120px;

`
export const SliderItemPhoto = styled.div`
display: flex;
width: 924px;
`
export const SliderItemTitle = styled.div`

`
export const TextWrapper = styled.div`
max-width: 506px;
margin-bottom: 36px;
text-align: justify;
margin-top: 0;
`