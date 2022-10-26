import * as dayjs from 'dayjs';
import './App.scss';
import logo from './transit-logo.png';
import { useState } from 'react';

const ticketNumber = "MZ56120152"
const from = "Union Station Bus Terminal"
const destination = "University of Waterloo Terminal"

function App() {
  // when does this update?
  const [currentTime, setCurrentTime] = useState(dayjs().format('MMM DD YYYY, hh:mm:ss A'))

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
        {/* structure barcode as a box of text which just has a background that is conveniently cut-out to fit the text*/}
        <div className="body__barcode--animated">VALID FOR TRAVEL</div>
        <div className="body__countdown-container">
          <div className="body__countdown-container__current-time">
            <span className="body__countdown-container__current-time__heading">CURRENT TIME:</span>
            <span className="body__countdown-container__current-time__clock">{currentTime}</span>
          </div>

          <div className="body__countdown-container__time-since-activation">
            <span className="body__countdown-container__time-since-activation__heading">TIME SINCE ACTIVATION:</span>
            <span className="body__countdown-container__time-since-activation__clock">{hourglass() /* this is static fyi */}</span>
          </div>
        </div>
      </div>


      <div id="footer" className="footer green--flashing">
        <span className="footer__disclaimer">Please show this to the proper authority on board the train.</span>
        <span className="footer__hourglass">{hourglass() /* this is static fyi */}</span>
      </div>
    </div>
  );
}

/**
 * Hourglass should count down in HH:MM:SS fmt from 04:00:0 to 00:00:00.
 * 
 * The footer will display the hourglass value, and the time since activation
 * flag on the counter will use the inverse of the hourglass value 
 * (i.e. hourglass() = 3:59:26 => tsa = 00:00:33)
 */
function hourglass() {

}

export default App;
