import {batch} from '@composi/runtime'
import {AddItem, UseFetchedData} from './messages'
import {idb} from '@composi/idb'


/**
 * @typedef {import('../types').State} State
 * @typedef {import('../types').GetState} GetState
 * @typedef {import('../types').Send} Send
 */

/**
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
