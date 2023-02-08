import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutimg" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>15+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            My name is Mansi Gupta, I completed my Bachelor of Computer
            Application from Banasthali Vidyapith, Rajasthan. I also did my
            Diploma in Internet and Web Application. I am a developer passionate
            about social good and technology. I love to read & travel.
            Currently, I am working in E-Commerce Company. My job is to
            implement visual elements into web applications that users see and
            interact with in the technology industry. My Specialities includes
            quickly learning new skills & programming languages, problem
            solving, domain driven design, responsive design principles, So far,
            I have HTML, CSS, JavaScript, Bootstrap, Git/GitHub under my belt.
            I've started learning Advance JS, React. I'm still enthusiastically
            grabbing onto any other programming languages, framework, or
            principles. I can integrate into the coding web in my head.
          </p>

          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
