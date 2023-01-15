import './Feature.scss';

import React from 'react';

const Feature = ({title, text}) => (
  <div className="pt2__features-container__feature">
    <div className="pt2__features-container__feature-title">
      <h1>{title}</h1>
    </div>

    <div className="pt2__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>

);

export default Feature;