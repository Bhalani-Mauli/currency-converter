import React from "react";
import { countries } from "../../data/countries";

interface ResultProps {
  amount: string | number;
  fromCurrency: string;
  toCurrency: string;
  convertedValue: number | null;
}

const Result: React.FC<ResultProps> = ({
  amount,
  fromCurrency,
  toCurrency,
  convertedValue,
}) => {
  return (
    convertedValue !== null && (
      <div className="result-wrapper label">
        <p>
          {amount} {countries[fromCurrency]} =
          <span className="convertedValue"> {convertedValue} </span>
          {countries[toCurrency]}
        </p>
      </div>
    )
  );
};

export default Result;
