import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* ui/ux design */}
        <article className="services">
          <div className="services__head">
            <h3>Web Designer</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tailwind</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Sass</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bootstrap</p>
            </li>
          </ul>
        </article>

        {/* web development */}
        <article className="services">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React JS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>PHP</p>
            </li>
          </ul>
        </article>

        {/*  content creation*/}
        {/* <article className="services">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;
