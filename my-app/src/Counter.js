import React from 'react';
import plus from "./img/pl.png";
import update from "./img/update.png";
import minus from "./img/minus.png";

class Counter extends React.Component {
  constructor(props) {
    super (props);
    this.state = {counter: props.counter};
  }

  clickHandler = () => {
    this.setState((state) => ({counter: state.counter++}));
  }


  render () {
    return (
    <div className="component">
    <div className="viewer">{this.props.counter}</div>
    <div className="buttons">
    <button onClick={this.clickHandler} className="plus"><img src={plus} alt="plus"/></button>
    <button className="update"><img src={update} alt="update"/></button>
    <button className="minus"><img src={minus} alt="minus"/></button>
    </div>
    </div>
    );
  }
}
  

export {Counter};