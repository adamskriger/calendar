import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';


export default class Calendar extends React.Component {

  constructor(props) {
    super(props);

    var dataobj = require("json!./data.json");
    console.log(dataobj);

}


  render() {

    return (
      <div className="calendar">
      <div className="amContainer">
        <div className="amSide">AM</div>
        <div className="linesContainer">
          <div className="hourBlock">
              <div className="time">
              {moment().format('9:00')}
              </div>
              <div className="halfHour">
                {moment().format('9:30')}
              </div>
          </div>
          <div className="hourBlock">
            <div className="time">
            {moment().format('10:00')}
            </div>
            <div className="halfHour">
              {moment().format('10:30')}
            </div>
          </div>
          <div className="hourBlock">
            <div className="time">
            {moment().format('11:00')}
            </div>
            <div className="halfHour">
              {moment().format('11:30')}
            </div>
          </div>
        </div>
      </div>




      </div>
    );
  }
}
