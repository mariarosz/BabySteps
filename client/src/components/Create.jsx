import React from 'react';
import { DBService } from '../services/DBservice';
import { AuthProvider } from '../contexts/AuthContext';

export function Create() {
  async function handleSubmit(event) {
    event.preventDefault();
    const title = event.title.current.value;
    const date = event.date.current.value;
    const notes = event.notes.current.value;
    const userId = AuthProvider.currentUser;

    try {
      await DBService.createStep(userId, title, date, notes);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="create-panel">
      <h2>What's new?</h2>
      <form>
        <input type="text" name="title" placeholder="new step title" />
        <input type="text" name="notes" placeholder="anything more..." />
        <button type="submit" onSubmit={handleSubmit}>
          Add a Step
        </button>
      </form>
    </div>
  );
}
