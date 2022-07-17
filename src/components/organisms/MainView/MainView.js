import React from "react";
import Ads from "../../molecules/Advertisements/Ads";
import Header from "../../molecules/Header/Header";
import LogoBar from "../../molecules/LogoBar/LogoBar";
import Slider from "../../molecules/Slider/Slider";
import { MainViewWrapper } from "./MainView.styled";

const MainView = () => {
  return (
    <MainViewWrapper>
      <Header />
      <Slider />
      <LogoBar />
      <Ads />
    </MainViewWrapper>
  );
};

export default MainView;
