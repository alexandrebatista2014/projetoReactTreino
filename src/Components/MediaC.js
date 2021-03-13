import React from 'react';
import Media from 'react-bootstrap/Media';
import Foto2 from './../Assets/Imagem/24.jpg';

const MediaC = () => {
  return (
    <Media>
      <img
        width={326}
        height={244}
        className="mr-3"
        src={Foto2}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>Media Heading</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
    </Media>
  );
};

export default MediaC;
