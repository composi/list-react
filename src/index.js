import React from 'react';
import { render } from './utils'
import { run } from '@composi/core'
import { Title } from './components/title'
import { actions } from './effects/actions'
import { List } from './components/list'
import { batchedSubscriptions } from './effects/subscriptions'
import './styles/styles.css'

render(<Title greeting='Composi'/>, 'header')


const program = {
  init() {
    return [null]
  },
  view(state, send) {
    return state && render(<List {...{state, send}} />, 'section');
  },
  update(state, msg, send) {
    return actions(state, msg, send)
  },
  subscriptions(state, send) {
    return batchedSubscriptions
  }
}

run(program)
