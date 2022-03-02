import React from "react";
import { BsInstagram, BsTwitch, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/nathankgusky/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/Guskyn13">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.twitch.tv/twtchnkermit13">
        <BsTwitch />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/n_gusky/">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/wanderartdesign/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
