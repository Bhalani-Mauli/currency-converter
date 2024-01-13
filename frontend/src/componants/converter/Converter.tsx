import { useEffect, useState } from "react";
import { FancyButton } from "../Button/FancyButton";
import { countries } from "../../data/countries";
import "./converter.css";

const countriesList = Object.keys(countries);

const Converter = () => {
  const [amount, setAmount] = useState<number | string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  const handleConvert = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromCurrency,
          to: toCurrency,
          amount: +amount,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setConvertedValue(data.total.toFixed(2));
    } catch (error) {
      console.error("Error converting:", error);
    }
  };

  useEffect(() => {
    setConvertedValue(null);
  }, [fromCurrency, toCurrency]);

  return (
    <div className="converter-wrapper">
      <div className="converter-card">
        <label className="label">Amount</label>
        <input
          type="number"
          placeholder="Amount"
          className="inputSelect"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label className="label">From</label>
        <select
          name="country"
          className="inputSelect"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {countriesList.map((country) => {
            return (
              <option key={country} value={country}>
                {country} {countries[country]}
              </option>
            );
          })}
        </select>
        <label className="label">To</label>
        <select
          name="country"
          className="inputSelect"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {countriesList.map((country) => {
            return (
              <option key={country} value={country}>
                {country} {countries[country]}
              </option>
            );
          })}
        </select>
        {convertedValue !== null && (
          <div className="result-wrapper label">
            <p>{`${amount} ${countries[fromCurrency]} = ${convertedValue} ${countries[toCurrency]}`}</p>
          </div>
        )}
        <div className="submit-section">
          <FancyButton onClick={handleConvert}>Convert</FancyButton>
        </div>
      </div>
    </div>
  );
};

export default Converter;
