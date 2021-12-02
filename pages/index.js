import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import HeaderImage from "./components/HeaderImage";
import MainHeading from "./components/MainHeading";
import MemberCard from "./components/MemberCard";
import BlogPostCard from "./components/BlogPostCard";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import BodyText from "./components/BodyText";
import ListOfActivities from "./components/ListOfActivities";
import BlogPosts from "./components/BlogPosts";
export default function Home() {
  const activityList = [
    "Literacy Clubs",
    "Fun Learning",
    "Proffesional Staff",
    "Training",
    "Support",
    "Remedials",
    "volunteers",
    "Partnerships",
  ];
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
      <HeaderImage imgSrc="./hero.jpg" />
      <AboutUsSection>
        <MainHeading mainText="ABOUT US" subText="The Reading Factory" />
        <BodyText>
          Our core value as an organisation is training and building a strong
          network of volunteers and individuals, who are equipped with skills
          and knowledge capable of teaching children in deprive communities in
          Ghana to become the best of their abilities more.
        </BodyText>

        <ListOfActivities
          subText="Bridging the gab of Literacy between Rural and Urban Schools"
          spanText="To Achieve our Goals We Employ these Activities and Atributes:"
        />

        <WorkWithUs>
          <MainHeading subText="Work With Us" />
          <BodyText>
            The impact we have created over the few months have gained
            recognition from Bayport and Reach for Change, as they awarded us
            with the best literacy idea in 2018 Best Teacher Innovative
            Competition. Come partner with Us to drive positive change in the
            lives of children.
          </BodyText>
        </WorkWithUs>
        <OurTeam>
          <MainHeading subText="Our Team" />
          <BodyText>
            The Reading Factory has a formidable Board of Advisors with
            different professional backgrounds but have keen interest in
            equitable education for the underprivileged.
          </BodyText>
          {teamInfo.map((info, index) => (
            <MemberCard
              key={index}
              profileImg={info.img}
              profileName={info.name}
              details={info.details}
              position={info.role}
            />
          ))}
        </OurTeam>
        <Blog>
          <MainHeading
            mainText="Blog Post"
            subText="Read The Latest Articles from Our Blog Post"
          />
          <BlogPosts />
        </Blog>
      </AboutUsSection>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = tw.div` 
bg-white flex flex-col
items-center m-10 
`;

const AboutUsSection = tw.div` w-full bg-white my-10 px-4 flex flex-col items-center`;

const WorkWithUs = tw.div``;
const OurTeam = tw.div` flex flex-col items-center`;
const Blog = tw.div`w-full flex flex-col items-center`;
