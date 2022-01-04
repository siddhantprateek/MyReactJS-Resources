import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
import axios from "axios";
const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setchosenPrimaryCurrency] = useState('BTC');
  const [chosenSecondaryCurrency, setchosenSecondaryCurrency] = useState('BTC');
  const [amount, setAmount] = useState(1)

  const [exchangeRate, setexchangeRate] = useState(0)
  const [result, setResult] = useState(0)
  const convert = () => {

    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
      setexchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]*amount)
    }).catch( (error) =>{
      console.error(error);
    });
  }

  console.log('Exchange Rate: ', exchangeRate)
  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>
      <table>
        <tbody>
          <tr>
            <td>Primary Currency</td>
            <td>
              <input 
              type="number" 
              name="currency-amount-1" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}/>
            </td>
            <td>
              <select
                value={chosenPrimaryCurrency}
                name="currency-option-1"
                className="currency-option"
                onChange={(e) => setchosenPrimaryCurrency(e.target.value)}
              >
                {currencies.map((currency, _index) => (
                  <option key={_index}>{currency}</option>
                ))}
              </select>
            </td>
          </tr>

          <tr>
            <td>Secondary Currency</td>
            <td>
              <input type="number" name="currency-amount-2" value={result} disabled={true}/>
            </td>
            <td>
              <select
                value={chosenSecondaryCurrency}
                name="currency-option-2"
                className="currency-option"
                onChange={(e) => setchosenSecondaryCurrency(e.target.value)}
              >
                {currencies.map((currency, _index) => (
                  <option key={_index}>{currency}</option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button id="convert-button" onClick={convert}>Convert</button>
      <ExchangeRate 
        exchangeRate={exchangeRate}
        chosenPrimaryCurrency={chosenPrimaryCurrency}
        chosenSecondaryCurrency={chosenSecondaryCurrency}/>
    </div>
  );
};

export default CurrencyConverter;
