import * as React from "react";
import styles from "./nav.module.scss";
import { ICalendarEvents } from "../reducers/calendarReducer";

export interface IProps {
  searchText: string;
  onSearchTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IState {}

class Nav extends React.Component<IProps, IState> {
  public render() {
    return (
      <section className={styles.searchBar}>
        <input
          type="text"
          placeholder="search events"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </section>
    );
  }
}

export default Nav;
