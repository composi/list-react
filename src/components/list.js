import React, { useRef, useEffect } from 'react'
import { Msg } from '../effects/messages'
import { ListItem } from './list-item'

const { addItem, updateInputValue } = Msg

export function List({ state, send }) {
  const input = useRef()
  // @ts-ignore
  useEffect(() => input.current.focus())
  return (
    <div className="list-container">
      <p className="list-container-form">
        <input ref={input} onChange={e => send(updateInputValue(e.target.value))} value={state.inputValue} autoFocus type="text" />
        <button onClick={() => send(addItem())} className="add-item">Add</button>
      </p>
      <ul className="list">
        {
          state.items.map(item => <ListItem key={item.key} {...{ item, send }} />)
        }
      </ul>
    </div>
  )
}
