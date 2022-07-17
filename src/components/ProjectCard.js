import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink, demoLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="links"><a target="_blank" href={githubLink} className="link">Github</a>  |  <a className="link" target="_blank" href={demoLink}>Demo</a></div>
    </Col>
  )
}
