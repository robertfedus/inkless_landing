/*
 * Created on Sat Aug 15 2020
 *
 * Copyright (c) 2020 One FPS
 */

import React from 'react';
import './SubscriptionCard.css';

const SubscriptionCard = props => {
  const cardClasses = `subscription-card ${props.cardPosition}`;

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

  const buttonClicked = () => {
    props.order(props.orderIndex);
    scrlTo('comandă');
  };

  return (
    <div className={cardClasses} onClick={buttonClicked}>
      <div className="container">
        <h3 className="subscription-title">
          Abonament
          <br /> {props.type}
        </h3>

        <p className="description">{props.description}</p>

        <span className="price">{props.price} RON/lună per elev</span>
        <p className="period">(plată {props.type}ă)</p>

        <div className="button-wrapper">
          <button onClick={buttonClicked}>Începe acum</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
