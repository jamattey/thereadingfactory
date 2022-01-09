import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faHandshake,
  faGraduationCap,
  faUsers,
  faGamepad,
  faUsersCog,
  faUserPlus,
  faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';
import tw from 'tailwind-styled-components/dist/tailwind';
import MainHeading from './MainHeading';
const ActivityCard = ({ subText, spanText }) => {
  const activityList = [
    {
      activity: 'Literacy Clubs',
      icon: faUsers,
      details:
        'Establish literacy clubs in various public, private schools and community libraries to teach children how to read, assimilate and write effectively.',
    },
    {
      activity: 'Fun Learning',
      icon: faGamepad,
      details:
        'Focus on using technology, innovation, games and creativity to make learning more fun and engaging.',
    },
    {
      activity: 'Training',
      icon: faUsersCog,
      details:
        'Train individuals and volunteers across Ghana with our hybrid literacy curriculum (local language and English Language) to support them in teaching pupils in their local literacy clubs.',
    },
    {
      activity: 'Remedials',
      icon: faGraduationCap,
      details:
        'We offer adult tailored remedial ses to adults and senior high school students who struggle to read, assimilate and write.',
    },
    {
      activity: 'Support',
      icon: faPeopleCarry,
      details:
        'We support schools with our established clubs with age appropriate books and textbooks.',
    },
    {
      activity: 'volunteers',
      icon: faUserPlus,
      details:
        'Individuals and volunteers trained in our literacy approach serve as tutors, patrons and club leaders to manage the growth and sustainability of the club.',
    },
    {
      activity: 'Partnerships',
      icon: faHandshake,
      details:
        'We build partnership with government, schools, NGOs, donors, individuals and others across the globe to share our knowledge to scale up effective programmes and advance literacy and education in entirety.',
    },
  ];

  return (
    <Wrapper>
      <MainHeading subText={subText} />
      <span className="block text-l mb-5 ">{spanText}</span>
      <Activities>
        {activityList.map((activity, index) => (
          <Activity key={index}>
            <FontAwesomeIcon icon={activity.icon} className="w-20" />
            {activity.activity}
            <Details className=" block mt-2">
              <p className={`text-lg block text-center`}>{activity.details}</p>
            </Details>
          </Activity>
        ))}
      </Activities>
    </Wrapper>
  );
};

export default ActivityCard;
const Wrapper = tw.div`w-full flex flex-col items-center justify-center`;
const Activities = tw.ul`w-full flex flex-wrap gap-5  items-center justify-evenly  `;
const Activity = tw.li`w-full md:w-1/2 lg:w-1/3 mb-5 flex text-yellow-dark flex-col items-center text-xl`;
const Details = tw.div`flex flex-col items-center`;
