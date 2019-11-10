import React from 'react'
import { makeDeletable } from '../effects/messages'

/**
 * @typedef {import('../types').Item} Item
 * @typedef {import('../types').Send} Send
 * @param {{item: Item, send: Send}} props
 */
export function ListItem({ item, send }) {
  const {deletable, value, key} = item
  return (
    <li className={deletable ? "list-item new-item remove-item" : 'list-item new-item'} key={item.key}>
      <span>{value}</span>
      <button onClick={() => send(makeDeletable(key))} className="delete-item">X</button>
    </li>
  )
}
