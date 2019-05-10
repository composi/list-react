import { union } from '@composi/core'


// Define tagged union for actions:
export const Msg = union('updateInputValue', 'addItem', 'makeDeletable', 'deleteItem', 'useFetchedData', 'saveLocally')
