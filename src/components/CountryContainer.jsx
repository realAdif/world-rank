// probably setup global state, and once you fetch all data, just filter
//the data in client instead of fetching new data every time
//you make changes @AcesTheBest
// if the data set is small
import SearchIcon from '../assets/Search.svg';
import CountrySort from '../components/CountrySort';
import CountryList from '../components/CountryList';
import { useCountryContext } from '../utils/CountryContext';

const CountryContainer = () => {
  const handleSortOptionClick = async (option) => console.log(option);
  const handleRegionButtonClick = async (region) => console.log(region);
  const handleIndependentClick = async (check) => {
    console.log(check);
  };

  const { countries } = useCountryContext();
  console.log(countries);
  return (
    <main className="container mx-auto bg-gray-100 p-3 lg:p-6 lg:rounded-lg lg:shadow-xl lg:border border-gray-200">
      <section className="flex justify-between items-center mb-6">
        <p className="tag text-sm">Found countries countries</p>
        <div className="flex gap-x-3 bg-gray-200 p-2 rounded-md">
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            placeholder="Not Yet Available. :("
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
        {/* <CountryList countries={countries} /> */}
      </main>
    </main>
  );
};

export default CountryContainer;
