import { createContext, useContext, useEffect, useReducer } from 'react';
import { fetchDataAll } from '../api/APIUtils'; // Importing the fetchDataAll function from API.js

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
        const data = await fetchDataAll(); // Call fetchDataAll function from API.js
        dispatch({ type: SET_COUNTRIES, payload: data });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData function
  }, []); // Run this effect only once on component mount

  return (
    <CountryContext.Provider value={{ countries: state.countries }}>
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
