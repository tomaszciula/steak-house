import React from "react";
import {
  SliderItemContent,
  SliderItemPhoto,
  SliderItemWrapper,
  TextWrapper,
} from "./Slider.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";
import BackgroundBox from "../BackgroundBox/BackgroundBox";

const SliderItem = (props) => {
  const handleClick = () => {
    alert("Zamów online");
  };
  return (
    <SliderItemWrapper>
      <SliderItemContent>
        <Text size="48px" weight="700" lineHeight="65px">
          <BackgroundBox>Rabat 10%</BackgroundBox> na pierwsze zamówienie!
        </Text>
        <TextWrapper>
          <Text size="20px" lineHeight="25px" weight="300" fontFamily="Rubik">
            Do 20 stycznia złóż zamówienie na stronie i skorzystaj z{" "}
            <b>promocji -10%.</b> Spiesz się, czas trwania promocji do końca
            lutego.
          </Text>
        </TextWrapper>
        <Button onClick={handleClick}>
          <Text color="white">Zamów online</Text>
        </Button>
      </SliderItemContent>
      <SliderItemPhoto>
        <img
          src={require(`../Assets/${props.image}`)}
          alt="slider"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </SliderItemPhoto>
    </SliderItemWrapper>
  );
};
export default SliderItem;
