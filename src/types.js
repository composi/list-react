// Placeholder export to make types importable.
export function noop() { }

///////////////////////////////
// Main @composi/runtime types:
///////////////////////////////
/**
 * @typedef {import('@composi/runtime').Message} Message
 * @typedef {import('@composi/runtime').Send} Send
 * @typedef {import('@composi/runtime').Program} Program
 * @typedef {() => State} GetState
 */

/////////////////
// Project types:
/////////////////
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
 * @prop {() => State} AddItem
 * @prop {(key: number) => State} DeleteItem
 * @prop {(key: number) => State} MakeDeletable
 * @prop {(data: State) => State} SaveLocally
 * @prop {(value: string) => State} UpdateInputValue
 * @prop {(data: State) => State} UseFetchedData
 */
/**
 * @typedef {Object} MessageUnion
 * @prop {(msg: Message, Object: ActionMethods) => State} match
 * @prop {() => Message} AddItem
 * @prop {(key: number) => Message} DeleteItem
 * @prop {(key: number) => Message} MakeDeletable
 * @prop {(data: State) => Message} SaveLocally
 * @prop {(value: string) => Message} UpdateInputValue
 * @prop {(data: State) => Message} UseFetchedData
 */

/**
 * @typedef {Object} InputRef
 * @prop {HTMLInputElement} current
 */