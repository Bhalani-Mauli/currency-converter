import { convert } from "../currencyConverter.service";

const mockRatesRes = {
  EUR: 1,
  USD: 1.0905,
  JPY: 160.46,
  BGN: 1.9558,
  INR: 90,
};

jest.mock("../../clients/ratesClient.ts", () => {
  return jest.fn(() => mockRatesRes);
});

describe("currencyConverterService", () => {
  it("should return expected result by calling convert INR-EUR", async () => {
    const result = await convert("INR", "EUR", 10);
    expect(result).toEqual({ rate: 90, total: 900 });
  });

  it("should return expected result by calling convert EUR-INR", async () => {
    const result = await convert("EUR", "INR", 10);
    expect(result).toEqual({
      rate: 0.011111111111111112,
      total: 0.1111111111111111,
    });
  });

  it("should return expected result by calling convert USD-JPY", async () => {
    const result = await convert("USD", "JPY", 10);
    expect(result).toEqual({
      rate: 0.006796086252025426,
      total: 0.06796086252025427,
    });
  });
});
