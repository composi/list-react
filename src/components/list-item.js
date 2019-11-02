import React from 'react'
import { makeDeletable } from '../effects/messages'

/**
 * @typedef {import('../types').Item} Item
 * @typedef {import('../types').Send} Send
 * @param {{item: Item, send: Send}} props
 */
export function ListItem({ item, send }) {
  return (
    <li className={item.deletable ? "list-item new-item remove-item" : 'list-item new-item'} key={item.key}>
      <span>{item.value}</span>
      <button onClick={() => send(makeDeletable(item.key))} className="delete-item">X</button>
    </li>
  )
}
