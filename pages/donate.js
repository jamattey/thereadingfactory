import { faMarker, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Footer from "./components/Footer";
import HeaderImage from "./components/HeaderImage";
import Heading from "./components/Heading";
import MainHeading from "./components/MainHeading";
const Donate = () => {
  const donateList = [
    {
      icon: faPhoneAlt,
      via: "World Remit or Mobile Money Number",
      number: "+233 247 731 083",
    },
    {
      icon: faPhoneAlt,
      via: "World Remit or Mobile Money Number",
      number: "+233 247 731 083",
    },
    {
      icon: faPhoneAlt,
      via: "For Large Donations Contact Us Directly At",
      number: "thereadingfactory@gmail.com",
    },
  ];
  const donateActivities = [
    "Training activities",
    "Purchasing teaching and learning resources",
    "Purchasing age appropriate books",
    "Development and sustability of clubs",
    "Inplimentation of projects",
  ];
  return (
    <Wrapper>
      <Heading />
      <DonateHero>
        <HeroText>
          <MainHeading
            mainText="Support Our Course"
            subText="Grateful for your support, donation can be made via:"
          />
          <ul className="flex flex-col w-full">
            {donateList.map((item, index) => (
              <li
                key={index}
                className="flex w-full items-center justify-evenly my-3"
              >
                <FontAwesomeIcon icon={item.icon} />

                <h4 className="flex w-2/3 flex-col">
                  {item.via}
                  <span className="text-white">{item.number}</span>
                </h4>
              </li>
            ))}
          </ul>
        </HeroText>
        <HeroImg src="./donate1.svg" />
      </DonateHero>
      <DonateMain>
        <MainHeading subText="It is important to note that every donation made goes into:" />
        <ul className="flex flex-col w-full">
          {donateActivities.map((item, index) => (
            <li
              key={index}
              className="flex w-full items-center justify-evenly my-3"
            >
              <FontAwesomeIcon icon={faMarker} />

              <h4 className="flex w-2/3 flex-col text-xl">{item}</h4>
            </li>
          ))}
        </ul>
      </DonateMain>
      <Footer />
    </Wrapper>
  );
};

export default Donate;
const Wrapper = tw.div`flex flex-col w-full`;
const DonateHero = tw.div`w-full flex justify-evenly items-center h-auto mt-5 bg-yellow-darkest`;
const HeroImg = tw.img`w-2/5`;
const HeroText = tw.div``;
const DonateMain = tw.div``;
