import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { DBService } from '../services/DBservice';

export function AddBaby() {
  async function handleSubmit(event) {
    event.preventDefault();

    const userId = AuthProvider.currentUser;
    console.log(userId);
    const name = event.target.name.value;
    const date = event.target.date.value;

    await DBService.writeBabyData(userId, name, date);
    event.target.reset();
  }

  return (
    <div>
      <h1>What's your baby name?</h1>
      <form>
        <input type="text" name="name" placeholder="Baby's name" />
        <input type="date" name="date" />
        <button type="submit" onSubmit={handleSubmit}>
          send
        </button>
      </form>
    </div>
  );
}
