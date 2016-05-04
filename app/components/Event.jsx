import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

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


  }



  render() {

    var inlineEventStyle = {
          top: 100 - (3 *(this.props.time)),
          backgroundColor: 'red',
          opacity: '.6',
          marginLeft: '.5rem',
          borderLeft: '8px solid green',
          display: 'inline-block',
          float: 'left',
          position: 'relative'
    }


    return (


      <div style={inlineEventStyle}>

      <div className="title">{this.props.title}</div>
      <div className="start_time">{this.props.start_time}</div>
      <div className="location">{this.props.location}</div>
      <strong>{this.props.time}</strong>

      </div>
    );
  }
}
