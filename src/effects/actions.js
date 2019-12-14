import {match, DeleteItem, SaveLocally} from './messages'
import {idb} from '@composi/idb'

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
export const actions = (state, msg, send) => match(msg, {
  AddItem: () => {
    if (state.inputValue) {
      state.items = [
        ...state.items,
        {
          key: state.newKey++,
          value: state.inputValue
        }
      ]
      state.inputValue = ''
      send(SaveLocally, state)
    } else {
      alert('Please provide a value before submitting.')
    }
    return state
  },

  DeleteItem: key => {
    state.items = state.items.filter(item => item.key !== key)
    send(SaveLocally, state)
    return state
  },

  MakeDeletable: key => {
    state.items = state.items.map(item => {
      if (item.key === key) {
        item.deletable = true
        setTimeout(() => {
          send(DeleteItem, key)
        }, 1000)
      }
      return item
    })
    return state
  },

  SaveLocally: data => {
    idb.set('app-state', data)
    return state
  },

  UpdateInputValue: value => {
    state.inputValue = value
    return state
  },

  UseFetchedData: data => data
})

