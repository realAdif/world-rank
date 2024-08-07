import { useState } from 'react';
import { useAppContext } from '../context/appContext';

// const regionList = ['Oceania', 'Asia', 'Europe', 'Africa', 'Antarctic'];
const sortBy = ['Population', 'Area', 'Alphabetical'];

const CountrySort = () => {
  const { setCountries, sortList, setSortList } = useAppContext();
  const [sortToggle, setSortToggle] = useState(false);

  const sortHandleToggle = () => {
    setSortToggle((prevSortToggle) => !prevSortToggle);
  };
  const sortHandle = (sort) => {
    setSortList(sort);
    if (sort === 'Population') {
      setCountries((prevCountries) =>
        [...prevCountries].sort((a, b) => b.population - a.population)
      );
    } else if (sort === 'Area') {
      setCountries((prevCountries) =>
        [...prevCountries].sort((a, b) => b.area - a.area)
      );
    } else {
      setCountries((prevCountries) =>
        [...prevCountries].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
      );
    }

    setSortToggle(false);
  };

  // const sortRegion = async (item) => {
  //   setRegion(item);
  //   console.log('region', item);
  //   try {
  //     const data = await fetchDataRegion(region);
  //     console.log('data', data);
  //     // setCountries(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

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
          <p className="text-sm">{sortList}</p>
          <button onClick={sortHandleToggle}>
            <img src="assets/Expand_down.svg" alt="Expand down icon" />
          </button>
        </div>
        <div
          className={`text-white text-sm  bg-gray-200 p-2 lg:mr-6 min-w-[200px] ${
            sortToggle ? 'absolute z-50 w-[270px] ' : ' hidden'
          }`}
        >
          {sortBy.map((sort, index) => (
            <button
              key={index}
              onClick={() => sortHandle(sort)}
              className="my-3 hover:bg-gray-100 p-3 cursor-pointer w-full"
            >
              {sort}
            </button>
          ))}
        </div>
      </div>
      {/* region */}
      {/* <div className="my-3">
        <span>Region</span>
        <div className="flex flex-wrap gap-2 mt-2 text-white">
          {regionList.map((item, i) => (
            <button
              onClick={() => sortRegion(item)}
              key={i}
              className={`text-sm font-semibold 
              hover:bg-gray-200 w-fit px-2 py-1 rounded-lg 
              drop-shadow-sm ${region === item && 'bg-gray-200'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default CountrySort;
