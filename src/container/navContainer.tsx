import * as React from "react";
import Nav from "../components/nav";
import { setSearchText } from "../reducers/searchBarReducer";
import { connect } from "react-redux";
import { IStore } from "../reducers";
import { ICalendarEvents } from "../reducers/calendarReducer";

export interface IReactProps {}

export interface IReduxProps {
  searchText: string;
  setSearchText: (input: string) => {};
}

export interface IState {}

class NavContainer extends React.Component<IReactProps & IReduxProps, IState> {
  public state = { searchText: "" };

  public onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newSearchText = event.target.value;
    this.props.setSearchText(newSearchText);
    this.setState({
      searchText: this.props.searchText
    });
  };

  public render() {
    return (
      <>
        <Nav
          searchText={this.props.searchText}
          onSearchTextChange={this.onChange}
        />
      </>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return {
    searchText: state.search.searchText
  };
};

const mapDispatchToProps = { setSearchText };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavContainer);
