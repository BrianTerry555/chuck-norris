import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";

//import css
import "./css/index.css";

//import components
import JokesContainer from "./containers/jokes-container.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <JokesContainer />
    );
  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
