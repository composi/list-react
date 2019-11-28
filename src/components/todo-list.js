import React, {useRef, useEffect} from 'react'
import {AddItem, UpdateInputValue} from '../effects/messages'
import {ListItem} from './list-item'

/**
 * @typedef {import('../types').State} State
 * @typedef {import('../types').Send} Send
 * @typedef {import('../types').InputRef} InputRef
 */
/**
 * @param {{state: State, send: Send}} props
 */
export function TodoList({state, send}) {
  /** @type {InputRef} */
  const input = useRef()
  useEffect(() => input.current.focus())
  return (
    <div className="list-container">
      <p className="list-container-form">
        <input ref={input} onChange={e => send(UpdateInputValue(e.target.value))} value={state.inputValue} autoFocus type="text" />
        <button onClick={() => send(AddItem())} className="add-item">Add</button>
      </p>
      <ul className="list">
        {
          state.items.map(item => <ListItem key={item.key} {...{item, send}} />)
        }
      </ul>
    </div>
  )
}
