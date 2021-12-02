import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
const HeaderImage = ({ imgSrc }) => {
  return (
    <Wrapper className="wrapper">
      <HeroImage src={imgSrc} />
    </Wrapper>
  );
};

export default HeaderImage;
const Wrapper = tw.div`h-1/2 w-auto px-4`;
const HeroImage = tw.img`object-cover`;
