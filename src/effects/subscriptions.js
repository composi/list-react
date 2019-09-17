import { batchEffects } from '@composi/core'
import { addItem, useFetchedData } from './messages'
import { idb } from '@composi/idb'


function fetchJsonData(state, send) {
  (async () => {
    const savedState = await idb.get('app-state')
    if (savedState) {
      send(useFetchedData(savedState))
    } else {
      const data = await fetch('/data/state.json')
      const json = await data.json()
      send(useFetchedData(json))
    }
  })()
}

function handleEnterKey(state, send) {
  document.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
      send(addItem())
    }
  })
}

export const batchedSubscriptions = batchEffects(handleEnterKey, fetchJsonData)
