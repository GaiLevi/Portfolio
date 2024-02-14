import meter1 from "../assets/svg-logo/typescript.svg";
import meter2 from "../assets/svg-logo/tailwind.svg";
import meter3 from "../assets/svg-logo/postman.svg";
import meter4 from "../assets/svg-logo/mongodb.svg";
import meter5 from "../assets/svg-logo/javascript.svg";
import meter6 from "../assets/svg-logo/css.svg";
import meter7 from "../assets/svg-logo/ReactJS.svg";
import meter8 from "../assets/svg-logo/NodeJS.svg";
import meter9 from "../assets/svg-logo/c-sharp.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Programming Languages & Frameworks</h2>
              <p>
                I've acquired proficiency in these programming languages and
                frameworks through self-learning and my Bachelor's degree in
                Computer Science. I would like to add more to this slider in the
                future as I continue to explore new technologies."
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  {/* <h5>Web Development</h5> */}
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                </div>
                <div className="item">
                  <img src={meter8} alt="Image" />
                </div>
                <div className="item">
                  <img src={meter9} alt="Image" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
