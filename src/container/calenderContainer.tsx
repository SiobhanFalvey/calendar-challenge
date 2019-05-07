import * as React from "react";
import Calendar from "../components/calender";
import { fetchCalendar, ICalendarEvents } from "../reducers/calendarReducer";
import { connect } from "react-redux";
import { IStore } from "../reducers";
import styles from "../components/calendar.module.scss";

export interface IReactProps {
  // calendarEvents: ICalendarEvents;
}

export interface IReduxProps {
  fetchCalendar: () => void;
  calendarEvents: ICalendarEvents[];
}

export interface IState {
  kind: string;
  summary: string;
  start: {
    date: string;
  };
  end: {
    date: string;
  };
}

class CalenderContainer extends React.Component<
  IReactProps & IReduxProps,
  IState
> {
  public state = {
    kind: "",
    summary: "",
    start: {
      date: ""
    },
    end: {
      date: ""
    }
  };
  public componentDidMount = () => {
    this.props.fetchCalendar();
  };
  public render() {
    return (
      <>
        {this.props.calendarEvents.map((calendar, index) => (
          <Calendar key={index} calendar={calendar} />
        ))}
      </>
    );
  }
}
// private filterCards =( calendarEvents: ICalendarEvents[]) => {
//   const filterEvents = calendarEvents.filter(calendarEvents)
//   return filterEvents
// }

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return {
    calendarEvents: state.calendar.calendarEvents
  };
};

const mapDispatchToProps = { fetchCalendar };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalenderContainer);
