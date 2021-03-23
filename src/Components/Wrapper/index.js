import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  WrapContainer,
  WrapContent,
  WrapItems,
  WrapH1,
  WrapP,
  WrapBtn,
} from "./Wrapper";

const Wrapper = () => {
  const [Menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!Menu);
  };

  return (
    <WrapContainer>
      <Navbar toggle={toggle} />
      <Sidebar Menu={Menu} toggle={toggle} />
      <WrapContent>
        <WrapItems>
          <WrapH1>The journey is never ending ...</WrapH1>
          <WrapP>Let's do it together</WrapP>
          <WrapBtn>Join Now</WrapBtn>
        </WrapItems>
      </WrapContent>
    </WrapContainer>
  );
};

export default Wrapper;
