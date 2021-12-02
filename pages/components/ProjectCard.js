import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import MainHeading from "./MainHeading";
const ProjectCard = ({ className, projectName, projectImg, projectText }) => {
  return (
    <Wrapper>
      <Project className={className}>
        <ProjectImg src={`./${projectImg}.jpg`} />
        <ProjectInfo>
          <MainHeading mainText={projectName} subText={projectText} />
        </ProjectInfo>
      </Project>
    </Wrapper>
  );
};

export default ProjectCard;
const Wrapper = tw.div`w-full p-4 flex item-center justify-center bg-yellow-light h-96 mb-8 `;
const Project = tw.div`h-full w-full flex items-center  flex-col md:justify-between md:flex-row`;
const ProjectImg = tw.img`h-3/5 w- bg-white md:h-full md:w-3/5`;
const ProjectInfo = tw.div`h-2/5 w-full bg-white md:flex-1`;
