import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import MainHeading from "./MainHeading";
const ProjectCard = ({ className, projectName, projectImg, projectText }) => {
  return (
    <Wrapper>
      <Project className={className}>
        <ProjectImg src={projectImg} />
        <ProjectInfo>
          <MainHeading mainText={projectName} subText={projectText} />
        </ProjectInfo>
      </Project>
    </Wrapper>
  );
};

export default ProjectCard;
const Wrapper = tw.div`w-full p-4 flex item-center justify-center h-96 mb-8 `;
const Project = tw.div`h-full w-full flex items-center  flex-col md:justify-between md:flex-row`;
const ProjectImg = tw.img`h-3/5 w-auto md:h-full md:w-2/5`;
const ProjectInfo = tw.div`h-full w-full px-2 md:flex-1`;
