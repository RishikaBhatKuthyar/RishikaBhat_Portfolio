import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiJava, DiHtml5 } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi"; 
import { SiSpring, SiPostman, SiSwagger } from "react-icons/si";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        {/* <p className="tech-names">Java</p> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        {/* <p className="tech-names">Python</p> */}

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiAbstract050 />  
        {/* <p className="tech-names">Data Structures & Algorithms</p> */}
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        {/* <p className="tech-names">HTML</p> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        {/* <p className="tech-names">Javascript</p> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        {/* <p className="tech-names">React</p> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        {/* <p className="tech-names">NodeJS</p> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        {/* <p className="tech-names">MySQL</p> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        {/* <p className="tech-names">MongoDB</p> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        {/* <p className="tech-names">Spring Boot</p> */}
      </Col>

    </Row>
  );
}

export default Techstack;
