import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div>
      <div className='container d-flex justify-content-center align-items-center gap-3 fs-4 '>
        <a href='https://instagram.com/mohan__tox?igshid=ZDdkNTZiNTM='>
          <div className='text-white'>
            <FaInstagram className='s-icon' />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/mohanbharathi-g-048664222'>
          <div className='text-white'>
            <FaLinkedin className='s-icon' />
          </div>
        </a>
        <a href='https://github.com/Mohanbharathi-g'>
          <div className='text-white'>
            <FaGithub className='s-icon' />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
