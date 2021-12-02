import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import CarouselJs from "./components/CarouselJs";
import GalleryCard from "./components/GalleryCard";
import Heading from "./components/Heading";
import MainHeading from "./components/MainHeading";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./components/Footer";
import sanityClient from "../sanityClient";
const Gallery = () => {
  const [allPics, setAllPics] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            "author": author->name,
            "date":publishedAt,
            "categories":,
            mainImage{
              asset->{
              _id,
              url
            }
          }
        }`
      )

      .then((data) => setAllPics(data))
      .catch(console.error);
    console.log(allPics);
  }, [allPics]);

  return (
    <Wrapper>
      <Heading />
      <MainHeading
        mainText="Gallery"
        subText="The Reading Factory in pictures"
      />
      <CarouselWrapper>
        <CarouselJs>
          {allPics &&
            allPics.map((pic, index) => (
              <div key={index} className="">
                <img
                  src={pic.mainImage.asset.url}
                  alt={pic.slug.current}
                  className="object-cover object-contain "
                />
                <CarouselInfo>
                  <h3 className=" md:text-lg">{pic.title}</h3>
                  <h5 className=" "></h5>
                </CarouselInfo>
              </div>
            ))}
        </CarouselJs>
      </CarouselWrapper>
      <GalleryCards>
        {allPics &&
          allPics.map((img, index) => (
            <GalleryCard
              key={index}
              Imgtitle={img.title}
              // details={img.text}
              galleryImg={img.mainImage.asset.url}
            />
          ))}
      </GalleryCards>
      <Footer />
    </Wrapper>
  );
};

export default Gallery;
const Wrapper = tw.div`w-full`;
const CarouselWrapper = tw.div`w-full realative flex items-center justify-center bg-yellow-trans p-4 `;
const CarouselInfo = tw.div` flex flex-col items-center text-white bg-yellow-trans absolute bottom-1 right-2 pb-4 w-full h-auto`;
const GalleryCards = tw.div``;
