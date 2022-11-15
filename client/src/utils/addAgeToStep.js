import { differenceInMonths } from 'date-fns';

export function addAges(steps, babyBirth) {
  function calculateAge(birth, event) {
    let result = differenceInMonths(new Date(event), new Date(birth));
    return (result = result + 1);
  }
  steps.forEach((step) => (step.age = calculateAge(babyBirth, step.date)));
  return steps;
}
