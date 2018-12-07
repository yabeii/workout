import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Exercises from './components/exercises';
import Diet from './components/diet';
import Profile from './components/profile';

import 'purecss'

import 'purecss';

import ExerciseEntry from './components/exerciseEntry';

class App extends Component {
  render() {
    return (

      <div className="App">

        <Navbar />
        <Switch>
          <Redirect from='/' to='/exercises' />
          <Route path='/exercises' component={ExerciseEntry} />
          <Route path='/diet' component={Diet} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>

    );
  }
}

export default App;
