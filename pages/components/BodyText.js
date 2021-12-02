import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
const BodyText = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default BodyText;
const Wrapper = tw.p`text-lg lg:max-w-4xl`;
