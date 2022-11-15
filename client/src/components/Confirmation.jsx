import React from 'react';

export function Confirmation({ babyName }) {
  return (
    <div className="centralised-content-container">
      <div id="content-box">
        <h3>Dear {babyName},</h3>
        <p id="text">
          It's lovely that we can accompany you on this great journey, in your
          discoveries and achievements.
        </p>

        <p>Enjoy every little step of your way!</p>
      </div>
    </div>
  );
}
