import { useState } from 'react';
import './App.css';
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

const App = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card p-3">
              <form onSubmit={(e) => {
                e.preventDefault()
                convert()
              }}>
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onAmountChange={(amount) => { setAmount(amount) }}
                  onCurrencyChange={(currency) => { setFrom(currency) }}
                  selectCurrency={from}
                />
                <button type="button" className="btn btn-primary my-2 w-100" onClick={swap}>
                  Swap
                </button>
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => { setTo(currency) }}
                  selectCurrency={to}
                  amountDisable
                />
                <button type="submit" className="btn btn-primary w-100">
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
