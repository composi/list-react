// Placeholder export to make types importable.
export function noop() { }

///////////////////////////////
// Main @composi/runtime types:
///////////////////////////////
/**
 * @typedef {import('@composi/runtime/types').Message} Message
 * @typedef {import('@composi/runtime/types').Send} Send
 * @typedef {import('@composi/runtime/types').Program} Program
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
 * @prop {() => State} AddItem - Add new item to state items.
 * @prop {(key: number) => State} DeleteItem - Delete item from state items based on key.
 * @prop {(key: number) => State} MakeDeletable - Mark a list item as deletable. This triggers an animation before deletion. When done it will send the message "DeleteItem"
 * @prop {(data: State) => State} SaveLocally - Save state in IndexedDB.
 * @prop {(value: string) => State} UpdateInputValue - Update this value as the user types.
 * @prop {(data: State) => State} UseFetchedData - Get data either from IndexedDB or from JSON file.
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
