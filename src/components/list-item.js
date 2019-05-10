import React from 'react'
import { Msg } from '../effects/messages'
const { makeDeletable } = Msg

export function ListItem({ item, send }) {
  return (
    <li className={item.deletable ? "list-item new-item remove-item" : 'list-item new-item'} key={item.key}>
      <span>{item.value}</span>
      <button onClick={() => send(makeDeletable(item.key))} className="delete-item">X</button>
    </li>
  )
}
