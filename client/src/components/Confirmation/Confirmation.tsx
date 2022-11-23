import { Link } from 'react-router-dom';
import './Confirmation.css'


export function Confirmation({ babyName }: { babyName: string }) {
  return (
    <div className="centralised-content-container">
      <div id="content-box">
        <h3>Dear {babyName},</h3>
        <p>
        <span id="text">
          It's lovely that we can accompany you on this great journey, in your
          discoveries and achievements.
        </span>
        </p>
        <p>Enjoy every little step of your way!</p>
        <Link to={'/dashboard'}><button className='btn-get-started'>Let's get started</button></Link>
      </div>
    </div>

  );
}
