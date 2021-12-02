import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import sanityClient from "../../sanityClient";
import BlogPostCard from "./BlogPostCard";
const BlogPosts = () => {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        "author": author->name,
        "date":publishedAt,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, [allPosts]);

  return (
    <Wrapper>
      {allPosts &&
        allPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            postImg={post.mainImage.asset.url}
            author={post.author}
            postDate={new Date(post.date).toDateString()}
            postTitle={post.slug.current}
            postText={post.title}
          />
        ))}
    </Wrapper>
  );
};

export default BlogPosts;

const Wrapper = tw.div`px-4 flex flex-col items-center w-full md:grid md:grid-cols-2 md:gap-10 `;
