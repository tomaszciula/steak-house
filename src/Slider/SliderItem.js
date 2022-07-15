import React from "react";
import {
  SliderItemContent,
  SliderItemPhoto,
  SliderItemWrapper,
  TextWrapper,
} from "./Slider.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";

const SliderItem = () => {
  return (
    <SliderItemWrapper>
      <SliderItemContent>
        <Text size="56px" weight="700" lineHeight="65px">
          Rabat 10% na pierwsze zamówienie
        </Text>
        <TextWrapper>
        <Text size="20px" lineHeight="25px" weight="300" fontFamily="Rubik">
          Do 20 stycznia złóż zamówienie na stronie i skorzystaj z promocji
          -10%. Spiesz się, czas trwania promocji do końca lutego.
        </Text>
        </TextWrapper>
        <Button>
          <Text color="white">Zamów online</Text>
        </Button>
      </SliderItemContent>
      <SliderItemPhoto>
        <img
          src={require("../Assets/Bitmap@2x.png")}
          alt="slider"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </SliderItemPhoto>
    </SliderItemWrapper>
  );
};
export default SliderItem;
