import { Navbar } from '../Navbar/Navbar'
import './Home.css'

export default function Home() {
  return (
    <div className="main-container">
      <Navbar/>
    <div className="centralised-content-container">
      <div id="content-box">
        <h3>Welcome!</h3>
        <p id="text">
          It's lovely that we can accompany you on this great journey, in your
          discoveries and achievements.
        </p>
        <p>Enjoy every little step of your way!</p>
      </div>
    </div>
    </div>
  )
}
