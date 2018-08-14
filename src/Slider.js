import React, { Component } from 'react';
import Slide from './Slide';
import ArrowBack from './ArrowBack';
import ArrowNext from './ArrowNext';

class Slider extends Component {
  state = {
    projects: [
      {
        name: 'GolfFriends',
        desc: 'Web Application that tracks a scoring history and handicap index',
      },
      {
        name: 'Closet',
        desc: 'Retail clothing application',
      },
    ],
    currentIndex: 0,
  }

  nextSlide = () => {
    this.setState({currentIndex: 1});
  }

  previousSlide = () => {
    this.setState({currentIndex: 0});
  }

  render() {
    return(
      <div>
        {
          this.state.projects.map((project, i) => {
            <Slide key={i} project={project}/>
          })
        }
        <ArrowBack onClick={this.previousSlide}/>
        <ArrowNext onClick={this.nextSlide}/>
      </div>
    );
  }
}

export default Slider;
