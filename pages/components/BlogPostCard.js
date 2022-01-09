import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import MainHeading from './MainHeading';
const BlogPostCard = ({ postImg, author, postDate, postText, postTitle }) => {
  const maxLength = 10;
  const [overlay, setOverlay] = useState('');
  return (
    <Wrapper>
      <BlogCard>
        <CardImageWrapper className="cardImgWrapper">
          <CardImage src={postImg} className={`bg-black-Default ${overlay}`} />
        </CardImageWrapper>
        <CardDetails>
          <Author>
            <FontAwesomeIcon
              icon={faUser}
              className="text-yellow-darkest w-5 mr-1.5"
            />
            {author}
          </Author>
          <DatePosted>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-yellow-darkest w-5 mr-1.5"
            />
            {postDate}
          </DatePosted>
        </CardDetails>
        <BlogTitle>{postTitle}</BlogTitle>
        <Details
          className="w-full block mt-2 md:text-yellow "
          onClick={() =>
            overlay ? setOverlay() : setOverlay('md:mix-blend-multiply ')
          }
        >
          <summary className="cursor-pointer md:text-yellow-darkest">
            Read More
          </summary>
          <p className={`text-lg `}> {postText}</p>
        </Details>
      </BlogCard>
    </Wrapper>
  );
};

export default BlogPostCard;
const Wrapper = tw.div`w-full my-8 flex flex-col items-center  relative md:text-yellow`;
const BlogCard = tw.div`w-full`;
const CardImageWrapper = tw.div`aspect-w-16 aspect-h-9`;
const CardImage = tw.img`w-full 0bject-contain h-full `;
const CardDetails = tw.div`flex w-full justify-evenly mt-2 `;
const Author = tw.div`flex justify-center items-center`;
const DatePosted = tw.div`flex justify-center items-center`;
const Details = tw.details`w-full flex flex-col h-auto md:absolute md:top-0 md:text-bold  md:items-start md:left-0 `;
const BlogTitle = tw.h3`text-left w-ful text-lg `;
