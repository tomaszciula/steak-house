import React from "react";
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
  const handleSteaks = () => {
    alert("Steaks")
  }
  const handleBurgers = () => {
    alert("Burgers")
  }
  const HandleFries = () => {
    alert("French fries")
  }
  const handleDrinks = () => {
    alert("Drinks")
  }
  const handleDelivery = () => {
    alert("Gdzie dowozimy?")
  }
  const handleContact = () => {
    alert("Kontakt")
  }
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
        <LeftSectionItemWrapper onClick={handleSteaks}>
          <Text lineHeight="32px">Steaks</Text>
        </LeftSectionItemWrapper>
        <LeftSectionItemWrapper onClick={handleBurgers}>
          <Text lineHeight="32px">Burgers</Text>
        </LeftSectionItemWrapper>
        <LeftSectionItemWrapper onClick={HandleFries}>
          <Text lineHeight="32px">French fries</Text>
        </LeftSectionItemWrapper>
        <LeftSectionItemWrapper onClick={handleDrinks}>
          <Text lineHeight="32px">Drinks</Text>
        </LeftSectionItemWrapper>
        <LeftSectionItemWrapper onClick={handleDelivery}>
          <Text lineHeight="32px">Gdzie dowozimy?</Text>
        </LeftSectionItemWrapper>
        <LeftSectionItemWrapper onClick={handleContact}>
          <Text lineHeight="32px">Kontakt</Text>
        </LeftSectionItemWrapper>
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
          <Order style={{ marginTop: "12px" }} />
          <Text color="white">Zamów</Text>
        </Button>
      </RightSectionWrapper>
    </HeaderWrapper>
  );
};

export default Header;
