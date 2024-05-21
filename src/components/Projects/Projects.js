
// export default Projects;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hospitality from "../../Assets/hospitality.png";
import hospital from "../../Assets/hospital.png";
import bookhub from "../../Assets/bookhub.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospitality}
              isBlog={false}
              title="Hospitality Industry Management System"
              description="Developed a robust system using Java and Swing to streamline hotel operations and enhance customer interactions with an intuitive interface. Managed room reservations, amenities, and integrated service modules."
              ghLink="https://github.com/Deepthi-Nasika/AED_Final_Project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management System"
              description="Full-stack system crafted with Java, Spring Boot, and Angular. Features include a relational MySQL database for data storage and an integrated payment system for services."
              ghLink="https://github.com/rishikabhat/HospitalManagementSystem"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookhub}
              isBlog={false}
              title="BookHub: Platform for Readers and Authors"
              description="Web platform using MERN stack, enabling interaction between readers and authors. Features MongoDB for data management, and Stripe for secure payments."
              ghLink="https://github.com/kamunisaheeshna0905/Info6150BookStoreProject"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

