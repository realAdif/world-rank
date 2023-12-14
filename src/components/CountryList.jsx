import { useNavigate } from 'react-router-dom';

const CountryList = ({ countries }) => {
  const navigate = useNavigate();

  const handleCountryClick = (country) => {
    navigate(`/country/${country.name.common}`, { state: { country } });
  };
  return (
    <section className="w-full">
      <table className="w-full text-left text-white text-sm table-auto">
        <thead className="border-b border-gray-300 border-spacing-y-3 ">
          <tr>
            <th className="py-3">Flage</th>
            <th>Name</th>
            <th>Population</th>
            <th>Area(&#13218;)</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody className="text-white text-md">
          {countries.map((country, index) => (
            <tr
              key={index}
              onClick={() => handleCountryClick(country)}
              className="hover:bg-gray-200 cursor-pointer"
            >
              <td className="py-3">
                <img
                  src={country.flags.svg}
                  alt={country.flags.alt}
                  className="max-w-[40px]"
                />
              </td>
              <td>{country.name.common}</td>
              <td>{country.population.toLocaleString()}</td>
              <td>{country.area.toLocaleString()}</td>
              <td>{country.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CountryList;
