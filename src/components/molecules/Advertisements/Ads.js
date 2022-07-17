import React from "react";
import { AdsWrapper } from "./Ads.styled";
import AdOne from "./Ad_One";
import AdTwo from "./Ad_Two";

const Ads = () => {
  return (
    <AdsWrapper>
      <AdOne />
      <AdTwo />
    </AdsWrapper>
  );
};

export default Ads;
