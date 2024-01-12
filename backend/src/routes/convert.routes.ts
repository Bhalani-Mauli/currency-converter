import { Router, Request, Response } from "express";
import getConversionRates from "../provider/ratesProvider";

const convertRoute = Router();

interface ConversionRequestBody {
  from: string;
  to: string;
  amount: number;
}

interface ConversionResult {
  amount: number;
  from: string;
  to: string;
  total: number;
  rate: number;
  date: Date;
}

convertRoute.get("/", async (req: Request, res: Response) => {
  const rates = await getConversionRates();
  res.send(rates);
});

convertRoute.post(
  "/",
  async (req: Request, res: Response<ConversionResult>) => {
    console.log("=====", req);
    const { from, to, amount } = req.body;
    const rates = await getConversionRates();

    const result = calculate(from, to, amount, rates);
    const rate = rates[to as string] / rates[from as string];

    res.status(200).json({
      amount,
      from,
      to,
      total: result,
      rate: rate,
      date: new Date(),
    });
  }
);

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

export default convertRoute;
