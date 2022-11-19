import shortid from "shortid";
import stringContains from '../utils/stringContains';

//selectors
export const getFilteredCards = ({searchPhrase, cards}, columnId) => cards.filter(card => card.columnId === columnId && stringContains(card.title, searchPhrase));
export const getAllCards = state => state.cards;
export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite === true);


// actions
const createActionName = actionName => `app/card/${actionName}`;
export const ADD_CARD = createActionName('ADD_CARD');

//action creators
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });
export const deleteCardByCardId = payload => ({ type: 'DELETE_CARD_BY_CARD_ID', payload});
export const deleteCardByColumnId = payload => ({type: 'DELETE_CARD_BY_COLUMN_ID', payload});

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case 'DELETE_CARD_BY_CARD_ID':
      return [...statePart.filter(card => card.id !== action.payload)]
      case 'DELETE_CARD_BY_COLUMN_ID':
        return [...statePart.filter(card => card.columnId !== action.payload)]
    default:
      return statePart;
  }
}

export default cardsReducer;