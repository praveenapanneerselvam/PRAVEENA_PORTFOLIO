import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">PRAVEENA P </span>
            from <span className="purple"> KALLAKURICHI.</span>
            <br />
            I am currently pursuing my engineering degree in Information Technology.
            <br />
            I am passionate about learning new technologies and exploring new ideas.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> watching cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching crime and investigation stories.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be passionate about your own things!"{" "}
          </p>
          <footer className="blockquote-footer">Praveena</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
