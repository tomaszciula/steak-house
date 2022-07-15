import React from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";
import {
  AdContentWrapper,
  AdOneWrapper,
  AdTitleWrapper,
  LeftSideWrapper,
} from "./Ads.styled";

const Ad_One = () => {
  return (
    <AdOneWrapper>
      <LeftSideWrapper>
        <AdTitleWrapper>
          <Text size="35px" weight="700" lineHeight="32px" color="white">
            Zestaw dla 3 osób
          </Text>
        </AdTitleWrapper>
        <AdContentWrapper>
          <Text size="20px" weight="400" lineHeight="32px" color="white">
            Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od 39 zł
          </Text>
        </AdContentWrapper>
        <Button>
          <Text color="white">Zamów online</Text>
        </Button>
      </LeftSideWrapper>
    </AdOneWrapper>
  );
};

export default Ad_One;
