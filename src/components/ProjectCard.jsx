import { Col } from "react-bootstrap";

const ProjectCard = ({
  title,
  description,
  imgUrl,
  projectLink,
  numberOfProjects,
}) => {
  let mdSize = 4;
  let smSize = 6;
  if (numberOfProjects === 2) {
    mdSize = 6;
  } else if (numberOfProjects === 1) {
    mdSize = 12;
    smSize = 12;
  }
  return (
    <Col size={12} sm={smSize} md={mdSize}>
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
