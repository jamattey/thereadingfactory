import { faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import MainHeading from "./MainHeading";
const BlogPostCard = ({ postImg, author, postDate, postText, postTitle }) => {
  const maxLength = 10;
  return (
    <Wrapper>
      <BlogCard>
        <CardImage src={postImg} />
        <CardDetails>
          <Author>
            <FontAwesomeIcon
              icon={faUser}
              className="text-yellow-darkest text-lg mr-1.5"
            />
            {author}
          </Author>
          <DatePosted>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-yellow-darkest text-lg mr-1.5"
            />
            {`${postDate.substring(0, maxLength)}`}
          </DatePosted>
        </CardDetails>
        <BlogTitle>{postTitle}</BlogTitle>
        <Details className="w-full block mt-2">
          <summary className="cursor-pointer">Read More</summary>
          <p className={`text-lg `}> {postText}</p>
        </Details>
      </BlogCard>
    </Wrapper>
  );
};

export default BlogPostCard;
const Wrapper = tw.div`w-full my-8 `;
const BlogCard = tw.div``;
const CardImage = tw.img``;
const CardDetails = tw.div`flex w-full justify-evenly mt-2`;
const Author = tw.div``;
const DatePosted = tw.div``;
const Details = tw.details``;
const BlogTitle = tw.h3`text-left w-ful text-lg `;
