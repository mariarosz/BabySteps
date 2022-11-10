import React, { useState } from 'react';
import { AddBaby } from './AddBaby';
import { Step } from './Step';

export default function Timeline() {
  const [steps, setSteps] = useState([]);

  return (
    <div id="timeline">
      {steps.length === 0 ? (
        <AddBaby />
      ) : (
        steps.map((step) => (
          <Step step={step} setSteps={setSteps} key={steps.id} />
        ))
      )}
    </div>
  );
}
