/*
 * Created on Sat Aug 15 2020
 *
 * Copyright (c) 2020 One FPS
 */
import React, { Component } from 'react';
import DrawerToggleButton from './../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

class Toolbar extends Component {
  logout = () => {
    document.cookie = 'name=';
    document.cookie = 'email=';
    document.cookie = 'jwt=';
    window.location.href = `${window.location.origin}/`;
  };

  scrlTo = destination => {
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

  render() {
    const authLinks = (
      <div className="toolbar-auth">
        <a
          href="/"
          onClick={() =>
            alert(
              'Încă se lucrează la site-ul web. Până atunci, te rugăm să ne descarci aplicația din Apple App Store sau Google Play'
            )
          }
        >
          <button className="empty">Intră în cont</button>
        </a>

        <a
          href="/"
          onClick={() =>
            alert(
              'Încă se lucrează la site-ul web. Până atunci, te rugăm să ne descarci aplicația din Apple App Store sau Google Play'
            )
          }
        >
          <button className="full">Cont nou</button>
        </a>
      </div>
    );

    return (
      <header className="toolbar">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={this.props.drawerClickHandler} />
        </div>
        <nav className="toolbar-navigation">
          <h2 className="toolbar-logo">
            <a href="/">INKLESS</a>
          </h2>

          <div className="toolbar-navigation-items">
            <ul>
              <li>
                <span onClick={() => this.scrlTo('prețuri')}>Prețuri</span>
              </li>
              <li>
                <span onClick={() => this.scrlTo('elevi')}>Elevi</span>
              </li>
              <li>
                <span onClick={() => this.scrlTo('profesori')}>Profesori</span>
              </li>

              <li>
                <span onClick={() => this.scrlTo('părinți')}>Părinți</span>
              </li>
            </ul>
          </div>
          {authLinks}
        </nav>
      </header>
    );
  }
}

export default Toolbar;
