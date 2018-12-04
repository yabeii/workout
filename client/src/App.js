import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Exercises from './components/exercises';
import Diet from './components/diet';
import Profile from './components/profile';

import 'purecss'

class App extends Component {
  render() {
    return (

      <div className="App">
        <Navbar />
        <Switch>

          <Route path='/exercises' component={Exercises} />
          <Route path='/diet' component={Diet} />
          <Route path='/profile' component={Profile} />
          
        </Switch>
      </div>

    );
  }
}

export default App;
