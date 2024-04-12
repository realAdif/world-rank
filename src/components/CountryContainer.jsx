import { useState } from 'react';
import SearchIcon from '../assets/Search.svg';
import CountrySort from '../components/CountrySort';
import CountryList from '../components/CountryList';
import { useCountryContext } from '../utils/CountryContext';
const CountryContainer = () => {
  const { fetchDataBySearch } = useCountryContext();
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchQuery = (event) => {
    //logic
    if (event.key === 'Enter') {
      console.log(searchQuery);
      fetchDataBySearch(searchQuery);
    }
    //handle error
  };
  return (
    <main className="container mx-auto bg-gray-100 p-3 lg:p-6 lg:rounded-lg lg:shadow-xl lg:border border-gray-200">
      <section className="flex justify-between items-center mb-6">
        <p className="tag text-sm">Found countries countries</p>
        <div className="flex gap-x-3 bg-gray-200 p-2 rounded-md">
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            placeholder="Search for a country"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleSearchQuery}
            className="bg-transparent text-sm w-[170px] text-white"
          />
        </div>
      </section>
      <main className="flex flex-col lg:flex-row">
        <CountrySort />
        <CountryList />
      </main>
    </main>
  );
};

export default CountryContainer;
