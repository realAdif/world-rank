import { useState } from 'react';
import ExpandIcon from '../assets/Expand_down.svg';

const regionList = ['Oceania', 'Asia', 'Europe', 'Africa', 'Antarctic'];
const sortBy = ['Population', 'Area', 'Alphabetical'];

const CountrySort = () => {
  // Sort
  const [sortOption, setSortOption] = useState(sortBy[0]);
  const [sortToggle, setSortToggle] = useState(false);
  const sortHandleToggle = () => {
    setSortToggle((prevSortToggle) => !prevSortToggle);
  };
  const handleSortOption = (option) => {
    setSortOption(option);
    setSortToggle((prevSortToggle) => !prevSortToggle);
  };

  return (
    <section className="min-w-[300px]">
      {/* sort by */}
      <div>
        <span>Sort by</span>
        <div
          className={`flex justify-between mt-2 lg:mr-6 px-2 py-3 border border-gray-200 ${
            sortToggle ? 'rounded-t-lg' : 'rounded-lg '
          }`}
        >
          <p className="text-sm">{sortOption}</p>
          <button onClick={sortHandleToggle}>
            <img src={ExpandIcon} alt="Expand down icon" />
          </button>
        </div>

        <ul
          className={`text-white text-sm  bg-gray-200 p-2 lg:mr-6 min-w-[200px] ${
            sortToggle ? 'absolute z-50 w-[270px] ' : ' hidden'
          }`}
        >
          {sortBy.map((sortOption, index) => (
            <li
              key={index}
              className="my-3 hover:bg-gray-100 p-3 cursor-pointer"
              onClick={() => handleSortOption(sortOption)}
            >
              {sortOption}
            </li>
          ))}
        </ul>
      </div>
      {/* region */}
      <div className="my-3">
        <span>Region</span>
        <div className="flex flex-wrap gap-2 mt-2 text-white">
          {regionList.map((region, i) => (
            <button
              key={i}
              onClick={() => console.log(region)}
              className={`text-sm font-semibold 
              hover:bg-gray-200 w-fit px-2 py-1 rounded-lg 
              drop-shadow-sm`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
      {/* status */}
      <div>
        <span>Status</span>
        <div className="flex gap-x-2 my-3 text-sm">
          <input type="checkbox" className="w-[18px]" />
          <p>Independent</p>
        </div>
      </div>
    </section>
  );
};

export default CountrySort;
