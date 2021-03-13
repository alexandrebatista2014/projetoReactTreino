import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const ButtonFill = () => {
  return (
    <Button variant="primary">
      Profile <Badge variant="light">9</Badge>
      <span className="sr-only">unread messages</span>
    </Button>
  );
};

export default ButtonFill;
