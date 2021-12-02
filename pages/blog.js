import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import BlogPosts from "./components/BlogPosts";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import MainHeading from "./components/MainHeading";

const Blog = () => {
  return (
    <Wrapper>
      <Heading />
      <MainHeading
        mainText="Blog Post"
        subText="Read The Latest Articles from Our Blog Post"
      />
      <BlogPosts />
      <Footer />
    </Wrapper>
  );
};

export default Blog;
const Wrapper = tw.div``;
