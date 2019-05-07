import * as React from "react";
import Nav from "../components/nav";

export interface IProps {}

export interface IState {}

class NavContainer extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <>
        <Nav />
      </>
    );
  }
}

export default NavContainer;
