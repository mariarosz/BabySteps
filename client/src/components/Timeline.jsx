import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { AddBaby } from './AddBaby';
import { Step } from './Step';

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
          <Step step={step} setSteps={setSteps} key={step.id} />
        ))
      )}
    </>
  );
}
