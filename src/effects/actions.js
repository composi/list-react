import { Msg, DeleteItem, SaveLocally } from './messages'
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

    AddItem: () => {
      if (prevState.inputValue) {
        prevState.items.push({
          key: prevState.newKey++,
          value: prevState.inputValue
        })
        prevState.inputValue = ''
        send(SaveLocally(prevState))
      } else {
        alert('Please provide a value before submitting.')
      }
      return prevState
    },

    DeleteItem: key => {
      prevState.items = prevState.items.filter(item => item.key !== key)
      send(SaveLocally(prevState))
      return prevState
    },

    MakeDeletable: key => {
      prevState.items = prevState.items.map(item => {
        if (item.key === key) {
          item.deletable = true
          setTimeout(() => {
            send(DeleteItem(key))
          }, 1000)
        }
        return item
      })
      return prevState
    },

    SaveLocally: data => {
      idb.set('app-state', data)
      return prevState
    },

    UpdateInputValue: value => {
      prevState.inputValue = value
      return prevState
    },

    UseFetchedData: data => data
  })
}
