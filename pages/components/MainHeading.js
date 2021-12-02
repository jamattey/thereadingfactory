import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
const MainHeading = ({ mainText, subText }) => {
  return (
    <Wrapper>
      <MainText>{mainText}</MainText>
      <SubText>{subText}</SubText>
    </Wrapper>
  );
};

export default MainHeading;
const Wrapper = tw.div` text-center mt-16 mb-4`;
const MainText = tw.h1` text-yellow text-2xl`;
const SubText = tw.h2` text-yellow-dark text-xl`;
