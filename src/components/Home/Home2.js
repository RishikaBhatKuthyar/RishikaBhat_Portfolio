import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import neu from "../../Assets/neu.png";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  Hi, I’m Rishika Bhat, a Master’s student in Information Systems at Northeastern University. 🎓<br />
  With a background in Information Technology from Sreenidhi Institute of Science and Technology, Hyderabad, I’ve built a solid foundation in software development, particularly in Java, Python, React, and SpringBoot. 💻🚀<br /><br />
  
  🏢⚙️ My professional experience includes working as a Full Stack Developer at Innova Solutions, where I developed and optimized systems to manage large-scale employee data and streamline real-time data processing. <br />
  ☁️🌐 Additionally, as a Software Developer Intern at Techimax, I created dynamic web applications, enhanced testing processes, and leveraged cloud technologies to boost system performance.<br /><br />
  
  I'm passionate about creating innovative tech solutions that solve real-world problems and enhance user experiences. 💡✨<br />
  I thrive on learning new tools, tackling challenges, and continuously improving my skills with each project. 🔧📚<br /><br />
  
  Outside of work, you’ll find me exploring new places 🌍, trekking 🥾, socializing 👥, practicing yoga 🧘‍♀️, or cooking 🧑‍🍳.<br />
  I’m always open to connecting with others in the tech world and sharing ideas—feel free to reach out! 🤝
</p>
          </Col>
          <Col md={4} className="neu">
              <img src={neu} className="img-fluid" alt="neu" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RishikaBhatKuthyar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/link-to-your-twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rishikabhat/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rishika.bhat"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
