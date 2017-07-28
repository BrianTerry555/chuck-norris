import React from "react";


class Jokes extends React.Component {
  render() {
    return (
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Chuck Norris</h1>
                <h3>Click my face if you Dare!!!</h3>
                <button onClick={() => {this.props.handleClick(this.props.input);}} className="input-button"></button>
                <h4>{this.props.text}</h4>
              </div>
              <div className="col-md-6">
              </div>
            </div>
          </div>
    )
  }
}
export default Jokes;
