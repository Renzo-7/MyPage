import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ title, description, image, link }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" href={link}>
        Ver Proyecto
      </Button>
    </Card.Body>
  </Card>
);

export default ProjectCard;
