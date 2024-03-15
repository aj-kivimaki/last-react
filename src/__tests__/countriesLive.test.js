import countries from "../services/countries";

test("getAll returns data from the API", async () => {
  // Call the getAll function from the countries service
  const testData = await countries.getAll();

  // Check that the data is an array
  expect(Array.isArray(testData)).toBe(true);

  // Check that each item in the array has the properties we expect
  testData.forEach((country) => {
    expect(country).toHaveProperty("name");
    expect(country).toHaveProperty("population");
    expect(country).toHaveProperty("area");
  });
});
