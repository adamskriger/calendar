import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
const ReactDOM = require('react-dom')


export default class Event extends React.Component {

  constructor(props) {
    super(props);

        var stateDataObj = require("json!./data.json");
        console.log(stateDataObj);


    this.state = {
      title: stateDataObj.items[0].title,
      start_time: stateDataObj.items[0].start_time,
      end_time: '',
      location: stateDataObj.items[0].location

    }
}

  componentDidMount() {

    var x= ReactDOM.findDOMNode(this)
    var y = this.props.time
  $('#' + y).append(x)
  }



  render() {

    var inlineEventStyle = {
          backgroundColor: 'red',
          opacity: '.6',
          marginLeft: '.5rem',
          borderLeft: '8px solid green',
          display: 'inline-block',
          position: 'relative'
            }


    return (


      <div className={this.props.start_time} style={inlineEventStyle}>

      <div className="title">{this.props.title}</div>
      <div className="start_time">{this.props.start_time}</div>
      <div className="location">{this.props.location}</div>
      <strong>{this.props.time}</strong>

      </div>
    );
  }
}
