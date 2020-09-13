import React from 'react';
import './Plans.css';
import SubscriptionCard from './SubscriptionCard/SubscriptionCard';

const Plans = props => {
  return (
    <div className="plans" id={props.id}>
      <div className="plans-wrapper">
        <SubscriptionCard
          cardPosition="top"
          type="anual"
          description="Pentru clienții care ne sunt fideli"
          price="2,5"
          order={props.order}
          orderIndex="1"
        />
        <SubscriptionCard
          cardPosition="middle"
          type="semestrial"
          description="Pentru școlile care au încredere în produs"
          price="3"
          order={props.order}
          orderIndex="2"
        />
        <SubscriptionCard
          cardPosition="bottom"
          type="lunar"
          description="Pentru școlile care vor să testeze Inkless"
          price="3,5"
          order={props.order}
          orderIndex="3"
        />
      </div>
    </div>
  );
};

export default Plans;
