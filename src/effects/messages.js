import { union } from '@composi/runtime'


/**
 * Define tagged union for actions.
 * @type {import('../types').MessageUnion}
 */
export const Msg = union(
  'AddItem',
  'DeleteItem',
  'MakeDeletable',
  'SaveLocally',
  'UpdateInputValue',
  'UseFetchedData'
)

export const {
  AddItem,
  DeleteItem,
  MakeDeletable,
  SaveLocally,
  UpdateInputValue,
  UseFetchedData
} = Msg
