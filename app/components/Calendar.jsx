import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Event from './Event.jsx';


export default class Calendar extends React.Component {

  constructor(props) {
    super(props);



    this.state = {

    }
}


  render() {

    var timeStamp = function() {
    var datafile = require("json!./data.json");

    {datafile.items.map(function(instance) {
      const timeElement= parseInt(instance.start_time);
      console.log(timeElement);
      return timeElement
    })}
}
    var dataobj = require("json!./data.json");


    return (
      <div className="calendar">
      <div className="amContainer">
        <div className="amSide">AM</div>
        <div className="linesContainer">
          <div className="hourBlock">
              <div className="time">
              {moment().format('9:00')}
              <Event />
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

        {dataobj.items.map(function(instance) {
          return <Event time={parseInt(instance.start_time)} key={instance.title} title={instance.title} start_time={instance.start_time} location={instance.location} />

        })}


      </div>
    );
  }
}
