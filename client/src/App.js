import React, { Component } from 'react';
import MacroTracker from './components/macrotracker';
import 'purecss';
import ExerciseEntry from './components/exerciseEntry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MacroTracker />
        <ExerciseEntry />
      </div>
    );
  }
}

export default App;
