import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import { images } from '../../constants';

const About = (props) => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <ScreenHeading
        title={"About Me"}
        subHeading={"Get To Know"}
        id={props.id || ""}
      />
      <div className='app__profiles'>
        <div className='app__about-parent'>
          <div className='app__about-card'>
            <div className='app__about-profile'>
              <img src={images.profileImg} alt="profile" />
            </div>

            <div className='btn'>
              <div className='app__profile-item-container'>
                {abouts.map((about, index) => (
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    className='app__profile-item'
                    key={about.title + index}
                  >
                    <img src={urlFor(about.imgUrl)} alt={about.title} />
                    <h2 style={{ marginTop: 20 }}>{about.title}</h2>
                    <p style={{ marginTop: 10 }}>{about.description}</p>
                  </motion.div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
);