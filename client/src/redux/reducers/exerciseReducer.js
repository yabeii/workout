import { ADD_ENTRY } from '../constants/exerciseData';

const initialState = {
  workoutEntries: {}
}

const exerciseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ENTRY:
      if (state.workoutEntries[payload.date] === undefined) {
        return {
          ...state,
          workoutEntries: {
            ...state.workoutEntries,
            [payload.date]: [{
              compressed: payload.compressed,
              uncompressed: payload.uncompressed,
            }]
          }
        };
      } else {
        return {
          ...state,
          workoutEntries: {
            ...state.workoutEntries,
            [payload.date]: [
              ...state.workoutEntries[payload.date],
              {
                compressed: payload.compressed,
                uncompressed: payload.uncompressed,
              }
            ]
          }
        }
      }
    default:
      return state;
  }
}

export default exerciseReducer;