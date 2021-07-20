import React from "react";
import Menu from "./Menu";
import SocialIcons from "./SocialIcons";

function Header() {
  return (
    <header className="header flex">
      <Menu />
      <SocialIcons />
    </header>
  );
}

export default Header;
