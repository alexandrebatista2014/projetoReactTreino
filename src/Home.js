import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousels from './Components/Carousels.js';
import PrimeiroC from './Components/PrimeiroC.js';
import SegundoC from './Components/SegundoC.js';
import Badges from './Components/Badges.js';

// ***** Import Image
import foto from './Assets/Imagem/23.jpg';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Página Home 123</h1>
          <PrimeiroC />
          <SegundoC />
          <Carousels />
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="img-fluid" src={foto} alt="Imagem teste" />
        </Col>
      </Row>
      <Row>
        <Col>
          <PrimeiroC />
        </Col>
        <Col>
          <SegundoC />
        </Col>
        <Col>
          <Badges />
        </Col>
      </Row>
      <div className="banner"></div>
    </Container>
  );
};

export default Home;
