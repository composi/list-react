import { Msg, deleteItem, saveLocally } from './messages'
import { clone } from '@composi/clone'
import { idb } from '@composi/idb'

/**
 * @typedef {import('../types').State} State
 * @typedef {import('../types').Message} Message
 * @typedef {import('../types').Send} Send
 */
/**
 * @param {State} state
 * @param {Message} msg
 * @param {Send} send
 */
export function actions(state, msg, send) {

  // Create deep clone of state for immutability:
  /** @type {State} */
  const prevState = clone(state)

  // Match received msg with tagged union types:
  return Msg.match(msg, {
    updateInputValue: value => {
      prevState.inputValue = value
      return prevState
    },

    addItem: () => {
      if (prevState.inputValue) {
        prevState.items.push({
          key: prevState.newKey++,
          value: prevState.inputValue
        })
        prevState.inputValue = ''
        send(saveLocally(prevState))
      } else {
        alert('Please provide a value before submitting.')
      }
      return prevState
    },

    makeDeletable: key => {
      prevState.items = prevState.items.map(item => {
        if (item.key === key) {
          item.deletable = true
          setTimeout(() => {
            send(deleteItem(key))
          }, 1000)
        }
        return item
      })
      return prevState
    },

    deleteItem: key => {
      prevState.items = prevState.items.filter(item => item.key !== key)
      send(saveLocally(prevState))
      return prevState
    },

    useFetchedData: data => data,

    saveLocally: data => {
      idb.set('app-state', data)
      return prevState
    }
  })
}
