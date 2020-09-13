/*
 * Created on Sat Aug 15 2020
 *
 * Copyright (c) 2020 One FPS
 */

import React from 'react';
import './Platforms.css';
import googlePlayPNG from './../../assets/google_play.png';
import appStorePNG from './../../assets/app_store.png';
import platformsSVG from './../../assets/platforms.svg';

const Platforms = props => {
  return (
    <div className="platforms">
      <div className="container">
        <div className="left">
          <h2 className="title">
            Un singur cont:
            <br />3 platforme
          </h2>

          <p className="description">
            Aplicația Inkless se găsește pe dispozitivele iOS, Android și, de asemenea, în variantă Web
          </p>

          <div className="stores">
            <a href="/">
              <img src={googlePlayPNG} alt="Google Play" />
            </a>
            <a href="/">
              <img src={appStorePNG} alt="App Store" />
            </a>
          </div>
        </div>

        <div className="right">
          <img src={platformsSVG} alt="Web, iOS si Android" />
        </div>
      </div>
    </div>
  );
};

export default Platforms;
