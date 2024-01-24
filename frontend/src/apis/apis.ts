const API_URL = import.meta.env.VITE_API_URL;

const getConversionRates = (
  fromCurrency: string,
  toCurrency: string,
  amount: number
) => {
  return fetch(API_URL + "/api/convert", {
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
};

export { getConversionRates };
