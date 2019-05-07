import { combineReducers } from "redux";
import calendarReducer, { ICalendarState } from "./calendarReducer";
import searchReducer, { ISearchState } from "./searchBarReducer";

export interface IStore {
  calendar: ICalendarState;
  search: ISearchState;
}

export default combineReducers({
  calendar: calendarReducer,
  search: searchReducer
});
