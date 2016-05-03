import AltContainer from 'alt-container';
import React from 'react';
import Navigation from './Navigation.jsx';
import Calendar from './Calendar.jsx'

//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class App extends React.Component {


  render() {

    return (
      <div>

        <Calendar />


      </div>

    );
  }

}
