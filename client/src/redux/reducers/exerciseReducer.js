// @ts-check
import { ADD_ENTRY } from '../constants/exerciseData';
import { addNewExercisesToMap } from '../../helpers/exerciseMap';
/**
 * 
 * 
 * @typedef {Object} ExerciseState
 * @property {Object<string, Object[]>} workoutEntries
 * @property {Object<string, boolean>} exercises
 * 
 */

/** @type ExerciseState */
const initialState = {
  workoutEntries: {},
  exercises: {},   // all exercises ever done
}

const _addEntry = (state, payload) => {
  let workoutEntries = { ...state.workoutEntries };
  let newWorkout = {
    compressed: payload.compressed,
    uncompressed: payload.uncompressed,
  };

  if (state.workoutEntries[payload.date] === undefined) {
    workoutEntries[payload.date] = [newWorkout];
  } else {
    workoutEntries[payload.date] = [...workoutEntries[payload.date], newWorkout];
  }

  return {
    ...state,
    workoutEntries,
    exercises: addNewExercisesToMap(payload.compressed, state.exercises)
  }
}

const exerciseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ENTRY:
      return _addEntry(state, payload);
    default:
      return state;
  }
}

export default exerciseReducer;