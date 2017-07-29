import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets'

export default class Twitter extends Component {
  render() {
    return (
      <div className="Twitter">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'garyvee'
          }}
          options={{
            username: 'garyvee',
            height: '380',
            width: '450'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
      </div>
    );
  }
}
