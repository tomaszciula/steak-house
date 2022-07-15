import React from "react";
import { headerText } from "../data";
import {
  HeaderWrapper,
  LeftSectionItemWrapper,
  LeftSectionWrapper,
  RightSectionItemWrapper,
  RightSectionWrapper,
} from "./Header.styled";
import Text from "../Text/Text";
import { ReactComponent as Account } from "../Assets/mojekonto.svg";
import { ReactComponent as Basket } from "../Assets/koszyk.svg";
import { ReactComponent as Order } from "../Assets/zamow_ikona.svg";
import Button from "../Button/Button";

const Header = () => {
  const onMyAccountClick = () => {
    alert("Moje konto");
  };
  const onBasketClick = () => {
    alert("Koszyk");
  };
  const onOrderButtonClick = () => {
    alert("Zamów");
  };
  return (
    <HeaderWrapper>
      <LeftSectionWrapper>
        <img
          src={require("../Assets/LogoHeaderLeft.png")}
          alt="logo header left"
          style={{
            height: "47px",
            width: "48px%",
            objectFit: "contain",
            marginLeft: "148.5px",
            marginRight: "68.5px",
          }}
        />
        {headerText.map((el) => (
          <LeftSectionItemWrapper>
            <Text lineHeight="32px">{el}</Text>
          </LeftSectionItemWrapper>
        ))}
      </LeftSectionWrapper>
      <RightSectionWrapper>
        <RightSectionItemWrapper onClick={onMyAccountClick}>
          <Account />
          <Text>Moje konto</Text>
        </RightSectionItemWrapper>
        <RightSectionItemWrapper onClick={onBasketClick}>
          <Basket />
          <Text>Koszyk</Text>
        </RightSectionItemWrapper>
        <Button width="97px" height="57px" onClick={onOrderButtonClick}>
          <Order />
          <Text>Zamów</Text>
        </Button>
      </RightSectionWrapper>
    </HeaderWrapper>
  );
};

export default Header;
