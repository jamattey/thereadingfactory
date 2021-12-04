import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import BodyText from "./components/BodyText";
import HeaderImage from "./components/HeaderImage";
import Heading from "./components/Heading";
import ListOfActivities from "./components/ListOfActivities";
import MainHeading from "./components/MainHeading";
import Link from "next/link";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActivityCard from "./components/ActivityCard";
import Footer from "./components/Footer";

const About = () => {
  return (
    <Wrapper>
      <Heading />
      <HeaderImage imgSrc="./abouthero.jpeg" />
      <AboutUsInfo>
        <BodyText>
          <MainHeading
            mainText="About Us"
            subText="Bridging the gap of literacy between rural and urban schools"
          />
          The Reading Factory (TeRF) is a registered Non-profit Organisation in
          Ghana with the registration number CG0089202019.
          <br />
          <br />
          It was formed in 2018 to help bridge the gap of literacy between rural
          and urban schools in Ghana through the training of volunteers and
          teachers in TeRF hybrid literacy curriculum. Focusing on Sustainable
          Development Goal 4 (Quality Education), the organisation establishes
          literacy clubs in public basic schools and community libraries in
          deprived communities to improve pupil’s literacy ability as well as
          offering remedial lessons for students with reading difficulties.
          <br />
          <br />
          The organization uses an approach called “teaching students at the
          right level”. We assess children’s literacy skills using classroom
          assessment and regroup students according to learning level rather
          than age or grade before teaching and learning begins in our clubs.
          <br />
          <br />
          {/* <MainHeading subText="" /> */}
          <ListOfActivities subText="Teaching students with the Right Level Approach" />
          <Link href="/donate" passHref>
            <Donate>
              <FontAwesomeIcon icon={faCreditCard} />
              Donate To Our Course
            </Donate>
          </Link>
        </BodyText>
        <AboutInfoImg src="./about.jpg" />
        <BodyText>
          <MainHeading subText="The Reading Factory So far..." />
          In the past 17 months, we have used TeRF hybrid curriculum and
          audio-visual aids to teach literacy to over 500 students in 10 schools
          in Cape Coast, Tamale and Savelugu in Central and Northern Regions
          respectively.
          <br />
          <br />
          We have also trained 15+ teachers in Cape Coast and Tamale on the
          creative ways of teaching phonetics with the use of videos, games and
          the blending of English and local language.
          <br />
          <br />
          he impact we have created over the few months have gained recognition
          from Bayport and Reach for Change, as they awarded us with the best
          literacy idea in 2018 Best Teacher Innovative Competition. clubs.
          <br />
          <br />
          <MainHeading subText="Our Vision" />
          Our core value as an organisation is training and building a strong
          network of volunteers and individuals, who are equipped with skills
          and knowledge capable of teaching children in deprive communities in
          Ghana to become the best of their abilities.
        </BodyText>
        <WhatWeDo>
          <ActivityCard listType="activityList" subText="What We Do" />
        </WhatWeDo>
      </AboutUsInfo>
      <Footer />
    </Wrapper>
  );
};

export default About;
const Wrapper = tw.div` flex flex-col items-center w-full`;
const AboutUsInfo = tw.div`px-4 flex flex-col items-center`;
const AboutInfoImg = tw.img`mt-4 `;
const Donate = tw.button`text-xl my-4 hover:text-yellow`;
const WhatWeDo = tw.div`flex flex-col items-center w-full`;
