import { union } from '@composi/runtime'


/**
 * Define tagged union for actions.
 * @type {import('../types').MessageUnion}
 */
export const Msg = union('UpdateInputValue', 'AddItem', 'MakeDeletable', 'DeleteItem', 'UseFetchedData', 'SaveLocally')

export const { UpdateInputValue, AddItem, MakeDeletable, DeleteItem, UseFetchedData, SaveLocally} = Msg
