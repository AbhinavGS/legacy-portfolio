import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <div className="works-container-div" id="skills">
        <h2 className="skills-title-main">Skills & Experiences</h2>

        <div className="skills-container">
          <motion.div className="skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="skills-exp">
            {experiences.map((experience) => (
              <motion.div className="skills-exp-item" key={experience.year}>
                <div className="skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="skills-exp-works">
                  {experience.works.map((work) => (
                    <React.Fragment key={`${work.name}-fragment`}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        key={`${work.name}-tooltip`}
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                        backgroundColor="linear-gradient(to right, #4458dc 0%, #854fee 100%),
        radial-gradient(circle at top left, #4458dc, #854fee)"
                      >
                        {work.desc}
                      </ReactTooltip>
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
