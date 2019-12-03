import {union} from '@composi/runtime'


/**
 * Define tagged union for actions.
 * @type {import('../types').MessageUnion}
 */
const Msg = union(
  'AddItem',
  'DeleteItem',
  'MakeDeletable',
  'SaveLocally',
  'UpdateInputValue',
  'UseFetchedData'
)

export const {
  match,
  AddItem,
  DeleteItem,
  MakeDeletable,
  SaveLocally,
  UpdateInputValue,
  UseFetchedData
} = Msg
