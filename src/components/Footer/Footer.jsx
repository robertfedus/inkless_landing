/*
 * Created on Sat Aug 15 2020
 *
 * Copyright (c) 2020 One FPS
 */

import React from 'react';
import './Footer.css';
import logo from './../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = props => {
  const scrlTo = destination => {
    const findPos = obj => {
      var curtop = 0;
      if (obj.offsetParent) {
        do {
          curtop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [curtop];
      }
    };

    window.scroll(0, findPos(document.getElementById(destination)) - 15);
  };

  return (
    <footer>
      <div className="logo mobile">
        <img src={logo} alt="INKLESS" />
      </div>

      <div className="container">
        <div className="logo desktop">
          <img src={logo} alt="INKLESS" />
        </div>

        <div className="section">
          <span onClick={() => scrlTo('prețuri')}>Prețuri</span>
          <span onClick={() => scrlTo('elevi')}>Elevi</span>
          <span onClick={() => scrlTo('profesori')}>Profesori</span>
          <span onClick={() => scrlTo('părinți')}>Părinți</span>
        </div>

        <div className="section">
          <a href="/" className="first-link">
            Intră în cont
          </a>
          <a href="/">Cont nou</a>
        </div>

        <div className="section">
          <a href="/" className="first-link">
            Termeni și condiții
          </a>
          <a href="/">
            Politica de <br />
            confidențialitate
          </a>
        </div>
      </div>

      <div className="copyright">
        <div className="wrapper">
          <div className="left">
            <span>&copy; Inkless by Tech Lion</span>
          </div>

          <div className="right">
            <span>admin@inkless.ro</span>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>

            <a href="/">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
