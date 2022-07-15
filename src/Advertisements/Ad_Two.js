import React from "react";
import {
  AdTitleWrapper,
  AdTwoWrapper,
  LeftSideWrapper,
  AdContentWrapper,
  IconWrapper,
  IconsGroupWrapper,
} from "./Ads.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { ReactComponent as Huawei } from "../Assets/huawei-app-badge-9757fa 2.svg";
import BackgroundBox from "../BackgroundBox/BackgroundBox";

const Ad_Two = () => {
  const handleClick = () => {
    alert("Zamów online");
  };
  const handleIconClick = () => {
    alert("Huawei");
  };
  return (
    <AdTwoWrapper>
      <LeftSideWrapper>
        <AdTitleWrapper>
          <Text size="35px" weight="700" lineHeight="32px" color="white">
            UberEats
          </Text>
        </AdTitleWrapper>
        <AdContentWrapper mb="14px">
          <Text size="20px" weight="600" lineHeight="32px" color="white">
            Zamawiaj w aplikacji{" "}
            <BackgroundBox backgroundColor="#920303">
              {" "}
              10% taniej.
            </BackgroundBox>{" "}
            Pobierz aplikację UberEats już dziś.
          </Text>
        </AdContentWrapper>
        <IconsGroupWrapper>
          <IconWrapper onClick={handleIconClick}>
            <Huawei style={{ marginBottom: "23px", marginRight: "13px" }} />
          </IconWrapper>
          <IconWrapper onClick={handleIconClick}>
            <Huawei style={{ marginBottom: "23px", marginRight: "14px" }} />
          </IconWrapper>
          <IconWrapper onClick={handleIconClick}>
            <Huawei style={{ marginBottom: "23px" }} />
          </IconWrapper>
        </IconsGroupWrapper>
        <Button onClick={handleClick}>
          <Text color="white">Zamów online</Text>
        </Button>
      </LeftSideWrapper>
      {/* <img
        src={require("../Assets/iphone.png")}
        alt="iphone"
        style={{
          height: "480px",
          width: "271px",
          objectFit: "contain",
          position: "relative",
          left: "350px",
          bottom: "-26px",
        }}
    />*/}
    </AdTwoWrapper>
  );
};

export default Ad_Two;
