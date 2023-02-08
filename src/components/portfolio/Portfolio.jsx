import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>Food Related Website Template</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mansi1924/food_website" className="btn" target="_blank">Github</a>
          {/* <a href="https://dribbble.com/" className="btn btn-primary" target="_blank">Live Demo</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>Coffee Related Website Template</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mansi1924/coffee_website" className="btn" target="_blank">Github</a>
          {/* <a href="https://dribbble.com/" className="btn btn-primary" target="_blank">Live Demo</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>
          </div>
          <h3>Company Portfolio Template</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mansi1924/react-website-portfolio" className="btn" target="_blank">Github</a>
          <a href="https://tdionlineservices.com/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt=""/>
          </div>
          <h3>My Personal Portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mansi1924/mansi_portfolio_react" className="btn" target="_blank">Github</a>
          {/* <a href="https://dribbble.com/" className="btn btn-primary" target="_blank">Live Demo</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""/>
          </div>
          <h3>Travel website Template</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mansi1924/travel_website_template_1" className="btn" target="_blank">Github</a>
          {/* <a href="https://dribbble.com/" className="btn btn-primary" target="_blank">Live Demo</a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""/>
          </div>
          <h3>Website Template</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/mansi1924/Demo_template_2" className="btn" target="_blank">Github</a>
          <a href="https://demo.thedigitalindia.net/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""/>
          </div>
          <h3>Travel website Template 2</h3>
          <div className="portfolio__item-cta">
          <a href="" className="btn" target="_blank">Github</a>
          {/* <a href="" className="btn btn-primary" target="_blank">Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio