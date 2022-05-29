import React, { useState, useEffect, useRef } from 'react';
import './Footer.scss';
// import { motion } from 'framer-motion';
import { client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import { BsLinkedin, BsInstagram, BsTwitch, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import Typed from 'typed.js';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const el = useRef(null);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const options = {
      strings: [
        "Get In Touch",
        "I'll Get Back ASAP",
        "Talk Soon!",
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
    <>
      <ScreenHeading
        title={"Contact"}
        subHeading={"Lets Chat"}
      />
      <div className='app__footer-main-container' id='contact'>
        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.gmail} alt="email" />
            <a href="mailto:nathangusky13@gmail.com" className="p-text">Nathan Gusky</a>
          </div>
          <div className="app__footer-card">
            <img src={images.phone} alt="phone" />
            <a href="tel:+1 (850) 556-3452" className="p-text">+1 (850) 556-3452</a>
          </div>
        </div>



        <div className='app__footer-central-form'>
          <div className='app__footer-left-column'>
            <h2 className='app__footer-left-column-title'>
              {" "}
              <div className="app__footer-height">
                <span ref={el} />
              </div>
            </h2>

            <div className='app__footer-left-links'>
              <a href='https://www.linkedin.com/in/nathankgusky/'>
                <BsLinkedin className='app__footer-link' />
              </a>
              <a href='https://github.com/Guskyn13'>
                <BsGithub className='app__footer-link' />
              </a>
              <a href='https://www.facebook.com/profile.php?id=100072484796599'>
                <FaFacebookF className='app__footer-link' />
              </a>
              <a href='https://www.twitch.tv/twtchnkermit13'>
                <BsTwitch className='app__footer-link' />
              </a>
              <a href='https://www.instagram.com/n_gusky/'>
                <BsInstagram className='app__footer-link' />
              </a>
              <a href='https://www.instagram.com/wanderartdesign/'>
                <BsInstagram className='app__footer-link' />
              </a>
            </div>

          </div>

          {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
              <div className="app__flex">
                <input type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
              </div>
              <div className="app__flex">
                <input type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>
          ) : (
            <div className='app__footer-response-div'>
              <h3 className='app__footer-response'>
                Thank you for getting in touch!
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'footer');
