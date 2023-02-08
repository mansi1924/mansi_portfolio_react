import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble, FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mansigupta1907/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/mansi1924" target="_blank"><FaGithub/></a>
      <a href="https://dribbble.com" target="_blank"><FiInstagram/></a>
    </div>
  );
};

export default HeaderSocials;
