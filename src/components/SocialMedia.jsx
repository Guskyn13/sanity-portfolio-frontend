import React from 'react';
import { BsTwitter, BsInstagram, BsTwitch, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <BsTwitch />
        </div>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <FaFacebookF />
        </div>

    </div>
)

export default SocialMedia;