import { createContext, useContext, useEffect, useState } from 'react';
import { fetchDataAll, fetchDataRegion } from '../api/APIUtils.js';
import { populationSort } from '../utils/sorting.js';

const appContext = createContext({});

function AppContextProvider({ children }) {
  const [countries, setCountries] = useState([]);

  const [sortList, setSortList] = useState('Population');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataAll();
        setCountries(populationSort(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <appContext.Provider
      value={{
        countries,
        setCountries,
        sortList,
        setSortList,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

const useAppContext = () => useContext(appContext);
export { AppContextProvider, useAppContext };
