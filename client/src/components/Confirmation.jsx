import React from 'react';

export function Confirmation({ babyName }) {
  return (
    <div id="box">
      <div id="content">
        <h1>Dear {babyName},</h1>
        <p>
          It's lovely that we can accompany you on this great journey, in your
          discoveries and achievements.
        </p>
      </div>
    </div>
  );
}
