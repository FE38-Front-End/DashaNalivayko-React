import React from 'react';
import Button from "./Button.js"
import plus from "./img/pl.png";
import update from "./img/update.png";
import minus from "./img/minus.png";

class Counter extends React.Component {
  constructor(props) {
    super (props);
    this.state = {counter: 0};
  }

  clickPlus = () => {
    this.setState((state) => ({counter: ++state.counter}));
  }

  clickReset = () => {
    this.setState({counter: 0});
  }

  clickMinus = () => {
    this.setState((state) => ({counter: --state.counter}));
  }

  render () {
    return (
    <div className="component">
      <div className="viewer">{this.state.counter}</div>
      <div className="buttons">
        <Button onClick={this.clickPlus} className="plus"><img src={plus} alt="plus"/></Button>
        <Button onClick={this.clickReset} className="update"><img src={update} alt="update"/></Button>
        <Button onClick={this.clickMinus} className="minus"><img src={minus} alt="minus"/></Button>
      </div>
    </div>
    );
  }
}
  

export {Counter};