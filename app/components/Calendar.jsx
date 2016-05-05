import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Event from './Event.jsx';
const classNames = require('classnames');
const ReactDOM = require('react-dom')


export default class Calendar extends React.Component {

  constructor(props) {
    super(props);



    this.state = {

    }
}

  componentDidMount() {

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
              <div id="9" className="time">
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

            {dataobj.items.map( (instance) => {


        return (
          <div key={instance.title} className={instance.start_time} ref="moved">
            <Event  time={parseInt(instance.start_time)}  title={instance.title} start_time={instance.start_time} location={instance.location} />
          </div>
        )



})}


      </div>
    );
  }
}
