// @ts-check


/**
 * 
 * @param {string[]} exercises 
 * @param {Object<string, boolean>} exerciseMap 
 * @returns {Object<string, boolean>}
 */
const _addExercisesToMap = (exercises, exerciseMap) => {
  exercises.forEach(exercise => {
    exerciseMap[exercise] = true;
  });
  return exerciseMap;
}


/**
 * IMMUTABLE
 * 
 * 'dayEntry' is an array that will come from 'compressed'
 * 
 * @param dayEntry { import("./index").Exercise[] }
 * @param {Object<string, boolean>} exerciseMap 
 * @returns {Object<string, boolean>}
 */
export const addNewExercisesToMap = (dayEntry, exerciseMap) => {
  let copyList = { ...exerciseMap };
  let newExercises = dayEntry.map(e => e.exercise).filter(exercise => !exerciseMap[exercise]);
  return _addExercisesToMap(newExercises, copyList);
}



// const exerciseMap = {
//   'bench press': true,
//   'squat': true
// }

// let demoEntry = [
//   {
//     exercise: 'bench press',
//     set: 1,
//     rep: 5,
//     weight: 103,
//     metric: 'lb'
//   },
//   {
//     exercise: 'squat',
//     set: 3,
//     rep: 8,
//     weight: 405,
//     metric: 'lb'
//   },
//   {
//     exercise: 'snatch',
//     set: 3,
//     rep: 3,
//     weight: 100,
//     metric: 'kg'
//   }
// ];

// addNewExercisesToMap(demoEntry, exerciseMap);
