import React from 'react';
import { Step } from './Step';

export function Budle({ budle }) {
  function calculateAgeForHeading(age) {
    if (age === 1) {
      return '1st month';
    } else if (age === 2) {
      return '2nd month';
    } else if (age === 3) {
      return '3rd month';
    } else if (age < 12) {
      return `${age}th month`;
    } else if (age >= 12) {
      let years = Math.floor(age / 12);
      if (years === 1) {
        return '1 year old';
      } else {
        return `${years} years old`;
      }
    }
  }
  console.log(budle.age);
  return (
    <div className="budle-container">
      <div className="budle-heading">
        <h3>{calculateAgeForHeading(budle.age)}</h3>
      </div>
      <hr />
      {budle.steps.map((step, index) => (
        <Step step={step} key={index} />
      ))}
    </div>
  );
}