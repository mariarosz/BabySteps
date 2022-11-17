import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Confirmation } from '../Confirmation/Confirmation.tsx';
import { Budle } from '../Budle/Budle.tsx'
import { addAges } from '../../utils/addAgeToStep';

export default function Timeline({
  userId,
  created,
  setCreated,
  babyName,
  babyBirth,
  setBabyName,
  setBabyBirth,
}) {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    async function getData() {
      const stepsRef = query(
        collection(db, 'steps'),
        where('userId', '==', userId)
      );
      const response = await getDocs(stepsRef);
      return response.docs.map((doc) => {
        return { ...doc.data(), id: doc.UserId };
      });
    }
    setCreated(false);
    getData()
      .then((result) => setSteps(addAges(result, babyBirth)))
      .then(() => console.log('im being run again on timeline'));
  }, [userId, created, setCreated, babyBirth]);

  const budles = [];

  for (let i = 0; i < steps.length; i++) {
    if (budles.findIndex((budle) => budle.age === steps[i].age) >= 0) {
      const index = budles.findIndex((budle) => budle.age === steps[i].age);
      budles[index].steps.push(steps[i]);
    } else {
      const newStep = { age: steps[i].age, steps: [] };
      newStep.steps.push(steps[i]);
      budles.push(newStep);
    }
  }

  budles.sort((a, b) => a.age - b.age);

  return (
    <>
      {steps.length === 0 ? (
        <Confirmation babyName={babyName} />
      ) : (
        budles.map((budle, index) => <Budle budle={budle} key={index} />)
      )}
    </>
  );
}
