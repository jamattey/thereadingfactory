import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const GalleryCard = ({ galleryImg, details, Imgtitle }) => {
  return (
    <Wrapper>
      <ImageCard>
        <GalleryImage src={galleryImg} />
        <ImageInfo>
          <ImageTitle>{Imgtitle}</ImageTitle>
        </ImageInfo>
      </ImageCard>
    </Wrapper>
  );
};

export default GalleryCard;
const Wrapper = tw.div` w-full mt-10 p-2 rounded flex flex-col items-center`;
const ImageCard = tw.div` flex flex-col items-center w-full lg:w-1/2`;
const GalleryImage = tw.img`object-contain w-full h-auto `;

const ImageInfo = tw.div`text-center`;
const ImageTitle = tw.h4`text-xl uppercase`;
const Details = tw.details`w-2/3 `;
