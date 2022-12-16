import * as dayjs from 'dayjs';
import './App.scss';
import logo from './transit-logo.png';
import barcode from './barcode.png';
import arrow from './arrow.png';
import divider from './divider.png';
import React from 'react';

const ticketNumber = "MZ56120152"
const from = "University of Waterloo Terminal"
const destination = "Union Station Bus Terminal"
const four_hours_as_seconds = 4 * 60 * 60;
const one_hour_as_seconds = 60 * 60;
const seed = Math.floor(Math.random() * one_hour_as_seconds) + one_hour_as_seconds;
let browserStyle;

class App extends React.Component {
  constructor(props) {
    let userAgent = navigator.userAgent.toLowerCase();
    // sample commit
    
    /* browser specific styling */
    if (userAgent.includes('chrome')) {
      browserStyle = 'chrome';
    } else if (userAgent.includes('safari')) {
      browserStyle = 'safari';
    }
    /* end browser specific styling */

    super(props);
    this.state = {
      currentTime: dayjs().format('MMM DD YYYY, hh:mm:ss A'),
      validityTimer: seed
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        currentTime: dayjs().format('MMM DD YYYY, hh:mm:ss A'),
        validityTimer: this.state.validityTimer >= four_hours_as_seconds? seed : this.state.validityTimer + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="app_container">
        <div className={`${browserStyle}-top green--flashing`} />
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
            <img className="body__trip-info__vertical-divider" src={divider} />
            <div className="body__trip-info__trip-type">
              <img className="body__trip-info__trip-type__arrow" src={arrow}/>
              <span className="body__trip-info__trip-type__copy">One-Way</span>
            </div>
          </div>

          <div className="body__horizontal-divider" />

          <span className="body__ticket-number">Ticket Number: <b>{ticketNumber}</b></span>
          <div className="body__barcode">
          < img className="body__barcode__outline" src={barcode}/>
            <div className="body__barcode--animated">VALID FOR TRAVEL</div>
          </div>
          <div className="body__countdown-container">
            <div className="body__countdown-container__current-time">
              <span className="body__countdown-container__current-time__heading">CURRENT TIME:</span>
              <span className="body__countdown-container__current-time__clock">{this.state.currentTime}</span>
            </div>

            <div className="body__countdown-container__time-since-activation">
              <span className="body__countdown-container__time-since-activation__heading">TIME SINCE ACTIVATION:</span>
              <span className="body__countdown-container__time-since-activation__clock">{formatTime(this.state.validityTimer)}</span>
            </div>
          </div>
        </div>


        <div id="footer" className="footer green--flashing">
          <span className="footer__instruction">Please show this to the proper authority on board the train.</span>
          <span className="footer__hourglass">{formatTime(four_hours_as_seconds - this.state.validityTimer)}</span>
        </div>
        <div className={`${browserStyle}-bottom green--flashing`} />
      </div>
    );
  } 
}

function padDigits(num) {
  if ((num / 10) >= 1) return num.toString();
  else return `0${num.toString()}`;
}

function formatTime(rawSeconds) {
  let hours = Math.floor(rawSeconds / 3600);
  let minutes = Math.floor((rawSeconds - hours * 3600) / 60);
  let seconds = rawSeconds - hours * 3600 - minutes * 60;

  return `${padDigits(hours)}:${padDigits(minutes)}:${padDigits(seconds)}`
}

export default App;
