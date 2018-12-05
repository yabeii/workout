import { ADD_ENTRY } from '../constants/exerciseData';

const initialState = {

}

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY: 
      return state;
    default:
      return state;
  }
}

export default exerciseReducer;