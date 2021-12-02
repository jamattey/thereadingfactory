import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const MemberCard = ({ profileImg, profileName, details, position }) => {
  const socialLinkInfo = [
    { link: "/", icon: faTwitter },
    { link: "/", icon: faFacebookF },
    { link: "/", icon: faInstagram },
    { link: "/", icon: faLinkedinIn },
  ];
  return (
    <Wrapper>
      <ProfileCard>
        <ProfileImage src={profileImg} />
        <SocialLinks>
          {socialLinkInfo.map((info, index) => (
            <Link
              key={index}
              href={`${info.link}`}
              passHref
              className="bg-yellow-darkest rounded"
            >
              <FontAwesomeIcon
                className="text-2xl mx-2 text-yellow-darkest hover:text-yellow"
                icon={info.icon}
              />
            </Link>
          ))}
        </SocialLinks>
        <PersonalInfo>
          <ProfileName>{profileName}</ProfileName>
          <ProfilePosition>{position}</ProfilePosition>
          <Details className="w-full block mt-2">
            <summary className="cursor-pointer">Read More</summary>
            <p className={`text-lg block`}>{details}</p>
          </Details>
        </PersonalInfo>
      </ProfileCard>
    </Wrapper>
  );
};

export default MemberCard;
const Wrapper = tw.div` w-full mt-10 p-2 rounded flex flex-col items-center`;
const ProfileCard = tw.div` flex flex-col items-center w-1/2`;
const ProfileImage = tw.img`w-full`;
const SocialLinks = tw.div` bg-white-light flex py-4 cursor-pointer `;
const PersonalInfo = tw.div`text-center`;
const ProfileName = tw.h3`text-xl`;
const ProfilePosition = tw.h4`uppercase`;
const Details = tw.details`w-1/2`;
