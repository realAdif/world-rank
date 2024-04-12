import { useCountryContext } from '../utils/CountryContext';

const CountryList = () => {
  const { countries } = useCountryContext();

  return (
    <section className="w-full">
      <table className="w-full text-left text-white text-sm table-auto">
        <thead className="border-b border-gray-300 border-spacing-y-3 ">
          <tr>
            <th className="py-3 w-[50px]">Flage</th>
            <th className="w-[100px] px-3">Name</th>
            <th>Population</th>
            <th>Area(&#13218;)</th>
            <th className="w-[60px]">Region</th>
          </tr>
        </thead>
        <tbody className="text-white text-md">
          {countries?.map((country, index) => (
            <tr
              key={index}
              onClick={() => console.log(country.name)}
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
