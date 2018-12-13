import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';

import Diet from './components/diet';
import Profile from './components/profile';

import 'purecss';

import ExerciseEntry from './components/exerciseEntry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Redirect exact from='/' to='/exercises' />
          <Route path='/exercises' component={ExerciseEntry} />
          <Route path='/diet' component={Diet} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>

    );
  }
}

export default App;
