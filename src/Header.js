import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>{' '}
      | <NavLink to="sobre">Sobre</NavLink> |{' '}
      <NavLink to="acomodacoes">Acomodações</NavLink> |{' '}
      <NavLink to="lazer">Lazer</NavLink> |{' '}
      <NavLink to="contato">Contato</NavLink>
    </nav>
  );
};

export default Header;
