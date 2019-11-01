import { union } from '@composi/core'


/**
 * Define tagged union for actions.
 * @type {import('../types').MessageUnion}
 */
export const Msg = union('updateInputValue', 'addItem', 'makeDeletable', 'deleteItem', 'useFetchedData', 'saveLocally')

export const { updateInputValue, addItem, makeDeletable, deleteItem, useFetchedData, saveLocally} = Msg
