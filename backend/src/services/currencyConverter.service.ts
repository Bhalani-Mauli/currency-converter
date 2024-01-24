import getConversionRates from "../clients/ratesClient";

async function convert(
  to: string,
  from: string,
  amount: number
): Promise<{ rate: number; total: number }> {
  const rates = await getConversionRates();
  const total = calculate(from, to, amount, rates);
  const rate = +rates[to] / +rates[from];
  return { rate, total };
}

function calculate(
  from: string,
  to: string,
  amt: number,
  currentRates: any
): number {
  let result: number;
  if (from === "EUR") {
    result = amt * currentRates[to];
  } else if (to === "EUR") {
    result = amt / currentRates[from];
  } else {
    result = amt * (currentRates[to] / currentRates[from]);
  }
  return result;
}

export { convert };
