import React from 'react';
import './Fieldset.scss';


class Fieldset extends React.Component {
  constructor(props) {
    super (props);
  }

  inputChange = (event) => this.props.onChange (event.target.value);
  clear = (event) => {event.target.value = ''}

  render () {
    const value = this.props.value;
    const currency = this.props.currency;

    return (
        <fieldset className="app-exchanger">
            <legend className="legend">Enter currency in {this.props.legend}</legend>
            <label for={currency}>{currency}</label>
            <input id={currency} type="number" value={value} onChange={this.inputChange} onClick={this.clear}></input>
        </fieldset>
    );

  }
}
  

export {Fieldset};