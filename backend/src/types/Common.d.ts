export type CurrencyRate = {
  currency: string;
  rate: string;
};

export type CurrencyConversionResult = {
  [currency: string]: string | number;
};
