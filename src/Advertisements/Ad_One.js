import React from "react";
import BackgroundBox from "../BackgroundBox/BackgroundBox";
import Button from "../Button/Button";
import Text from "../Text/Text";
import {
  AdContentWrapper,
  AdOneWrapper,
  AdTitleWrapper,
  LeftSideWrapper,
} from "./Ads.styled";

const Ad_One = () => {
  const handleClick = () => {
    alert("Zamów online")
  }
  return (
    <AdOneWrapper>
      <LeftSideWrapper>
        <AdTitleWrapper>
          <Text size="35px" weight="700" lineHeight="32px" color="white">
            Zestaw dla 3 osób
          </Text>
        </AdTitleWrapper>
        <AdContentWrapper>
          <Text size="20px" weight="600" lineHeight="32px" color="white">
            Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od <BackgroundBox>39 zł</BackgroundBox>
          </Text>
        </AdContentWrapper>
        <Button onClick={handleClick}>
          <Text color="white">Zamów online</Text>
        </Button>
      </LeftSideWrapper>
    </AdOneWrapper>
  );
};

export default Ad_One;
