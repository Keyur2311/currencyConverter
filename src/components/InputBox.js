import React, { useId } from 'react'

const InputBox = ({ label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency = "usd", amountDisable = false, currencyDisable = false }) => {
    const amountInputId = useId();
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card p-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor={amountInputId}>{label} </label>
                            <input
                                type="number"
                                className="form-control"
                                id={amountInputId}
                                placeholder="0"
                                disabled={amountDisable}
                                value={amount}
                                onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="currencyType">Currency Type</label>
                            <select className="form-control" id="currencyType" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>

                                {currencyOptions.map((currency) => {

                                    return <option key={currency} value={currency}>{currency}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputBox