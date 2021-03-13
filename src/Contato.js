import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MediaC from './Components/MediaC';

const Contato = () => {
  return (
    <Container>
      <h1>Página Contato</h1>
      <Row>
        <Col>
          <MediaC />
        </Col>
      </Row>
    </Container>
  );
};

export default Contato;
