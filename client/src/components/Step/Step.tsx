import React from 'react';
import './Step.css';

export function Step({ step }: {step: any}) {

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
