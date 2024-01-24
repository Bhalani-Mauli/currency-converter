import { useEffect, useState } from "react";

import { Button } from "../Button/Button";
import { countries } from "../../data/countries";
import { getConversionRates } from "../../apis/apis";
import CurrencySelect from "../CurrencySelect/CurrencySelect";

import "./converter.css";

const countriesList = Object.keys(countries);

const Converter = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [convertedValue, setConvertedValue] = useState<number | null>(null);
  const [error, setError] = useState<string | null>();

  const handleConvert = async () => {
    setError(null);
    try {
      const response = await getConversionRates(
        fromCurrency,
        toCurrency,
        amount
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setConvertedValue(data.total.toFixed(2));
    } catch (error) {
      setError("Error Fetching the response");
    }
  };

  useEffect(() => {
    setConvertedValue(null);
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="converter-wrapper">
      <div className="converter-card">
        <label className="label">Amount</label>
        <input
          type="number"
          placeholder="Amount"
          className="inputSelect"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <CurrencySelect
          label="From"
          value={fromCurrency}
          onChange={setFromCurrency}
          currencies={countriesList}
        />
        <CurrencySelect
          label="To"
          value={toCurrency}
          onChange={setToCurrency}
          currencies={countriesList}
        />
        {convertedValue !== null && (
          <div className="result-wrapper label">
            <p>
              {amount} {countries[fromCurrency]} =
              <span className="convertedValue"> {convertedValue} </span>
              {countries[toCurrency]}
            </p>
          </div>
        )}
        <div className="submit-section">
          <Button onClick={handleConvert}>Convert</Button>
        </div>
        {error}
      </div>
    </div>
  );
};

export default Converter;
