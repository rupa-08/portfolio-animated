import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { IoSchoolSharp } from 'react-icons/io5';

import 'react-vertical-timeline-component/style.min.css';
import Skills from './Skills';

const Experience = () => {
  const data = [
    {
      title: 'Software Developer',
      subtitle: 'Frost Digital Ventures, Kalanki, Kathmandu',
      date: 'January 2023 - Present',
      descirption: ['Roles', 'Develop awesome software.'],
      image: '/images/work/FDV.png',
      isWork: true,
    },

    {
      title: 'Web Developer Internship(ReactJS)',
      subtitle: 'Naxa, Baluwatar, Kathmandu',
      date: 'August 2022 - November 2022',
      descirption: ['Roles', 'Develop awesome software.'],
      image: '/images/work/naxa.png',
      isWork: true,
    },
    {
      title: 'B.sc.(Hons) in Computing',
      subtitle: 'Islington College, London Metopolitian University',
      date: 'August 2022',
      descirption: ['Bachelor Degree'],
      image: '/images/work/naxa.png',
      isWork: false,
    },

    {
      title: 'Science',
      subtitle: 'Trinity Internation College, Kamalpokhari',
      date: 'August 2019',
      descirption: [' High School'],
      image: '/images/work/FDV.png',
      isWork: false,
    },
  ];
  return (
    <div id="Work" className="experience-container">
      <div>
        <h1 className="h1-semibold violet-gradient bg-clip-text text-transparent uppercase">
          Work & Education
        </h1>
        <h1 className="h1-semibold text-center">Timeline</h1>
      </div>
      {/* Timeline */}
      <VerticalTimeline>
        {data?.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#343434',
              color: '#fff',
              opacity: 0.8,
            }}
            date={item?.date}
            iconStyle={{
              background:
                'radial-gradient(666px at 0.4% 48%, rgb(202, 204, 227) 0%, rgb(89, 89, 99) 97.5%)',
              color: '#fff',
              fontSize: 10,
            }}
            icon={
              item.isWork ? (
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={item.image}
                    alt={item.subtitle}
                    className="w-3/5 logo"
                  />
                </div>
              ) : (
                <IoSchoolSharp style={{ color: '#323232' }} />
              )
            }
          >
            <h3 className="vertical-timeline-element-title experience-card-title">
              {item.title}
            </h3>

            <h4 className="vertical-timeline-element-subtitle experience-card-desc">
              {item.subtitle}
            </h4>

            {item.descirption.map((item, index) => (
              <>
                <p key={index}>{item}</p>
              </>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Skills />
    </div>
  );
};

export default Experience;
