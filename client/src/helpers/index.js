// @ts-check


/**
 * ref: https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript
 * 
 * @typedef {Object} Exercise
 * @property {string} exercise
 * @property {number} set
 * @property {number} rep
 * @property {number} weight
 * @property {string} metric
 * 
 * @typedef {Object} DayEntry
 * @property {Exercise[]} compressed
 * @property {Exercise[]} uncompressed
 * 
 * @typedef {Object<string, Array.<DayEntry>>} WorkoutEntry
 * 
 * @typedef {Object} ChartData
 * @property {string} date
 * @property {Exercise} entry
 */

// ignores metric and weight since metric can be normalized (later)
// and weight should be different for graphing
const isSameExercise = (exer1, exer2) =>
  exer1.exercise === exer2.exercise
  && exer1.set === exer2.set
  && exer1.rep === exer2.rep;

/**
 * @param {Exercise} exercise 
 * @param {WorkoutEntry} workoutEntries 
 * @returns {ChartData[]}
 */
export const getEntriesGraph = (exercise, workoutEntries) => {
  let chartData = [];
  for (let date in workoutEntries) {
    let entry = workoutEntries[date][0].compressed.find(ex => isSameExercise(ex, exercise));
    if (entry !== undefined) {
      chartData.push({
        date,
        entry
      })
    }
  }
  return chartData;
}


export const demo = {
  '2018-12-06': [
    {
      compressed: [
        {
          exercise: 'bench press',
          set: 1,
          rep: 5,
          weight: 100,
          metric: 'lb'
        }
      ],
      uncompressed: [
        {
          exercise: 'bench press',
          set: 1,
          rep: 5,
          weight: 100,
          metric: 'lb'
        }
      ]
    }
  ],
  '2018-12-07': [
    {
      compressed: [
        {
          exercise: 'bench press',
          set: 1,
          rep: 5,
          weight: 105,
          metric: 'lb'
        }
      ],
      uncompressed: [
        {
          exercise: 'bench press',
          set: 1,
          rep: 5,
          weight: 100,
          metric: 'lb'
        }
      ]
    }
  ],
  '2018-12-08': [
    {
      compressed: [
        {
          exercise: 'bench press',
          set: 1,
          rep: 5,
          weight: 100,
          metric: 'lb'
        }
      ],
      uncompressed: [
        {
          exercise: 'bench press',
          set: 1,
          rep: 5,
          weight: 100,
          metric: 'lb'
        }
      ]
    }
  ],
  '2018-12-09': [
    {
      compressed: [
        {
          exercise: 'bench press',
          set: 1,
          rep: 5,
          weight: 103,
          metric: 'lb'
        }
      ],
      uncompressed: [
        {
          exercise: 'bench press',
          set: 1,
          rep: 5,
          weight: 103,
          metric: 'lb'
        }
      ]
    }
  ],
  '2018-12-10': [
    {
      compressed: [
        {
          exercise: 'bench press',
          set: 1,
          rep: 5,
          weight: 110,
          metric: 'lb'
        }
      ],
      uncompressed: [
        {
          exercise: 'bench press',
          set: 1,
          rep: 5,
          weight: 110,
          metric: 'lb'
        }
      ]
    }
  ],
}

// DEMO

// getEntriesGraph({
//   exercise: 'bench press',
//   set: 1,
//   rep: 5,
//   weight: 100,
//   metric: 'lb'
// }, demo)

// expected return
//
// [
//   {
//     "date": "2018-12-06",
//     "entry": {
//       "exercise": "bench press",
//       "set": 1,
//       "rep": 5,
//       "weight": 100,
//       "metric": "lb"
//     }
//   },
//   {
//     "date": "2018-12-07",
//     "entry": {
//       "exercise": "bench press",
//       "set": 1,
//       "rep": 5,
//       "weight": 105,
//       "metric": "lb"
//     }
//   }
// ]