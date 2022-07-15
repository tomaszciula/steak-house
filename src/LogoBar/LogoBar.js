import React from "react";

import { LogoBarWrapper } from "./LogoBar.styled";

const LogoBar = () => {
  return (
    <LogoBarWrapper>
      <img
        src={require("../Assets/PysznePL.png")}
        alt="pyszne pl logo"
        style={{ height: "100%", width: "70px", objectFit: "contain" }}
      />
      <img
        src={require("../Assets/DeliGoo.png")}
        alt="pyszne pl logo"
        style={{ height: "100%", width: "87px", objectFit: "contain" }}
      />
      <img
        src={require("../Assets/Glovo.png")}
        alt="pyszne pl logo"
        style={{ height: "100%", width: "79px", objectFit: "contain" }}
      />
      <img
        src={require("../Assets/UberEats.png")}
        alt="pyszne pl logo"
        style={{ height: "100%", width: "107px", objectFit: "contain" }}
      />
      <img
        src={require("../Assets/BoltFood.png")}
        alt="pyszne pl logo"
        style={{ height: "100%", width: "86px", objectFit: "contain" }}
      />
    </LogoBarWrapper>
  );
};

export default LogoBar;
