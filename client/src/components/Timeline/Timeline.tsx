import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Confirmation } from '../Confirmation/Confirmation';
import { Budle } from '../Budle/Budle'
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
        return { ...doc.data(), id: doc['UserId'] };
      });
    }
    setCreated(false);
    getData()
      .then((result) => setSteps(addAges(result, babyBirth)))
      .then(() => console.log('im being run again on timeline'));
  }, [userId, created, setCreated, babyBirth]);

  interface budles {
    [key: string]: any;
  }
  const budles: budles = {
    0: 'Pregnancy',
    1: 'Newborn',
    2: '1-3 Months',
    3: '3-6 Months',
    4: '6-9 Months',
    5: '9-12 Months',
    6: '12-18 Months',
    7: '18-24 Months',
    8: '24-36 Months',
    9: '36-48 Months',
    10: '48-60 Months',
  };
  interface steps {
    [key: string]: any;
  }
  const stepsByBudle: steps = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
  };
  for (let i = 0; i < steps.length; i++) {
    if (budles.findIndex((budle) => budle.age === stepsByBudle[i].age) >= 0) {
      const index = budles.findIndex((budle) => budle.age === stepsByBudle[i].age);
      budles[index].steps.push(steps[i]);
    } else {
      const newStep = { age: stepsByBudle[i].age, steps: [] };
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
