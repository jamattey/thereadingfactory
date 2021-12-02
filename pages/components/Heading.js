import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Logo from "./Logo";
import NavBar from "./NavBar";
const Heading = () => {
  return (
    <Wrapper>
      <Logo logoImg="w-20 h-20" />
      <NavBar />
    </Wrapper>
  );
};

export default Heading;
const Wrapper = tw.div`
flex w-full justify-between px-3 mb-10 shadow-2xl realative`;
