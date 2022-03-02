import React, { useState, useEffect } from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import Tooltip from '../../utilities/Tooltip';

const Skills = () => {
  const [backend, setBackend] = useState([]);
  const [frontend, setFrontend] = useState([]);

  useEffect(() => {
    const frontendQuery = '*[_type == "skills"]';
    const backendquery = '*[_type == "backend"]';

    client.fetch(frontendQuery).then((data) => {
      setFrontend(data);
    });

    client.fetch(backendquery).then((data) => {
      setBackend(data);
    });
  }, []);

  return (
    <>
      <ScreenHeading
        title={"Skills"}
        subHeading={"What I Bring"}
      />

      <div className='app__skills-container'>
        <div className='app__skills-parent'>
          <p className='app__skills-parent-header'>Frontend Development</p>
          <motion.div className='app__skills-list'>
            {frontend?.map((front) => (
              <Tooltip
                content={front.experience}
                direction="left"
              >
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className='app__skills-item app__flex'
                  key={front.name}
                >
                  <div className='app__flex' style={{ backgroundColor: front.bgColor }}>
                    <img src={urlFor(front.icon)} alt={front.name} />
                  </div>
                  <p className='p-text'>{front.name}</p>
                </motion.div>
              </Tooltip>
            ))}
          </motion.div>
        </div>

        <div className='app__skills-parent'>
          <p className='app__skills-parent-header'>Backend Development</p>
          <motion.div className='app__skills-list'>
            {backend?.map((back) => (
              <Tooltip
                content={back.experience}
                direction="left"
              >
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className='app__skills-item app__flex'
                  key={back.name}
                >
                  <div className='app__flex' style={{ backgroundColor: back.bgColor }}>
                    <img src={urlFor(back.icon)} alt={back.name} />
                  </div>
                  <p className='p-text'>{back.name}</p>
                </motion.div>
              </Tooltip>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills');