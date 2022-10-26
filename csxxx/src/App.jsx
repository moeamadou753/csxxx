import * as dayjs from 'dayjs';
import './App.scss';
import logo from './transit-logo.png';
import barcode from './barcode.png';
import { useState } from 'react';

const ticketNumber = "MZ56120152"
const from = "Union Station Bus Terminal"
const destination = "University of Waterloo Terminal"
const four_hours_as_seconds = 4 * 60 * 60;

function App() {
  const [currentTime, setCurrentTime] = useState(dayjs().format('MMM DD YYYY, hh:mm:ss A'))
  const [validityTimer, setValidityTimer] = useState(Math.floor(Math.random() * 301));

  setInterval(function() {
    setCurrentTime(dayjs().format('MMM DD YYYY, hh:mm:ss A'))
    setValidityTimer(validityTimer >= four_hours_as_seconds? Math.floor(Math.random() * 301) : validityTimer + 1)
  }, 1000);

  return (
    <div className="app_container">
      <div className="header green--flashing">
        <img className="header__gt-icon" src={logo}/>
        <div className="header__heading__scroll-container">
            <div className="header__heading--animated">GO TRANSIT</div>

            <div className="header__heading--animated2">·</div>

            <div className="header__heading--animated3">GO TRANSIT</div>

            <div className="header__heading--animated4">·</div>
        </div>
        <div className="header__itinerary">
          <span>{from}</span> to <span>{destination}</span>
        </div>
      </div>

      <div className="body">
        <div className="body__circle"/>
        <div className="body__trip-info">
          <div className="body__trip-info__passenger-info">
            <span className="body__trip-info__passenger-info__num-passengers">x1</span>
            <span className="body__trip-info__passenger-info__copy">Passenger(s)</span>
            <span className="body__trip-info__passenger-info__passenger-type">1x Adult</span>
          </div>
          <img className="body__trip-info__vertical-divider" />
          <div className="body__trip-info__trip-type">
            <img className="body__trip-info__trip-type__arrow"/>
            <span className="body__trip-info__trip-type__copy">One-Way</span>
          </div>
        </div>

        <div className="body__horizontal-divider" />

        <span className="body__ticket-number">Ticket Number: <b>{ticketNumber}</b></span>
        <img className="body__barcode__outline" src={barcode}/>
        <div className="body__barcode--animated">VALID FOR TRAVEL</div>
        <div className="body__countdown-container">
          <div className="body__countdown-container__current-time">
            <span className="body__countdown-container__current-time__heading">CURRENT TIME:</span>
            <span className="body__countdown-container__current-time__clock">{currentTime}</span>
          </div>

          <div className="body__countdown-container__time-since-activation">
            <span className="body__countdown-container__time-since-activation__heading">TIME SINCE ACTIVATION:</span>
            <span className="body__countdown-container__time-since-activation__clock">{new Date(validityTimer * 1000).toISOString().slice(11, 19)}</span>
          </div>
        </div>
      </div>


      <div id="footer" className="footer green--flashing">
        <span className="footer__instruction">Please show this to the proper authority on board the train.</span>
        <span className="footer__hourglass">{new Date((four_hours_as_seconds - validityTimer) * 1000).toISOString().slice(11, 19)}</span>
      </div>
    </div>
  );
}

export default App;
