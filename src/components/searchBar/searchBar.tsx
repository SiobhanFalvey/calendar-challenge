import * as React from "react";
import styles from "../searchBar/searchBar.module.scss";

export interface IProps {
  searchText: string;
  onSearchTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IState {}

class SearchBar extends React.Component<IProps, IState> {
  public render() {
    return (
      <section className={styles.searchBarPage}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="search events"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </section>
    );
  }
}

export default SearchBar;
