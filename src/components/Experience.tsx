import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { FaUserGraduate } from 'react-icons/fa6';
import 'react-vertical-timeline-component/style.min.css';

import { workAndEducationData } from '@/Constants';

const Experience = () => {
  return (
    <div id="Work" className="experience-container">
      <div>
        <h1 className="h1-semibold title violet-gradient">Work & Education</h1>
        <h1 className="text-[45px] font-bold text-center">Timeline.</h1>
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
                <FaUserGraduate style={{ color: '#211e35' }} />
              )
            }
          >
            <h3 className="vertical-timeline-element-title experience-card-title">
              {item.title}
            </h3>

            <h4 className="vertical-timeline-element-subtitle experience-card-desc">
              {item.subtitle}
            </h4>

            <h3 className="vertical-timeline-element-title experience-card-title py-4">
              Roles
            </h3>

            <ul>
              {item.descirption.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                  className="list-disc ml-[1em] py-1"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
