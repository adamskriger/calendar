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

    return (
      <div className="event">


      {this.props.title}
      {this.props.start_time}
      {this.props.location}

      {this.state.title}
      {this.state.start_time}
      {this.state.location}



      </div>
    );
  }
}
