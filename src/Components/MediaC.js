import React from 'react';
import Media from 'react-bootstrap/Media';
import Mae from './../Assets/Imagem/mae.jpg';

const MediaC = () => {
  return (
    <Media>
      <img
        width={326}
        height={244}
        className="mr-3"
        src={Mae}
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
