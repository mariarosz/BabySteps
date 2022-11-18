import { differenceInMonths } from 'date-fns';

export function addAges(steps: never[], babyBirth: any) {
  function calculateAge(birth: string | number | Date, event: string | number | Date) {
    let result = differenceInMonths(new Date(event), new Date(birth));
    return (result = result + 1);
  }
  steps.forEach((step:any) => (step.age = calculateAge(babyBirth, step.date)));
  return steps;
}
