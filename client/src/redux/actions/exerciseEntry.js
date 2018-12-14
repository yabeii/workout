// @ts-check

import { ADD_ENTRY } from '../constants/exerciseData';


// ----- HELPERS -----

const isRelatedEntry = (entryOne, entryTwo) => {
  let checks = ['exercise', 'rep', 'weight', 'metric'];
  let related = true;

  checks.forEach(check => {
    related = related && entryOne[check] === entryTwo[check]
  });

  return related;
}

const getAllRelatedEntries = (searchEntry, entries) => entries.filter(e => isRelatedEntry(e, searchEntry));

const addSets = (acc, curr) => ({
  ...acc,
  set: acc.set + curr.set
});


// ----- MAIN HELPER -----

const combineRelatedEntries = (searchEntry, entries) => getAllRelatedEntries(searchEntry, entries)
  .reduce(addSets, { ...searchEntry, set: 0 });

// -----------------------


// ---- MAIN COMPRESSION FN() ----

const compressAllEntries = entries => {
  let checked = []
  let compressed = [];

  for (let entry of entries) {
    if (checked.findIndex(e => isRelatedEntry(e, entry)) === -1) {
      checked.push(entry);
      compressed.push(combineRelatedEntries(entry, entries));
    }
  }

  return compressed;
}

// -------------------------------

// ---- HELPER ----

const uncompressEntry = entry => {
  let uncompressed = [];

  if (entry.set > 1) {
    for (let i = 0; i < entry.set; i++) {
      uncompressed.push({ ...entry, set: 1 });
    }
    return uncompressed;
  } else {
    return [entry];
  }
}

// ----------------



// ---- MAIN UNCOMPRESSION FN() ----

const uncompressAllEntries = entries => {
  let uncompressed = [];

  entries.forEach(entry => uncompressed.push(...uncompressEntry(entry)));

  return uncompressed;
}

// ---------------------------------

/**
 * ref: https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript
 * 
 * @typedef {Object} Entry
 * @property {string} exercise
 * @property {number} set
 * @property {number} rep
 * @property {number} weight
 * @property {string} metric
 * 
 */

/**
 * @param {Entry[]} workoutEntries 
 * @param {Date} date 
 */
export const addEntry = (workoutEntries, date) => ({
  type: ADD_ENTRY,
  payload: {
    date,
    compressed: compressAllEntries(workoutEntries),
    uncompressed: uncompressAllEntries(workoutEntries)
  }
})


