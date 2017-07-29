import React, { Component } from 'react';
import Navbar from './navbar';
import Twitter from './components/twitter';
import Youtube from './components/youtube';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container jumbotron text-center">
          Need some motivation in your life? Stay up to date with everything Gary Vee!
          <div className="row">
            <div className="col-sm-4">Snapchat: <a href="https://www.snapchat.com/add/garyvee">@GaryVee</a></div>
            <div className="col-sm-4">Instagram: <a href="https://www.instagram.com/garyvee/">@GaryVee</a></div>
            <div className="col-sm-4">Medium: <a href="https://medium.com/@garyvee">@GaryVee</a></div>
          </div>
        </div>
        <div className="row container">
          <div className="col-sm-6"><Twitter/></div>
          <div className="col-sm-6"><Youtube/></div>
        </div>
      </div>
    );
  }
}
