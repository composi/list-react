import React, { useRef, useEffect } from 'react'
import { Msg } from '../effects/messages'
import { ListItem } from './list-item'

const { AddItem, UpdateInputValue } = Msg
/**
 * @typedef {import('../types').State} State
 * @typedef {import('../types').Send} Send
 * @typedef {import('../types').InputRef} InputRef
 */
/**
 * @param {{state: State, send: Send}} props
 */
export function List({ state, send }) {
  const input = /** @type {InputRef} */(useRef())
  useEffect(() => input.current.focus())
  return (
    <div className="list-container">
      <p className="list-container-form">
        <input ref={input} onChange={e => send(UpdateInputValue(e.target.value))} value={state.inputValue} autoFocus type="text" />
        <button onClick={() => send(AddItem())} className="add-item">Add</button>
      </p>
      <ul className="list">
        {
          state.items.map(item => <ListItem key={item.key} {...{ item, send }} />)
        }
      </ul>
    </div>
  )
}
