import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import MainHeading from "./components/MainHeading";
import MemberCard from "./components/MemberCard";
const Team = () => {
  const teamInfo = [
    {
      img: "./faces/sara.jpg",
      details:
        "Saraswati Arthur is a teacher and co-founder of The Reading Factory (TeRF).She has a Bachelor and Masters in English Education and Curriculum Studies respectively from the University of Cape Coast, Ghana. She has over 10 years’ experience in teaching both in the rural and urban centres across Ghana. Her experience in teaching in various levels in both rural and urban areas in Ghana led to the establishment of TeRF with a team of educationist to bridge the gap ofliteracy between the rural and urban areas.",
      name: "Saraswati Arthur",
      role: "Teacher and Co-founder",
    },
    {
      img: "./faces/william.jpg",
      details:
        "William Kofi Adda is a co-founder and project officer of The Reading Factory.  He has a National Higher Diploma in Marketing from Cape Coast Technical University. He has more than 6 years’ experience in digital marketing and over 4 years’ experience in teaching English language in basic schools. He oversees the general projects and fundraising activities of TeRF.",
      name: "William Kofi Adda",
      role: "Project officer",
    },

    {
      img: "./faces/clifford.jpg",
      details:
        "Clifford Ateesi is the programmes manager for TeRF. He has Bachelor’s degree in Social Science Education at University of Education Winneba and currently pursuing his Masters in Environmental planning and Development at University of Energy and Natural Sciences. He has scores of experience in the hospitability business and the development sector. Clifford support the team with proposal writing, strategies for fundraising activities and general development of TeRF projects.",
      name: "Clifford Ateesi",
      role: "Programs Manager",
    },
  ];
  return (
    <Wrapper>
      <Heading />
      <MainHeading
        mainText="Our Team"
        subText="The Reading Factory has a formidable Board of Advisors with
            different professional backgrounds but have keen interest in
            equitable education for the underprivileged."
      />
      <TeamMembers>
        {teamInfo.map((info, index) => (
          <MemberCard
            key={index}
            profileImg={info.img}
            profileName={info.name}
            details={info.details}
            position={info.role}
          />
        ))}
      </TeamMembers>
      <Footer />
    </Wrapper>
  );
};

export default Team;
const Wrapper = tw.div``;
const TeamMembers = tw.div`flex flex-col items-center mb-5`;
