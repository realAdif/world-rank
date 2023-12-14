import ExpandIcon from '../assets/Expand_down.svg';
const CountrySort = () => {
  return (
    <section className="min-w-[300px]">
      {/* sort by */}
      <div>
        <span>Sort by</span>
        <div className="flex justify-between ml-1 mr-6 px-2 py-3 border border-gray-200 rounded-lg">
          <p>Population</p>
          <button>
            <img src={ExpandIcon} alt="Expand down icon" />
          </button>
        </div>
      </div>
      {/* region */}
      <div>
        <span>Region</span>
        <div></div>
      </div>
      {/* status */}
      <div>
        <span>Status</span>
        <div className="flex gap-x-2 my-3 ">
          <input type="checkbox" className="w-[24px]" />
          <p>Member of the United Nation</p>
        </div>
        <div className="flex gap-x-2 my-3">
          <input type="checkbox" className="w-[24px]" />
          <p>Independent</p>
        </div>
      </div>
    </section>
  );
};

export default CountrySort;
