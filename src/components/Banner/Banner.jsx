/*
 * Created on Sat Aug 15 2020
 *
 * Copyright (c) 2020 One FPS
 */

import React from 'react';
import './Banner.css';
import peoplePNG from './../../assets/people.png';

const Banner = props => {
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

    window.scroll(0, findPos(document.getElementById(destination)));
  };

  return (
    <div className="banner" id={props.id}>
      <div className="content">
        <div className="container">
          <div className="left">
            <h1>
              Asistentul modern <br />
              al școlii tale
            </h1>

            <p>
              Inkless reprezintă un catalog electronic și nu numai.
              <br />
              Avem scopul de a aduce educația modernă în România.
            </p>

            <div className="buttons">
              <button className="left-button" onClick={() => scrlTo('caracteristici')}>
                Află mai multe
              </button>
              <button className="right-button" onClick={() => scrlTo('comandă')}>
                Contactează-ne
              </button>
            </div>
          </div>

          <div className="right">
            <img src={peoplePNG} alt="Inkless" className="people-svg" />
          </div>
        </div>
      </div>

      <div className="edge"></div>
    </div>
  );
};

export default Banner;
