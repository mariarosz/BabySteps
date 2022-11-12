import React from 'react';

export function Step({ step, setSteps, babyBirth, age }) {
  return (
    <div>
      <h1>{step.title}</h1>
      <p>{age}</p>
    </div>
  );
}
