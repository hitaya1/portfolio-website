import css from "../assets/skills/css.png";
import express from "../assets/skills/express.png";
import firebase from "../assets/skills/firebase.png";
import html from "../assets/skills/html.png";
import js from "../assets/skills/js.png";
import mui from "../assets/skills/mui.png";
import sequelize from "../assets/skills/sequelize.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.svg";
import nodejs from "../assets/skills/nodejs.jpeg";
import postgres from "../assets/skills/postgres.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5 id="redux">React</h5>
                            </div>
                            <div className="item">
                                <img src={redux} alt="Image"/>
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={mui} alt="Image"/>
                                <h5>Material-UI</h5>
                            </div>
                            <div className="item">
                                <img src={sequelize} alt="Image" />
                                <h5>Sequelize</h5>
                            </div>
                            <div className="item">
                                <img src={postgres} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={firebase} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
