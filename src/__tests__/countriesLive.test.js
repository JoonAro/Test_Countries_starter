import countries from '../services/countries';

test('getAll returns data from the API', async () => {
    const data = await countries.getAll();
    // check that the data we receive is an array
    expect(Array.isArray(data)).toBe(true);
    //check that each item in the array has the properties we expect
    data.forEach((country) => {
        expect(country).toHaveProperty("name");
        expect(country).toHaveProperty("population");
        expect(country).toHaveProperty("area");
    });
});