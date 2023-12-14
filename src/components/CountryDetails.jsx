import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { id } = useParams();
  return (
    <section className="text-white">
      <h2>Details for Country ID: {id}</h2>
    </section>
  );
};

export default CountryDetails;
