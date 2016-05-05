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
              <div className="timeShow"> {moment().format('9:00')} </div>
              </div>
              <div className="halfHour">
                <div className="timeShow">{moment().format('9:30')}</div>
              </div>
          </div>
          <div className="hourBlock">
            <div id="10" className="time">
            <div className="timeShow">{moment().format('10:00')}</div>
            </div>
            <div className="halfHour">
            <div className="timeShow">{moment().format('10:30')}</div>
            </div>
          </div>
          <div className="hourBlock">
            <div id='11' className="time">
            <div className="timeShow">{moment().format('11:00')}</div>
            </div>
            <div className="halfHour">
            <div className="timeShow">{moment().format('11:30')}</div>
            </div>
          </div>
        </div>
      </div>


      <div className="pmContainer">
        <div className="amSide">PM</div>
        <div className="linesContainer">
          <div className="hourBlock">
              <div id="12" className="time">
              <div className="timeShow"> {moment().format('12:00')} </div>
              </div>
              <div className="halfHour">
                <div className="timeShow">{moment().format('12:30')}</div>
              </div>
          </div>
          <div className="hourBlock">
            <div id="1" className="time">
            <div className="timeShow">{moment().format('1:00')}</div>
            </div>
            <div className="halfHour">
            <div className="timeShow">{moment().format('1:30')}</div>
            </div>
          </div>
          <div className="hourBlock">
            <div id='2' className="time">
            <div className="timeShow">{moment().format('2:00')}</div>
            </div>
            <div className="halfHour">
            <div className="timeShow">{moment().format('2:30')}</div>
            </div>
          </div>
          <div className="hourBlock">
            <div id='3' className="time">
            <div className="timeShow">{moment().format('3:00')}</div>
            </div>
            <div className="halfHour">
            <div className="timeShow">{moment().format('3:30')}</div>
            </div>
          </div>
          <div className="hourBlock">
            <div id='4' className="time">
            <div className="timeShow">{moment().format('4:00')}</div>
            </div>
            <div className="halfHour">
            <div className="timeShow">{moment().format('4:30')}</div>
            </div>
          </div>
          <div className="hourBlock">
            <div id='5' className="time">
            <div className="timeShow">{moment().format('5:00')}</div>
            </div>
            <div className="halfHour">
            <div className="timeShow">{moment().format('5:30')}</div>
            </div>
          </div>
          <div className="hourBlock">
            <div id='6' className="time">
            <div className="timeShow">{moment().format('6:00')}</div>
            </div>
            <div className="halfHour">
            <div className="timeShow">{moment().format('6:30')}</div>
            </div>
          </div>
          <div className="hourBlock">
            <div id='7' className="time">
            <div className="timeShow">{moment().format('7:00')}</div>
            </div>
            <div className="halfHour">
            <div className="timeShow">{moment().format('7:30')}</div>
            </div>
          </div>
          <div className="hourBlock">
            <div id='8' className="time">
            <div className="timeShow">{moment().format('8:00')}</div>
            </div>
            <div className="halfHour">
            <div className="timeShow">{moment().format('8:30')}</div>
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
