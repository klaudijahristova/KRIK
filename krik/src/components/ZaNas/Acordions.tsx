import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { PrasanjeProps } from "src/interfaces/AboutPage";
import useToggle from "src/services/useToggle";

function Acordions({ title, content, id }: PrasanjeProps) {
  const [expanded, toggle] = useToggle(false);

  return (
    <Accordion className="accordions w-100 h-100">
      <Accordion.Item eventKey={id} className="w-100">
        <Accordion.Header
          onClick={toggle}
          className="d-flex justify-content-between"
        >
          <span className="w-100">{title}</span>{" "}
          {expanded ? (
            <img src="images/ZaNas/minus.png" alt="icon minus" />
          ) : (
            <img src="images/ZaNas/plus.png" alt="icon plus" />
          )}
        </Accordion.Header>
        <Accordion.Body>
          <span className="w-100">{content}</span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordions;
