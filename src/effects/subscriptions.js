import {batch} from '@composi/runtime'
import {AddItem, UseFetchedData} from './messages'
import {idb} from '@composi/idb'


/**
 * @typedef {import('../types').State} State
 * @typedef {import('../types').GetState} GetState
 * @typedef {import('../types').Send} Send
 */

/**
 * When program starts first check is there is saved data in IndexedDB. If there is, use it. Otherwise fetch default data from local JSON file.
 * @param {Send} send
 */
function fetchData(send) {
  (async () => {
    /** @type {State} */
    const savedState = await idb.get('app-state')
    if (savedState) {
      setTimeout(() => send(UseFetchedData, savedState), 2000)
    } else {
      const data = await fetch('/data/state.json')
      /** @type {State} */
      const json = await data.json()
      setTimeout(() => send(UseFetchedData, json), 2000)
    }
  })()
}

/**
 * Set up event listener to use Enter/Return keys to add new items.
 * @param {Send} send
 */
function handleEnterKey(send) {
  document.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
      send(AddItem)
    }
  })
}

export const subs = batch(handleEnterKey, fetchData)
