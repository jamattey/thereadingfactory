import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import MainHeading from "./components/MainHeading";
import ProductCard from "./components/ProjectCard";
const Projects = () => {
  const projectList = [
    {
      name: "ok0 project",
      clas: "",
      img: "bg1",
      details: "",
    },
    {
      name: "ok01 project",
      clas: "md:flex-row-reverse bg-yellow-trans",
      img: "bg1",
      details: "",
    },
    {
      name: "ok2 project",
      clas: "",
      img: "bg1",
      details: "",
    },
    {
      name: "ok3 project",
      clas: "md:flex-row-reverse bg-yellow-trans",
      img: "bg1",
      details: "",
    },
  ];
  return (
    <Wrapper>
      <Heading />
      <ProjectInfo>
        <MainHeading
          mainText="Our Projects"
          subText="The Reading Factory So Far...."
        />
        {projectList.map((project, index) => (
          <ProductCard
            key={index}
            className={project.clas}
            projectImg={project.img}
            projectText={project.details}
            projectName={project.name}
          />
        ))}
      </ProjectInfo>
      <Footer />
    </Wrapper>
  );
};

export default Projects;
const Wrapper = tw.div``;
const ProjectInfo = tw.div``;
const ProjectList = tw.div``;
const Project = tw.div``;
