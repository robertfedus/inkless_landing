/*
 * Created on Sat Aug 15 2020
 *
 * Copyright (c) 2020 One FPS
 */

import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default DrawerToggleButton;
