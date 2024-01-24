import axios from "axios";
import parser from "xml2json";
import type {
  CurrencyConversionResult,
  CurrencyRate,
} from "../types/Common.js";

const API_URL =
  (process.env.BANK_API_URL as string) ??
  "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";

function getConversionRates(): Promise<CurrencyConversionResult> {
  return axios.get(API_URL).then((res) => {
    const json = JSON.parse(parser.toJson(res.data));
    const conversionObj = json["gesmes:Envelope"]["Cube"]["Cube"]["Cube"];
    return formatData(conversionObj);
  });
}

function formatData(currencyRawArr: CurrencyRate[]): {
  [currency: string]: number;
} {
  const result: { [currency: string]: number } = {};
  result.EUR = 1;
  for (let i = 0; i < currencyRawArr.length; i++) {
    const currency = currencyRawArr[i].currency;
    const rate = currencyRawArr[i].rate;
    result[currency] = +rate;
  }
  return result;
}

export default getConversionRates;
