/*
 * Created on Sat Aug 15 2020
 *
 * Copyright (c) 2020 One FPS
 */

import React, { useState, useEffect } from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
  const [shouldShow, setShouldShow] = useState();
  const scrlTo = destination => {
    setShouldShow(undefined);
    props.close();
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

  useEffect(() => {
    setShouldShow(props.show);
  }, [props]);

  let drawerClasses = 'side-drawer';

  if (shouldShow) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <h3>Meniu</h3>
      <ul>
        <li>
          <span onClick={() => scrlTo('prețuri')} href="#prețuri">
            Prețuri
          </span>
        </li>
        <li>
          <span onClick={() => scrlTo('elevi')} href="#elevi">
            Elevi
          </span>
        </li>
        <li>
          <span onClick={() => scrlTo('profesori')} href="#profesori">
            Profesori
          </span>
        </li>

        <li>
          <span onClick={() => scrlTo('părinți')} href="#părinți">
            Părinți
          </span>
        </li>
      </ul>
      <div className="toolbar-auth sidebar-toolbar-auth">
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
    </nav>
  );
};

export default SideDrawer;
