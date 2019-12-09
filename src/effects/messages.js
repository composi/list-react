import {union} from '@composi/runtime'


/**
 * Define tagged union for actions.
 * @type {import('../types').MessageUnion}
 */
export const {
  match,
  AddItem,
  DeleteItem,
  MakeDeletable,
  SaveLocally,
  UpdateInputValue,
  UseFetchedData
} = union(
  'AddItem',
  'DeleteItem',
  'MakeDeletable',
  'SaveLocally',
  'UpdateInputValue',
  'UseFetchedData'
)
