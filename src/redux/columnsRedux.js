import shortid from "shortid";

//selectors
export const getAllColumns = state => state.columns;
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

//actions
const createActionName = actionName => `app/columns/${actionName}`;
export const ADD_COLUMN = createActionName('ADD_COLUMN');
export const DELETE_COLUMN = createActionName('DELETE_COLUMN')

//action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const deleteColumn = payload => ({ type: 'DELETE_COLUMN', payload });

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'DELETE_COLUMN':
      return [...statePart.filter(column => column.id !== action.payload)]
    default:
      return statePart;
  }
}

export default columnsReducer;