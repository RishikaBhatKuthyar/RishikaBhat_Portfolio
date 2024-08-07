import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptopCode, FaBriefcase, FaUsers, FaHandsHelping, FaShieldAlt } from "react-icons/fa";


function Experience() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="experience-heading">My Professional Journey</h1>
        

        <Row className="experience-row">
          <Col md={12} className="experience-card-view experience-card experience-card-left">
            <h2><FaShieldAlt style={{ marginBottom: "5px", marginRight: "10px" }} />RSO Proctor | Northeastern University</h2>
            <h3>June 2024 - Present</h3>
            <ul>
              <li>
                Provided access control and security at Northeastern University Residence halls
              </li>
              <li>
                Interacted with Residential Life, Building services, and NUPD for campus safety
              </li>
              <li>
                Demonstrated excellent communication and conflict resolution skills in ensuring a safe environment for residents
              </li>
            </ul>
          </Col>
        </Row>

        {/* Previous Technical Job */}
        <Row className="experience-row">
          <Col md={12} className="experience-card-view experience-card experience-card-right">
            <h2><FaBriefcase style={{ marginBottom: "5px", marginRight: "10px" }} />Full Stack Developer | Innova Solutions, Hyderabad, India</h2>
            <h3>June 2022 - Dec 2023</h3>
            <ul>
              <li>
                Engineered a Spring Boot application with RESTful APIs, incorporating JWT authentication and role-based access, which managed 30K+ employee records, enhancing data accessibility and security
              </li>
              <li>
                Streamlined real-time data processing by integrating Apache Kafka, which cut latency by 15% and boosted system responsiveness and performance by 25%
              </li>
              <li>
                Overhauled Azure infrastructure, leveraging Azure Kubernetes Service (AKS) and Azure DevOps for streamlined deployments, and utilized Swagger and Postman for API testing and documentation, enhancing operational efficiency by 30%
              </li>
              <li>
                Revamped test code using JUnit, enhancing reusability, reducing duplication, and boosting productivity
              </li>
            </ul>
          </Col>
        </Row>

        {/* Earlier Technical Job */}
        <Row className="experience-row">
          <Col md={12} className="experience-card-view experience-card experience-card-left">
            <h2><FaLaptopCode style={{ marginBottom: "5px", marginRight: "10px" }} />Software Developer Intern | Techimax, Hyderabad, India</h2>
            <h3>Jan 2020 - June 2020</h3>
            <ul>
              <li>
                Created a dashboard web application for monitoring patient data using React, NodeJS, and Redux to interact with microservices in the cloud via RESTful APIs
              </li>
              <li>
                Implemented Hibernate, MySQL, and Spring Security to build a secure, scalable, and high-performance system
              </li>
              <li>
                Tracked and resolved application code defects using JIRA, achieving a 20% increase in test efficiency and a 15% improvement in data accuracy by automating the test management process and addressing root causes
              </li>
              <li>
                Explored proof of concepts for integrating innovative technologies into existing architecture and enhanced applications for better performance and efficient request handling
              </li>
            </ul>
          </Col>
        </Row>

        {/* Non-Technical Experience */}
        {/* <h2 className="section-subheading">Non-Technical Experience</h2> */}


        {/* Co-Curricular Activities */}
        <h2 className="section-subheading">Leadership Opportunities</h2>

        <Row className="experience-row">
          <Col md={12} className="experience-card-view experience-card experience-card-left">
            <h2><FaUsers style={{ marginBottom: "5px", marginRight: "10px" }} />Organising Committee Head | Women in Engineering Conference</h2>
            <h3>July 2019 - Dec 2021</h3>
            <ul>
              <li>
                Led a national level conference with 200 delegates, enhancing team leadership capabilities and project management skills
              </li>
              <li>
                Provided tailored support and guidance to conference guests, demonstrating empathy and customer service excellence
              </li>
              <li>
                Coordinated with multiple departments to ensure smooth operations, showcasing strong organizational skills
              </li>
              <li>
                Maintained high standards of patience and customer service excellence, ensuring delegate queries were addressed effectively and efficiently
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="experience-row">
          <Col md={12} className="experience-card-view experience-card experience-card-right">
            <h2><FaHandsHelping style={{ marginBottom: "5px", marginRight: "10px" }} />Operations Head | Sunshine NGO</h2>
            <h3>July 2021 - Jan 2022</h3>
            <ul>
              <li>
                Directed day-to-day operations of the NGO, ensuring alignment with our mission and efficiency in our outreach programs
              </li>
              <li>
                Managed a diverse team of volunteers and staff, fostering an environment of collaboration and shared purpose
              </li>
              <li>
                Coordinated with donors to secure funding and resources, enhancing the scope of our charitable work
              </li>
              <li>
                Led advocacy campaigns to raise awareness for our cause, significantly increasing public engagement and support
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Experience;
