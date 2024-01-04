// probably setup global state, and once you fetch all data, just filter
//the data in client instead of fetching new data every time
//you make changes @AcesTheBest
// if the data set is small
import { useEffect, useState } from 'react';
import { useCountryContext } from '../utils/CountryContext';
import SearchIcon from '../assets/Search.svg';
import CountrySort from '../components/CountrySort';
import CountryList from '../components/CountryList';
import {
  fetchDataAll,
  fetchDataRegion,
  fetchSearch,
  fetchIndependent,
} from '../api/APIUtils';
import { populationSort, areaSort, alphabeticalSort } from '../utils/Sorting';

const CountryContainer = () => {
  const { countries, setCountries, fetchData } = useCountryContext();
  // const [CountriesSearch, setCountriesSearch] = useState('');
  const [sortOption, setSortOption] = useState('Population');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [checkIdependent, setCheckIdependent] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleSortOptionClick = async (option) => setSortOption(option);
  const handleRegionButtonClick = async (region) => setSelectedRegion(region);
  const handleIndependentClick = async (check) => {
    console.log(check);
    setCheckIdependent(check);
  };
  // const handleInputChange = (event) => {
  //   const value = event.target.value;
  //   setCountriesSearch(value);
  //   console.log('Input value:', value);
  //   clearTimeout(timer);
  //   const newTimer = setTimeout(async () => {
  //     try {
  //       if (value.trim() === '') {
  //         // If the search is empty, fetch all data
  //         const allData = await fetchDataAll();
  //         setCountries(allData);
  //       } else {
  //         // If there is a search query, fetch and update the search data
  //         const searchData = await fetchSearch(value);
  //         setCountries(searchData);
  //         console.log('Search data:', searchData);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }, 2000);

  //   setTimer(newTimer);
  // };
  const fetchDataAndSetCountries = async () => {
    try {
      let data;
      if (selectedRegion) {
        data = await fetchDataRegion(selectedRegion);
      } else {
        data = (await fetchData()) || (await fetchDataAll());
      }
      switch (sortOption) {
        case 'Population':
          data = populationSort(data);
          break;
        case 'Area':
          data = areaSort(data);
          break;
        case 'Alphabetical':
          data = alphabeticalSort(data);
          break;
      }
      if (checkIdependent) {
        data = await fetchIndependent(data);
      }
      setCountries(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchDataAndSetCountries();
  }, [selectedRegion, sortOption, checkIdependent, fetchData]);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <main className="container mx-auto bg-gray-100 p-3 lg:p-6 lg:rounded-lg lg:shadow-xl lg:border border-gray-200">
      <section className="flex justify-between items-center mb-6">
        <p className="tag text-sm">Found {countries.length} countries</p>
        <div className="flex gap-x-3 bg-gray-200 p-2 rounded-md">
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            placeholder="Not Yet Available. :("
            value={CountriesSearch}
            className="bg-transparent text-sm w-[170px] text-white"
          />
        </div>
      </section>
      <main className="flex flex-col lg:flex-row">
        <CountrySort
          onIndependent={handleIndependentClick}
          onRegionButtonClick={handleRegionButtonClick}
          onSortOption={handleSortOptionClick}
        />
        <CountryList countries={countries} />
      </main>
    </main>
  );
};

export default CountryContainer;
