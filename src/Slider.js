import React, { Component } from 'react';

class Slider extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: 'GolfFriends',
        desc: 'Web Application that tracks a scoring history and handicap index',
      },
      {
        id: 2,
        name: 'Closet',
        desc: 'Retail clothing application',
      },
    ]
  }

  render() {
    return(
      <div>
        slider
      </div>
    );
  }
}

export default Slider;
