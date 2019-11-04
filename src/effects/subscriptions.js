import { batchEffects } from '@composi/core/src/effects'
import { addItem, useFetchedData } from './messages'
import { idb } from '@composi/idb'


/**
 * @typedef {import('../types').State} State
 * @typedef {import('../types').GetState} GetState
 * @typedef {import('../types').Send} Send
 */

/**
 * @param {GetState} getState
 * @param {Send} send
 */
function fetchJsonData(getState, send) {
  (async () => {
    /** @type {State} */
    const savedState = await idb.get('app-state')
    if (savedState) {
      send(useFetchedData(savedState))
    } else {
      const data = await fetch('/data/state.json')
      /** @type {State} */
      const json = await data.json()
      send(useFetchedData(json))
    }
  })()
}

/**
 * @param {GetState} getState
 * @param {Send} send
 */
function handleEnterKey(getState, send) {
  document.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
      send(addItem())
    }
  })
}

export const batchedSubscriptions = batchEffects(handleEnterKey, fetchJsonData)
