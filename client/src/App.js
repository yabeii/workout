import React, { Component } from 'react';

import 'purecss';

import ExerciseEntry from './components/exerciseEntry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExerciseEntry />
      </div>
    );
  }
}

export default App;
