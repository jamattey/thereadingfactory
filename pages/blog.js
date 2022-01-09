import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import BlogPosts from './components/BlogPosts';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Layout from './components/Wrapper';
import MainHeading from './components/MainHeading';
import Wrapper from './components/Wrapper';

const Blog = () => {
  return (
    <Wrapper title="blog">
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
// const Wrapper = tw.div``;
