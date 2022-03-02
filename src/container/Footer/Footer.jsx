import React, { useState } from 'react';
import './Footer.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import Typical from 'react-typical';
import { BsLinkedin, BsInstagram, BsTwitch, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <ScreenHeading
        title={"Contact"}
        subHeading={"Lets Chat"}
      />
      <div className='app__footer-main-container' id='contact'>
        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <a href="mailto:nathangusky13@gmail.com" className="p-text">Nathan Gusky</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+1 (850) 556-3452" className="p-text">+1 (850) 556-3452</a>
          </div>
        </div>



        <div className='app__footer-central-form'>
          <div className='app__footer-left-column'>
            <h2 className='app__footer-left-column-title'>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Get In Touch",
                  1000,
                  "I'll Get Back ASAP",
                  1000,
                  "Talk Soon!",
                  1000,
                ]}
              />
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
            <div>
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

export default MotionWrap(Footer, 'app__footer');
