import React from "react";
import Ads from "../Advertisements/Ads";
import Header from "../Header/Header";
import LogoBar from "../LogoBar/LogoBar";
import Slider from "../Slider/Slider";
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
