import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import sanityClient from "../../sanityClient";
import BlogPostCard from "./BlogPostCard";
const BlogPosts = () => {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"&&(*[_type == "category"&&title=="blog"][0]._id in categories[]._ref)]{
        title,
        slug,
        "author": author->name,
        "date":publishedAt,
        "body":body[].children[].text,
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
    console.log(allPosts);
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
            postTitle={post.title}
            postText={post.body}
          />
        ))}
    </Wrapper>
  );
};

export default BlogPosts;

const Wrapper = tw.div`px-4 flex flex-col items-center w-full md:grid md:grid-cols-2 md:gap-10 `;
