import * as React from "react";
import styles from "./nav.module.scss";

export interface IProps {}

export interface IState {}

class Nav extends React.Component<IProps, IState> {
  public render() {
    return (
      <section className={styles.searchBar}>
        <input type="text" placeholder="search events" />
      </section>
    );
  }
}

export default Nav;
