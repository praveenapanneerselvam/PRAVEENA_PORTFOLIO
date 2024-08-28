import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="LICENSE AND PASSPORT APPOINTMENT SYSTEM"
              description="A web-based system designed to manage appointments for license and passport services. Users can schedule, reschedule, and cancel appointments efficiently. The system uses MongoDB for storing user data and appointment information, and Node.js for handling the backend logic and API integrations, ensuring smooth, real-time operations.

Technologies Used: MongoDB, Node.js"
              ghLink="https://github.com/praveenapanneerselvam/LICENSE-AND-PASSPORT-APPOINTMENT-SYSTEM.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CAR MANAGEMENT SYSTEM"
              description="A database-driven Car Management System that helps manage and organize vehicle-related data. It features functionalities like adding, updating, and deleting car details, tracking service records, and managing inventory. The system ensures efficient data storage, retrieval, and manipulation using MySQL, providing a streamlined solution for managing vehicles in a dealership or service center.

Technologies Used: MySQL, SQL"
              ghLink="https://github.com/praveenapanneerselvam/CAR-MANAGEMENT-SYSTEM.git"
              
            />
          </Col>
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BMI CALCULATOR"
              description="A cross-platform BMI calculator built with Flutter. Users can input height and weight to instantly calculate their BMI and see their health category (e.g., underweight, normal, overweight, or obese). It features a clean, responsive design and provides real-time feedback. Built for both Android and iOS using Flutter and Dart"
              ghLink="https://github.com/praveenapanneerselvam/BMI_CALCULATOR.git"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FLIGHT BOOKING SYSTEM"
              description="A desktop-based flight booking system built using Java AWT. The application allows users to search for available flights, book tickets, and manage reservations. It features an intuitive graphical user interface (GUI) that simplifies the booking process, making it user-friendly for managing flight details and schedules.

Technologies Used: Java AWT"
              ghLink="https://github.com/praveenapanneerselvam/FLIGHT-BOOKING-SYSTEM.git"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
