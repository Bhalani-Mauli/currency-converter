//@ts-nocheck
import axios from "axios";
import getConversionRates from "../ratesClient";

const mockXmlRes = `<?xml version="1.0" encoding="UTF-8"?>
<gesmes:Envelope xmlns:gesmes="http://www.gesmes.org/xml/2002-08-01" xmlns="http://www.ecb.int/vocabulary/2002-08-01/eurofxref">
	<gesmes:subject>Reference rates</gesmes:subject>
	<gesmes:Sender>
		<gesmes:name>European Central Bank</gesmes:name>
	</gesmes:Sender>
	<Cube>
		<Cube time='2024-01-24'>
			<Cube currency='USD' rate='1.0905'/>
			<Cube currency='JPY' rate='160.46'/>
			<Cube currency='BGN' rate='1.9558'/>
			<Cube currency='CZK' rate='24.786'/>
			<Cube currency='INR' rate='90.6274'/>
			<Cube currency='KRW' rate='1453.17'/>
		</Cube>
	</Cube>
</gesmes:Envelope>`;

jest.mock("axios");

describe("getConversionRates", () => {
  it("fetches conversion rates successfully", async () => {
    const mockResponse = {
      data: mockXmlRes,
    };
    axios.get.mockResolvedValue(mockResponse);

    const expectedConversionResult = {
      BGN: 1.9558,
      CZK: 24.786,
      EUR: 1,
      INR: 90.6274,
      JPY: 160.46,
      KRW: 1453.17,
      USD: 1.0905,
    };

    const result = await getConversionRates();
    expect(result).toEqual(expectedConversionResult);
  });

  it("handles errors when fetching conversion rates", async () => {
    const mockError = new Error("Request failed");
    axios.get.mockRejectedValue(mockError);

    await expect(getConversionRates()).rejects.toThrow("Request failed");
  });
});
