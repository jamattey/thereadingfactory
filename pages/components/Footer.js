import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import {
  faArrowRight,
  faEnvelopeOpen,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Footer = () => {
  const socialLinks = [
    {
      icon: faTwitter,
      links: "/twitter",
    },
    {
      icon: faFacebookF,
      links: "/facbook",
    },
    {
      icon: faLinkedinIn,
      links: "/linkedin",
    },
    {
      icon: faInstagram,
      links: "/instagram",
    },
  ];
  const quickLinks = [
    { text: "Home", links: "/" },
    { text: "About", links: "/about" },
    {
      text: "Our Projects",
      links: "/projects",
    },
    {
      text: "Gallery",
      links: "/gallery",
    },
    {
      text: "Meet The Team",
      links: "/team",
    },
    { text: "Latest Blog", links: "/blog" },
    {
      text: "Support Us",
      links: "/donate",
    },
  ];

  const getInTouch = [
    { icon: faLocationArrow, text: "Cape Coast, Centeral Region, Ghana" },
    { icon: faEnvelopeOpen, text: "info@example.com" },
    { icon: faPhone, text: "+233 24 773 1083" },
  ];
  return (
    <Wrapper>
      <FootInfo>
        <LogoSection>
          <Logo
            direction="flex-col items-center "
            logoImg="w-25 h-auto contain lg:w-full"
            logoTitle="text-white"
          />
          <p>Bridging the Literacy Gap</p>
        </LogoSection>
        <InfoSection>
          <GetInTouch>
            <FootHeading>Get In Touch</FootHeading>
            {getInTouch.map((item, index) => (
              <GetInTouchItem key={index}>
                {" "}
                <FontAwesomeIcon icon={item.icon} /> {item.text}
              </GetInTouchItem>
            ))}
          </GetInTouch>
          <QuickLinks>
            <FootHeading>Quick Links</FootHeading>
            {quickLinks.map((linkItem, index) => (
              <Link key={index} href={linkItem.links} passHref>
                <QuickLink>
                  <FontAwesomeIcon icon={faArrowRight} /> {linkItem.text}
                </QuickLink>
              </Link>
            ))}
          </QuickLinks>
          <SocialLinks>
            <FootHeading>Social Links</FootHeading>
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.links} passHref>
                <SocialLink className="inline-flex py-4">
                  <FontAwesomeIcon icon={social.icon} />
                </SocialLink>
              </Link>
            ))}
          </SocialLinks>
        </InfoSection>
      </FootInfo>
      <Reserved>&copy;The Reading Factory All Rights Reserved. 2021</Reserved>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = tw.footer`mt-5 relative flex flex-col w-full items-center border-t-2 border-yellow bg-yellow-darkest`;
const LogoSection = tw.div` w-full text-center text-lg lg:w-1/3`;
const InfoSection = tw.div`flex border-t-2 w-full border-white  flex-col lg:flex-row lg:border-0 lg:flex-1 lg:justify-evenly`;
const GetInTouch = tw.div`px-4 w-full lg:flex flex-col w-1/3`;
const GetInTouchItem = tw.div`my-2 cursor-pointer w-full `;
const QuickLinks = tw.ul`px-4 lg:flex flex-col w-1/3 `;
const QuickLink = tw.li` my-2 cursor-pointer hover:text-yellow`;
const SocialLinks = tw.ul`px-4 lg:flex flex-col w-1/3`;
const SocialLink = tw.li`hover:text-yellow cursor-pinter w-1/4  `;
const Reserved = tw.p`w-full  bg-yellow-dark text-center text-lg`;
const FootHeading = tw.h4` w-full my-4 text-2xl`;
const FootInfo = tw.div`relative flex flex-col w-full items-center lg:flex-row md:text-sm`;
