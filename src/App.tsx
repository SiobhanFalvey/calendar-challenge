import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import CalenderContainer from "./container/calenderContainer";
import NavContainer from "./container/navContainer";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>
              May 2019: This Month at Keen Interpretive Dance Institute
              Enthusiast
            </h1>
          </header>
          <nav>
            <NavContainer />
          </nav>
          <main className="App-main">
            <CalenderContainer />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
