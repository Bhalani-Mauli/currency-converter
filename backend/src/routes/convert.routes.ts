import { Router } from "express";
import getConversionRates from "../provider/ratesProvider";

const convertRoute = Router();

convertRoute.get("/", async (req, res) => {
  const rates = await getConversionRates();
  res.send(rates);
});

export default convertRoute;
