import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Footer from './components/Footer';
import Heading from './components/Heading';
import MainHeading from './components/MainHeading';
import ProductCard from './components/ProjectCard';
import sanityClient from '../sanityClient';
import Wrapper from './components/Wrapper';
const Projects = () => {
  const [allProjects, setAllProjects] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"&&(*[_type == "category"&&title=="projects"][0]._id in categories[]._ref)]{
        title,
        slug,
        "author": author->name,
        "date":publishedAt,
        "body":body[].children[].text,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllProjects(data))
      .catch(console.error);
  }, [allProjects]);
  return (
    <Wrapper title="projects">
      <Heading />
      <ProjectInfo>
        <MainHeading
          mainText="Our Projects"
          subText="The Reading Factory So Far...."
        />
        {allProjects &&
          allProjects.map((project, index) => (
            <ProductCard
              key={index}
              className={
                index % 2 == !0
                  ? `md:flex-row-reverse bg-yellow-lighter`
                  : 'shadow-xl'
              }
              projectImg={project.mainImage.asset.url}
              projectText={project.body}
              projectName={project.title}
            />
          ))}
      </ProjectInfo>
      <Footer />
    </Wrapper>
  );
};

export default Projects;
// const Wrapper = tw.div``;
const ProjectInfo = tw.div``;
