import React, { useState } from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import "./App.css";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

      <Container>
        <Row>
          <Col sm={8}>
            The Supplier Code of Conduct applies to all ‘Suppliers globally.
            ‘Supplier’ here refers to suppliers/service providers/
            traders/agents/ consultants/ contractors/ joint venture partners/
            third parties including their employees, agents, and other
            representatives, who have a business relationship with and provide,
            sell, seek to sell, any kinds of goods or services to Ayana
            Renewable Power Private Limited or any of its subsidiaries,
            affiliates, divisions (“Ayana”). This Supplier Code of Conduct sets
            forth the requirements that Ayana asks its Suppliers to respect and
            adhere to when conducting business with or on behalf of Ayana. This
            Supplier Code of Conduct embodies Ayana’s commitment to
            internationally recognized standards and applicable statutory
            requirements concerning Anti-Bribery, Anti-Corruption, Environment
            Protection, Minimum Wages, Child Labour, Health and Safety,
            whichever requirements impose the highest standards of conduct.
          </Col>
          <Col xs lg="3">
            <img
              src="https://ayana-powerv2.vercel.app/static/media/vendor_code_conduct.6d609271df2acffb47eb.png"
              className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
              alt=""
            />
          </Col>
        </Row>
      </Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
