import { configureStore } from '@reduxjs/toolkit';
import countriesService from "../services/countries";
import countriesSlice, { initializeCountries } from '../store/countriesSlice';
// decorated with jest
// adds methods to the functions
// fex mockResolvedValue
jest.mock('../services/countries');

describe('countriesSlice tests', () => {
    let store;
    beforeEach(() => {
        store = configureStore({
            reducer: {
                countries: countriesSlice
            }
        })
    });

    it("Should handle the initial state", () => {
        const { countries, isLoading } = store.getState().countries;
        /*
        testing this:
         initialState: {
    countries: [],
    isLoading: true,
  }, */
        expect(countries).toEqual([]);
        expect(isLoading).toBe(true);
    });

    it('Should handle getCountries', () => {
        store.dispatch({
            type: "countries/getCountries",
            payload: ["Country 1", "Country 2"]
        });
        expect(store.getState().countries.countries).toEqual([
            "Country 1",
            "Country 2"
        ]);
        expect(store.getState().countries.isLoading).toBe(false);
    });

    it('Should handle initializeCountries', async () => {
        const mockCountries = ["Country 1", "Country 2"];
        //
        countriesService.getAll.mockResolvedValue(mockCountries);

        await store.dispatch(initializeCountries())

        expect(store.getState().countries.countries).toEqual(mockCountries)
        expect(store.getState().countries.isLoading).toEqual(false)




    })


})
