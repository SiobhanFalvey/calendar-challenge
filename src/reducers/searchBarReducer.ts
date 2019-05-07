// action types
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

// action creators
export const setSearchText = (searchText: string): ISetSearchTextAction => ({
  type: SET_SEARCH_TEXT,
  searchText
});

export interface ISetSearchTextAction {
  type: typeof SET_SEARCH_TEXT;
  searchText: string;
}

type ISearchActions = ISetSearchTextAction;

export interface ISearchState {
  searchText: string;
}

// reducer with initial state
const initialState: ISearchState = {
  searchText: ""
};

const searchReducer = (state = initialState, action: ISearchActions) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };

    default:
      return state;
  }
};

export default searchReducer;
