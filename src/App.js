import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import About from './About';
import Work from './Work';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Body} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
