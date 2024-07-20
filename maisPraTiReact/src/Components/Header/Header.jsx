import React from 'react';

import "./assets/css/Header.module.css"

import NavBrandImage from "./assets/images/nav-brand.png"

function Header() {

  return (
    <header>
      <div>
        <img src={NavBrandImage} alt="Logo Site" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Animes</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Destaques</a></li>
          <li><a href="#">Personagens</a></li>
          <li><a href="#">Indicações</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
