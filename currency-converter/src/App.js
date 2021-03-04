import React from 'react';
import './App.scss';
import {Fieldset} from "./Fieldset";

const rate = 2.64;


class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {currency: 'USD', value: 0}
  }
  
  toBYN = (USD) => {
    return USD * rate;
  }
  
  toUSD = (BYN) => {
    return BYN / rate;
  }

  convertCurrency = (value, convertor) => {
    let converted = convertor(value);
    let rounded = Math.round(converted * 100) / 100
    return rounded
  }

  onChangeInUSD = (value) => {this.setState({currency: 'USD', value});}
  onChangeInBYN = (value) => {this.setState({currency: 'BYN', value});}

  render () {
    const value = this.state.value;
    const currency = this.state.currency;
    const USD = currency === 'BYN' ? this.convertCurrency (value, this.toUSD) : value;
    const BYN = currency === 'USD' ? this.convertCurrency (value, this.toBYN) : value;

    return (
    <div className="app">
      <h2>Live currency converter</h2>
      < Fieldset currency="USD" legend="$, USD" value={USD} onChange = {this.onChangeInUSD}/>
      < Fieldset currency="BYN" legend="BYN" value={BYN} onChange = {this.onChangeInBYN}/>
    </div>
    )

  };
}

export default App;
