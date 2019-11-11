import { batch } from '@composi/runtime'
import { AddItem, UseFetchedData } from './messages'
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
      send(UseFetchedData(savedState))
    } else {
      const data = await fetch('/data/state.json')
      /** @type {State} */
      const json = await data.json()
      send(UseFetchedData(json))
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
      send(AddItem())
    }
  })
}

export const batchedSubscriptions = batch(handleEnterKey, fetchJsonData)
