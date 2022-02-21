import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import { images } from '../../constants';
import { scrollToHireMe } from '../../utilities/ScrollService';

const About = (props) => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
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
      {/* Main Div for the page */}
      <div className='app__profiles'>

        {/* Div for the width and height of the card also the button at the bottom */}
        <div className='app__about-parent'>

          {/* Diminsions of the parent  */}
          <div className='app__about-card'>

            {/* Profile Image */}
            <div className='app__about-profile'>
              <img src={images.profile} />
            </div>

            {/* The about/skills */}
              <div className='btn'>
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

                  <button onClick={() => scrollToHireMe()} className='button'>Let's Chat</button>
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