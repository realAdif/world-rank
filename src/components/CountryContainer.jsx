import { useEffect, useState } from 'react';

import SearchIcon from '../assets/Search.svg';
import CountrySort from '../components/CountrySort';
import CountryList from '../components/CountryList';

import { fetchDataAll, fetchDataRegion } from '../api/APIUtils';
import { populationSort, areaSort } from '../utils/Sorting';
const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [sortOption, setSortOption] = useState('Population');

  const handleSortOptionClick = async (option) => {
    setSortOption(option);
    console.log(option, 'Clicked');
  };

  const handleRegionButtonClick = async (region) => {
    setSelectedRegion(region);
  };

  useEffect(() => {
    const fetchDataAndSetCountries = async () => {
      try {
        let data;
        if (selectedRegion) {
          data = await fetchDataRegion(selectedRegion);
        } else {
          data = await fetchDataAll();
        }
        if (sortOption === 'Population') {
          data = populationSort(data);
          console.log(data, 'Sort population');
        } else {
          data = areaSort(data);
          console.log(data, 'Sort area');
        }

        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndSetCountries();
  }, [selectedRegion, sortOption]);
  return (
    <main className="container mx-auto bg-gray-100 p-3 lg:p-6 lg:rounded-lg lg:shadow-xl lg:border border-gray-200">
      <section className="flex justify-between items-center mb-6">
        <p className="tag">Found {countries.length} countries</p>
        <div className="flex gap-x-3 bg-gray-200 p-2 rounded-md">
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            placeholder="Search by Name"
            className="bg-transparent text-sm w-[170px]"
          />
        </div>
      </section>
      <main className="flex flex-col lg:flex-row">
        <CountrySort
          onRegionButtonClick={handleRegionButtonClick}
          onSortOption={handleSortOptionClick}
        />
        <CountryList countries={countries} />
      </main>
    </main>
  );
};

export default CountryContainer;
