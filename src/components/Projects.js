import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pokewar from "../assets/img/project1.gif"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "PokeWar",
      description: "Online multiplayer game",
      imgUrl: pokewar,
      githubLink: "https://github.com/bell-peppers/PokeWar",
      demoLink: "https://poke-war-4483c.web.app/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projects</h2>
                <p>Check out the project README for additional information! < br />I am currently working on other projects so stay tuned :)</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <>
                              <ProjectCard
                                key={index}
                                {...project}
                                /></>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
               </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
