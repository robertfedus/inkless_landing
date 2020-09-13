/*
 * Created on Sat Aug 15 2020
 *
 * Copyright (c) 2020 One FPS
 */

import React from 'react';
import './Features.css';
import studentPNG from './../../assets/student.png';
import teacherPNG from './../../assets/teacher.png';
import parentPNG from './../../assets/parent.png';

const Features = props => {
  return (
    <div className="features" id="caracteristici">
      <div className="container">
        <h1>Un catalog electronic</h1>
        <div className="description-wrapper">
          <p className="description">
            Catalogul electronic Inkless este mai mult decât un catalog obișnuit. Noi țintim înspre a usura
            munca profesorilor și a elevilor, pe lângă scopul principal al aplicației: să înștiinteze părinții
            de notele și absențele copiilor.
          </p>
        </div>
        <span className="description2">Mai jos enumerăm câteva caracteristici unice ale aplicației:</span>

        <div className="feature-cards">
          <div className="feature-card" id="elevi">
            <div className="image-wrapper">
              <img src={studentPNG} alt="Elevii" />
            </div>
            <div className="container">
              <div className="text">
                <h4 className="title">Elevii</h4>
                <div className="feature-list-wrapper">
                  <p className="feature-list">
                    - primesc notificări când se trece o notă nouă în catalog, când profesorii le transmit un
                    mesaj, sau când urmează un extemporal;
                    <br />- își pot vedea orarul afișat de conducerea școlii, pentru a fi scutiți de problema
                    păstrarii unei hârtii noi cu orarul, de fiecare dată când acesta se schimbă;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card left" id="profesori">
            <div className="container left">
              <h4 className="title">Profesorii</h4>
              <div className="text">
                <div className="feature-list-wrapper">
                  <p className="feature-list">
                    - au acces la orarul lor direct în aplicație, pentru a ști mereu la ce clasă urmează sa
                    predea;
                    <br />
                    - pot trece note și absențe însoțite de mesaje;
                    <br />- profesorii diriginți pot modifica note și motiva absențe.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-wrapper">
              <img src={teacherPNG} alt="Profesorii" />
            </div>
          </div>

          <div className="feature-card" id="părinți">
            <div className="image-wrapper">
              <img src={parentPNG} alt="Părinții" />
            </div>
            <div className="container">
              <div className="text">
                <h4 className="title">Părinții</h4>
                <div className="feature-list-wrapper">
                  <p className="feature-list">
                    - au acces la toate funcțiile elevilor;
                    <br />- dacă au mai mulți copii utilizatori Inkless, își pot salva conturile copiilor
                    într-o listă proprie, astfel încât nu va fi nevoită incomoda comutare între conturi;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
