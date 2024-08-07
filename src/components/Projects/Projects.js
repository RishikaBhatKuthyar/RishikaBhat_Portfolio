
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hospitality from "../../Assets/hospitality.png";
import hospital from "../../Assets/hospital.png";
import bookhub from "../../Assets/bookhub.png";
import gatepass from "../../Assets/gatepass.png";
import user from "../../Assets/user.png";

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
              imgPath={user}
              isBlog={false}
              title="User Management API with Bulk Operations and Notifications"
              description="Developed APIs to streamline user creation, bulk import via Excel files, and automated email notifications for user credentials. Implemented secure login with JWT tokens and password reset for first-time users. Enhanced efficiency and security in managing user data and communications. "
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
              imgPath={gatepass}
              isBlog={false}
              title="Advanced Security System using Face Detection"
              description="Utilizing advanced facial recognition technology, the system enhances security and efficiency by enabling seamless management of student and guest entry and exit records. This solution replaces traditional paper-based logbooks, offering a user-friendly and secure way to handle gate passes through mobile and web platforms."
              ghLink="https://ijsrset.com/home/issue/view/article.php?id=IJSRSET2293164"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

