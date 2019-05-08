import * as React from "react";
import { ICalendarEvents } from "../../reducers/calendarReducer";
import styles from "./calendar.module.scss";

export interface IProps {
  calendar: ICalendarEvents;
}

export interface IState {}

class Calendar extends React.Component<IProps, IState> {
  public render() {
    return (
      <section className={styles.eventContainer}>
        <article className={styles.calendarContainer}>
          <h2>{this.props.calendar.summary} </h2>
          <p>Start Date: {this.props.calendar.start.date} </p>
          <p>End Date: {this.props.calendar.end.date} </p>
        </article>
      </section>
    );
  }
}

export default Calendar;
