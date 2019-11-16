import React from 'react';
import ReactDOM from 'react-dom'
import { run } from '@composi/runtime'
import { Title } from './components/title'
import { TodoList } from './components/todo-list'
import { actions } from './effects/actions'
import { subs } from './effects/subscriptions'
import './styles/styles.css'


/**
 * @typedef {import('./types').State} State
 * @typedef {import('./types').Send} Send
 * @typedef {import('./types').Message} Message
 * @typedef {import('./types').GetState} GetState
 * @typedef {import('./types').Program} Program
 */

const section = document.querySelector('section')

/** @type {Program} */
const program = {
  init() {

  },
  /**
   * @param {State} state
   * @param {Send} send
   */
  view(state, send) {
    return state && ReactDOM.render(
      <>
        <Title greeting='Composi' />
        <TodoList {...{ state, send }} />
      </>,
      section
    )
  },
  /**
   * @param {State} state
   * @param {Message} msg
   * @param {Send} send
   */
  update(state, msg, send) {
    return actions(state, msg, send)
  },
  /**
   * @param {GetState} getState
   * @param {Send} send
   */
  subscriptions(getState, send) {
    return subs(getState, send)
  }
}

run(program)
