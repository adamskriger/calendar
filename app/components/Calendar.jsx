import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
export default class Calendar extends React.Component {

  render() {

    return (
      <div className="calendar">
      <div className="amContainer">
        <div className="amSide">AM</div>
        <div className="linesContainer">
          <div className="hour">
              <div className="time">
              {moment().format('9:00')}
              </div>
              <div className="halfHour">
              </div>
          </div>
          <div className="hour">
          {moment().format('10:00')}
          </div>
          <div className="hour">
          {moment().format('11:00')}
          </div>
        </div>
      </div>




      </div>
    );
  }
}
