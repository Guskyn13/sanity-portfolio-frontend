import React, { useRef, useEffect } from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import Typed from 'typed.js';
import { BsLinkedin, BsInstagram, BsTwitch, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { scrollToHireMe } from '../../utilities/ScrollService';

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Dev",
        "Web Developer",
        "Freelancer",
        ""
      ],
      typeSpeed: 100,
      startDelay: 300,
      backSpeed: 75,
      backDelay: 100,
      loop: true,
      loopCount: Infinity,
      smartBackspace: true,
      showCursor: false,
    }

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id='home' className='app__header app__flex'>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transistion={{ duration: 2 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>

            <div className='app__information'>
              <div className='app__header-icons'>
                <a href='https://www.linkedin.com/in/nathankgusky/'>
                  <BsLinkedin className='icon' />
                </a>
                <a href='https://github.com/Guskyn13'>
                  <BsGithub className='icon' />
                </a>
                <a href='https://www.facebook.com/profile.php?id=100072484796599'>
                  <FaFacebookF className='icon' />
                </a>
                <a href='https://www.twitch.tv/twtchnkermit13'>
                  <BsTwitch className='icon' />
                </a>
                <a href='https://www.instagram.com/n_gusky/'>
                  <BsInstagram className='icon' />
                </a>
                <a href='https://www.instagram.com/wanderartdesign/'>
                  <BsInstagram className='icon' />
                </a>
              </div>

              <p>Hello, I'm</p>
              <h1 className='app__header-name'>Nathan G.</h1><br />
              <div className='app__header-height'>
                <span className='app__header-typical' ref={el} />
              </div>
            </div>
          </div>

          <div className='app__header-buttons'>
            <button onClick={() => scrollToHireMe()}>Hire ME</button>
            <a href="Developer Resume.pdf" download="Developer Resume.pdf">
              <button>Resume</button>
            </a>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transistion={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.mainProfPic} alt="profile_bg" />

      </motion.div>
    </div>
  )
}

export default Header;
