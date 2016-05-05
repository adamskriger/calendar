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

    var inlineStartTimeStyle = {
      fontSize: '1.5rem',
      color: 'grey',
      fontWeight: 'normal',
      marginLeft: '1.1rem'
    }

    var inlineTitleStyle = {
      marginLeft: '1.1rem'

    }
    var inlineLocationStyle = {
      color: 'green',
      fontSize: "1.7rem",
      fontWeight: 'normal',
      marginLeft: '1.1rem'

    }
    var inlineEventStyle = {
          backgroundColor: 'white',
          opacity: '.8',
          marginLeft: '.5rem',
          borderLeft: '8px solid green',
          display: 'inline-block',
          position: 'relative',
          height: '10rem',
          width: '30%',
          marginLeft: '1.1rem'

            }


    return (


      <div className={this.props.start_time} style={inlineEventStyle}>

      <div className="start_time" style={inlineStartTimeStyle}>{this.props.start_time}&#8212;</div>
      <div className="title" style={inlineTitleStyle}><strong>{this.props.title}</strong></div>

      <div className="location" style={inlineLocationStyle}>{this.props.location} </div>

      </div>
    );
  }
}
