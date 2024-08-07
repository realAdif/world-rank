import { useLocation } from 'react-router-dom';

const CountryDetails = () => {
  const location = useLocation();
  const country = location.state?.country;

  const countryCard = {
    image: country.flags.svg,
    alt: country.flags.alt,
    name: country.name.common,
    offical: country.name.official,
    population: country.population.toLocaleString(),
    area: country.area.toLocaleString(),
    capital: country.capital[0],
    subregion: country.subregion,
    language: country.languages[0],
    continents: country.continents,
  };
  console.log(country);
  return (
    <section className="container mx-auto bg-gray-100 lg:rounded-lg lg:shadow-xl lg:border border-gray-200 absolute left-1/2 transform -translate-x-1/2 lg:max-w-[550px]">
      {country && (
        <div className="lg:mt-28 mt-12">
          <img
            src={countryCard.image}
            alt={countryCard.alt}
            className="max-w-[130px] lg:max-w-[250px] absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-md "
          />
          <div className="text-center mb-6">
            <h2>{countryCard.name}</h2>
            <p className="text-sm font-semibold">{countryCard.offical}</p>
          </div>
          <div className="text-sm text-white flex justify-evenly items-center gap-x-2">
            <div className="cardtags gap-x-2 py-2 px-3">
              <p className="border-r-1 border-gray-100 pr-2">Population</p>
              <span className="text-white">{countryCard.population}</span>
            </div>
            <div className="cardtags gap-x-2 py-2 px-3">
              <p className="border-r-2 border-gray-100 pr-2 ">Area</p>
              <span className="text-white">{countryCard.area}</span>
            </div>
          </div>
          <div className="border-t mt-2 border-gray-200 py-6 ">
            <div className="mx-3 text-md text-gray-100 flex justify-between">
              <span>Capital</span>
              <span className="text-white">{countryCard.capital}</span>
            </div>
          </div>
          <div className="border-t mt-2 border-gray-200 py-6 ">
            <div className="mx-3 text-md text-gray-100 flex justify-between">
              <span>Subregion</span>
              <span className="text-white">{countryCard.subregion}</span>
            </div>
          </div>
          <div className="border-t mt-2 border-gray-200 py-6 ">
            <div className="mx-3 text-md text-gray-100 flex justify-between">
              <span>Language</span>
              <span className="text-white">{countryCard.language}</span>
            </div>
          </div>
          <div className="border-t mt-2 border-gray-200 py-6 ">
            <div className="mx-3 text-md text-gray-100 flex justify-between">
              <span>Continents</span>
              <span className="text-white">{countryCard.continents}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CountryDetails;
