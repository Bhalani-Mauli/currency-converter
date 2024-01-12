import { useEffect, useState } from "react";
import "../App.css";

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
      setConvertedValue(data.total);
    } catch (error) {
      console.error("Error converting:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="text-wrapper">
        <label>Amount</label>
        <input
          type="number"
          placeholder="Amount"
          className="allInputSelect"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>From</label>
        <select
          name="country"
          className="allInputSelect"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>
        <label>To</label>
        <select
          name="country"
          className="allInputSelect"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
        {convertedValue !== null && (
          <div className="result-wrapper">
            <p>{`${amount} ${fromCurrency} = ${convertedValue} ${toCurrency}`}</p>
          </div>
        )}
        <button className="btn-convert" onClick={handleConvert}>
          Convert
        </button>
      </div>
    </div>
  );
};

export default Converter;
