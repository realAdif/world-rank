import { createContext, useContext, useEffect, useReducer } from 'react';
import { fetchDataAll, fetchSearch } from '../api/APIUtils'; // Importing the fetchDataAll function from API.js
import { populationSort } from '../utils/Sorting';
const initialState = {
  countries: [],
};

const SET_COUNTRIES = 'SET_COUNTRIES';

const countryReducer = (state, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countryReducer, initialState);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataAll(); // Call fetchDataAll function from API.js\
        const sortedData = populationSort(data); // Sort data by population
        dispatch({ type: SET_COUNTRIES, payload: sortedData });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData function
  }, []); // Run this effect only once on component mount

  const setCountries = (countries) => {
    dispatch({ type: SET_COUNTRIES, payload: countries });
  };

  const fetchDataBySearch = async (searchQuery) => {
    try {
      const data = await fetchSearch(searchQuery);
      console.log('search', searchQuery);
      console.log('search-data', data);
      setCountries(data); // Call setCountries to update state
    } catch (err) {
      console.error(err);
    }
  };

  const contextValue = {
    countries: state.countries,
    setCountries: setCountries,
    fetchDataBySearch: fetchDataBySearch, // Add fetchDataBySearch to context value
  };

  return (
    <CountryContext.Provider value={contextValue}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};
