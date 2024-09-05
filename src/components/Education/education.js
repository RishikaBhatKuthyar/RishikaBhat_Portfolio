import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";


function Education() {
  return (
    <Container fluid className="education-section">
      <Container>
        <h1 className="education-heading">My Academic Journey</h1>


        <Row className="education-row">
          <Col md={12} className="education-card-view education-card education-card-left">
            <h2><FaGraduationCap className="education-icon" />Master of Science in Information Systems</h2>
            <h3>Northeastern University, Boston, MA</h3>
            <h4>January 2024 - Expected Dec 2025</h4>
            <ul>
              <li>Relevant Courses: Application Engineering Development, Web Design, Program Structures and Algorithms, Object-Oriented Programming</li>
              <li>GPA: 3.89/4.0</li>
            </ul>
          </Col>
        </Row>

       
        <Row className="education-row">
          <Col md={12} className="education-card-view education-card education-card-right">
            <h2><FaGraduationCap className="education-icon" />Bachelor of Technology in Information Technology</h2>
            <h3>Sreenidhi Institute of Science and Technology, Hyderabad, India</h3>
            <h4>June 2018 - June 2022</h4>
            <ul>
              <li>Relevant Courses: Data Structures & Algorithms, Agile Methodologies, Software Development, Database Management</li>
              <li>GPA: 7.5/10</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
