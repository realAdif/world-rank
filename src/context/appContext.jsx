import { createContext, useContext, useEffect, useState } from 'react';

const appContext = createContext({});

function AppContextProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [sortList, setSortList] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
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
