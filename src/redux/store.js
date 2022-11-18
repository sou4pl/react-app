import { createStore } from 'redux';
import shortid from 'shortid';
import stringContains from '../utils/stringContains';
import initialState from './initialState';

//selectors
export const getFilteredCards = ({searchPhrase, cards}, columnId) => cards.filter(card => card.columnId === columnId && stringContains(card.title, searchPhrase));

export const getAllColumns = state => state.columns;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const getAllCards = state => state.cards;

export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite === true);

// action creators
export const addList = payload => ({ type: 'ADD_LIST', payload });

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const updateSearchPhrase = payload => ({ type: 'UPDATE_SEARCH_PHRASE', payload });

export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST': 
    return {...state, lists: [...state.lists, {id: shortid(), ...action.payload, } ]};
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, {id: shortid(), ...action.payload, } ]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {id: shortid(), ...action.payload, } ]};
    case 'UPDATE_SEARCH_PHRASE':
      return {...state, searchPhrase: action.payload};    
      case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    default: 
      return state;
  }
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;