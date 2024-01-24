import React, { ChangeEvent } from "react";
import { countries } from "../../data/countries";
import "./CurrencySelect.css";

interface CurrencyInputProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  currencies: string[];
  testId?: String;
}

const CurrencySelect: React.FC<CurrencyInputProps> = ({
  label,
  value,
  onChange,
  currencies,
  testId,
}) => {
  return (
    <div>
      <label className="label">{label}</label>
      <select
        name="country"
        className="inputSelect"
        value={value.toString()}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value)
        }
        data-testid={testId}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency} {countries[currency]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
