import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  countries: [],
};

const SET_COUNTRIES = 'SET_COUNTRIES';
const FETCH_DATA = 'FETCH_DATA';

const countryReducer = (state, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return { ...state, countries: action.payload };
    case FETCH_DATA:
      // You can handle fetching actions here if needed
      return state;
    default:
      return state;
  }
};

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countryReducer, initialState);

  const setCountries = (countries) => {
    dispatch({ type: SET_COUNTRIES, payload: countries });
  };

  return (
    <CountryContext.Provider
      value={{ countries: state.countries, setCountries }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }

  const fetchData = async () => {
    // You can dispatch FETCH_DATA action here if needed
    // Example: context.dispatch({ type: FETCH_DATA });

    try {
      // Fetch data here and update state using setCountries
      // const data = await fetchDataFunction();
      // context.setCountries(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { ...context, fetchData };
};
