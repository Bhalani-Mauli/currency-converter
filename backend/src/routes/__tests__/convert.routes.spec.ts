import request from "supertest";

import app from "../../../server";

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
jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));

describe("test convert routes", () => {
  it("should convert the rate from EUR to INR", async () => {
    const res = await request(app).post("/api/convert/").send({
      from: "EUR",
      to: "INR",
      amount: 10,
    });

    expect(res.body).toEqual({
      amount: 10,
      date: "2020-01-01T00:00:00.000Z",
      from: "EUR",
      rate: 90,
      to: "INR",
      total: 900,
    });
  });
});
