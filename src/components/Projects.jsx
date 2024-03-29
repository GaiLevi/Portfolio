import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/universe-project-pic.png";
import projImg2 from "../assets/img/mern-holidays-project-img.png";
import projImg3 from "../assets/img/multiclient-chat.png";
import projImg4 from "../assets/img/facebook-pic.png";
import projImg5 from "../assets/img/othello-game.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Universe - Social Network",
      description: "FullStack project - ReactJS, NodeJS and Express FrameWorks",
      imgUrl: projImg1,
      projectLink: "https://universe-frontend.onrender.com/#/",
    },
    {
      title: "MernHolidays - Booking.com clone",
      description: "FullStack project - ReactJS, NodeJS and Express FrameWorks",
      imgUrl: projImg2,
      projectLink: "https://mern-booking-app-lesp.onrender.com/",
    },
  ];
  const projectsBsc = [
    {
      title: "Muti-Client Chat",
      description: "using Sockets and Threads in Java. Click for the code>>",
      imgUrl: projImg3,
      projectLink: "https://github.com/GaiLevi/MassengerApp?tab=readme-ov-file",
    },
    {
      title: "Facebook desktop app - final project of Design Pattern Course.",
      description:
        "Facebook app using different design patterns and working with facebook API. Click for the code>>",
      imgUrl: projImg4,
      projectLink: "https://github.com/GaiLevi/FacebookDesignPatternProject",
    },
    {
      title: "Othello Game - WinForms App",
      description:
        "Othello game in C# using WinForms framework, object oriented programming and simple interface.. Click for the code>>",
      imgUrl: projImg5,
      projectLink: "https://github.com/GaiLevi/OthelloWinFormGame",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore a selection of my diverse projects, ranging from
                    full-stack applications to projects developed during my
                    academic journey.
                  </p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item> */}
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <p>
                    These projects demonstrate my proficiency in ReactJS,
                    NodeJS, and Express frameworks, showcasing my ability to
                    build dynamic and engaging web applications.
                  </p>
                  <Row className="same-height-images">
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          imgUrl={project.imgUrl}
                          description={project.description}
                          projectLink={project.projectLink}
                          numberOfProjects={projects.length}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>Projects I developed during my academic courses.</p>
                  <Row className="same-height-images">
                    {projectsBsc.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          imgUrl={project.imgUrl}
                          description={project.description}
                          projectLink={project.projectLink}
                          numberOfProjects={projectsBsc.length}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
