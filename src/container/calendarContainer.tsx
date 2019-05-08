import * as React from "react";
import Calendar from "../components/calendar/calendar";
import { fetchCalendar, ICalendarEvents } from "../reducers/calendarReducer";
import { connect } from "react-redux";
import { IStore } from "../reducers";
import { setSearchText } from "../reducers/searchBarReducer";
import SearchBar from "../components/searchBar/searchBar";
import styles from "./calendarContainer.module.scss";

export interface IReactProps {}

export interface IReduxProps {
  fetchCalendar: () => void;
  calendarEvents: ICalendarEvents[];
  searchText: string;
  setSearchText: (input: string) => {};
}

export interface IState {
  filteredEvents: ICalendarEvents[];
}

class CalendarContainer extends React.Component<
  IReactProps & IReduxProps,
  IState
> {
  public state = {
    filteredEvents: this.props.calendarEvents
  };

  public componentDidMount = () => {
    this.props.fetchCalendar();
  };

  public componentDidUpdate = (prevProps: IReduxProps) => {
    if (prevProps.calendarEvents !== this.props.calendarEvents) {
      this.setState({ filteredEvents: this.props.calendarEvents });
    }
  };

  public onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newSearchText = event.target.value;

    newSearchText.includes("2")
      ? this.onDateChange(event)
      : this.onSummaryChange(event);
  };

  public onSummaryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.props.setSearchText(event.target.value);

    this.setState({
      filteredEvents: this.props.calendarEvents.filter(item =>
        item.summary.toLowerCase().includes(event.target.value.toLowerCase())
      )
    });
  };

  public onDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newSearchTextTwo = event.target.value;

    const filteredList = this.props.calendarEvents.filter(itemTwo =>
      itemTwo.start.date ? itemTwo.start.date.includes(newSearchTextTwo) : false
    );
    console.log(filteredList);

    this.props.setSearchText(newSearchTextTwo);

    this.setState({
      filteredEvents: filteredList
    });

    // this.updateState(filteredList);
  };

  // public updateState = (events: ICalendarEvents[]) => {
  //   console.log("sdfjhbsdfkljhgsdfkjhg");
  //   this.setState({
  //     filteredEvents: events
  //   });
  // };

  public render() {
    return (
      <section className={styles.calendarPage}>
        <nav>
          <SearchBar
            searchText={this.props.searchText}
            onSearchTextChange={this.onChange}
          />
        </nav>
        <article className={styles.individualEvent}>
          {this.state.filteredEvents.map((calendar, index) => (
            <Calendar key={index} calendar={calendar} />
          ))}
        </article>
      </section>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return {
    calendarEvents: state.calendar.calendarEvents,
    searchText: state.search.searchText
  };
};

const mapDispatchToProps = { fetchCalendar, setSearchText };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarContainer);
