import { Router, Request, Response } from "express";
import { convert } from "../services/currencyConverter.service";

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

convertRoute.post(
  "/",
  async (
    req: Request<ConversionRequestBody>,
    res: Response<ConversionResult>
  ) => {
    const { from, to, amount } = req.body;
    const { rate, total } = await convert(to, from, amount);

    res.status(200).json({
      amount,
      from,
      to,
      total,
      rate: rate,
      date: new Date(),
    });
  }
);

export default convertRoute;
