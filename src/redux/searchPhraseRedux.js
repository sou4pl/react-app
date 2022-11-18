// actions
const createActionName = actionName => `app/searchForm/${actionName}`;
export const UPDATE_SEARCH_PHRASE = createActionName('UPDATE_SEARCH_PHRASE');

// action creators
export const updateSearchPhrase = payload => ({ type: 'UPDATE_SEARCH_PHRASE', payload });

const searchPhraseReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCH_PHRASE':
      return action.payload
    default:
      return statePart;
  }
}

export default searchPhraseReducer;