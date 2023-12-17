import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { IoSchoolSharp } from 'react-icons/io5';
import 'react-vertical-timeline-component/style.min.css';

import Skills from './Skills';
import { workAndEducationData } from '@/Constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div id="Work" className="experience-container">
      <Skills />

      <div>
        <h1 className="h1-semibold title violet-gradient">Work & Education</h1>
        <h1 className="h1-semibold text-center">Timeline</h1>
      </div>

      {/* Timeline */}
      <VerticalTimeline>
        {workAndEducationData?.map((item, index) => (
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
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 + index * 0.2 }}
              >
                {item}
              </motion.p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
