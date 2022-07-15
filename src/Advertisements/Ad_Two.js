import React from "react";
import {
  AdTitleWrapper,
  AdTwoWrapper,
  LeftSideWrapper,
  AdContentWrapper,
  IconWrapper,
} from "./Ads.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { ReactComponent as Huawei } from "../Assets/huawei-app-badge-9757fa 2.svg";

const Ad_Two = () => {
  return (
    <AdTwoWrapper>
      <LeftSideWrapper>
        <AdTitleWrapper>
          <Text size="35px" weight="700" lineHeight="32px" color="white">
            UberEats
          </Text>
        </AdTitleWrapper>
        <AdContentWrapper mb="14px">
          <Text size="20px" weight="400" lineHeight="32px" color="white">
            Zamawiaj w aplikacji 10% taniej. Pobierz aplikację UberEats już
            dziś.
          </Text>
        </AdContentWrapper>
        <IconWrapper>
          <Huawei style={{ marginBottom: "23px", marginRight: "13px" }} />
        </IconWrapper>
        <IconWrapper>
          <Huawei style={{ marginBottom: "23px", marginRight: "14px" }} />
        </IconWrapper>
        <IconWrapper>
          <Huawei style={{ marginBottom: "23px" }} />
        </IconWrapper>
        <Button>
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
