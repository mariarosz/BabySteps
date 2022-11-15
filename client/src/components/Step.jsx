import React from 'react';

export function Step({ step }) {
  return (
    <div className="step-container">
      <img src={step.url} alt="img" />
      <div className="step-content">
        <h1>{step.title}</h1>
        <p>{step.notes}</p>
      </div>
    </div>
  );
}
