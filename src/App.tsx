import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import CalendarContainer from "./container/calendarContainer";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>
              May 2019: This Month for the Keen Interpretive Dance Institute
              Enthusiast
            </h1>
          </header>
          <main className="App-main">
            <CalendarContainer />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
