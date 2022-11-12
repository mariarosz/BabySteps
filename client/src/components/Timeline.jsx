import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { AddBaby } from './AddBaby';
import { Step } from './Step';
import { differenceInMonths } from 'date-fns';

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
  const [budles, setBudles] = useState([]);

  function calculateAge(birth, event) {
    const result = differenceInMonths(new Date(event), new Date(birth));
    if (result < 1) {
      return '1st month';
    } else if (result < 2) {
      return '2nd month';
    } else if (result < 3) {
      return '3rd month';
    } else if (result < 4) {
      return '4th month';
    } else if (result < 5) {
      return 'fifth month';
    } else if (result < 6) {
      return 'sixth month';
    } else if (result < 7) {
      return 'third month';
    } else if (result > 16 && result < 19) {
      return '2 years';
    } else if (result < 24) {
      return '2 years';
    } else if (result < 36) {
      return '3 years';
    }
  }

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
    getData().then((result) => setSteps(result));
  }, [userId, created, setCreated]);

  return (
    <>
      {steps.length === 0 ? (
        <AddBaby
          babyName={babyName}
          setBabyName={setBabyName}
          babyBirth={babyBirth}
          setBabyBirth={setBabyBirth}
        />
      ) : (
        steps.map((step) => (
          <Step
            step={step}
            setSteps={setSteps}
            key={step.id}
            age={calculateAge(babyBirth, step.date)}
          />
        ))
      )}
    </>
  );
}
