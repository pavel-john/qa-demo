import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import * as simpleSelectors from './selectors/simpleSelectors';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberField: 0,
    }
  }

  numberUpdate = event => {
    const number = parseInt(event.target.value);
    this.setState({ numberField: number });
  }

  onNumberSet = () => {
    this.props.onSet(this.state.numberField);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Awsome QA brownbag demo app.
          </p>
          <div>
            <p>Counter: {this.props.counter}</p>
            <p>
              <button onClick={this.props.onAdd}>Add</button>
              <button onClick={this.onNumberSet}>Set</button>
              <input type="number" onChange={this.numberUpdate} value={this.state.numberField} />
            </p>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: simpleSelectors.counter(state),
});

const mapDispatchToProps = {
  onAdd: () => ({ type: "COUNTER_ADD" }),
  onSet: value => ({ type: "COUNTER_SET", payload: value }),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const connectedAppComponent = connector(App);

export default connectedAppComponent;
