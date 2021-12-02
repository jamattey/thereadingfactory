import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import MainHeading from "./MainHeading";
const ListOfActivities = ({ subText, spanText }) => {
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
  return (
    <Wrapper>
      <MainHeading subText={subText} />
      <span className="block text-l mb-5 ">{spanText}</span>
      <Activities>
        {activityList.map((activity, index) => (
          <Activity key={index}>
            <Bulleting src="./bullet.svg" />
            {activity}
          </Activity>
        ))}
      </Activities>
    </Wrapper>
  );
};

export default ListOfActivities;
const Wrapper = tw.div`flex flex-col items-center`;
const Activities = tw.ul`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center `;
const Activity = tw.li`text-yellow flex mb-2`;
const Bulleting = tw.img`w-5`;
