export function noop() { }
/**
 * Core types for use with view, update, subscriptions and actions.
 * @typedef {import('@composi/core').Message} Message
 * @typedef {import('@composi/core').Send} Send
 * @typedef {import('@composi/core').Program} Program
 * @typedef {import('@composi/core').VNode} VNode
 * @typedef {() => State} GetState
 */

/**
 * @typedef {Object} Item
 * @prop {number} key
 * @prop {string} value
 * @prop {boolean} [deletable]
 */
/**
 * @typedef {Object} State
 * @prop {number} newKey
 * @prop {string} inputValue
 * @prop {Item[]} items
 */

/**
 * @typedef {Object} ActionMethods
 * @prop {(value: string) => State} updateInputValue
 * @prop {() => State} addItem
 * @prop {(key: number) => State} makeDeletable
 * @prop {(key: number) => State} deleteItem
 * @prop {(data: State) => State} useFetchedData
 * @prop {(data: State) => States} saveLocally
 */
/**
 * @typedef {Object} MessageUnion
 * @prop {(msg: Message, Object: ActionMethods) => State} match
 * @prop {(value: string) => Message} updateInputValue
 * @prop {() => Message} addItem
 * @prop {(key: number) => Message} makeDeletable
 * @prop {(key: number) => Message} deleteItem
 * @prop {(data: State) => Message} useFetchedData
 * @prop {(data: State) => Message} saveLocally
 */

/**
 * @typedef {Object} InputRef
 * @prop {HTMLInputElement} current
 */