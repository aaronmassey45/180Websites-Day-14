import React, { Component } from 'react';

export default class Youtube extends Component {
  render() {
    return (
      <div className="Instagram">
        <iframe width="600" height="340" src="http://www.youtube.com/embed?max-results=1&controls=0&rel=0&listType=user_uploads&list=GaryVaynerchuk" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}
