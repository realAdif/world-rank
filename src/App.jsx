import Hero from './components/Hero';
import CountryContainer from './components/CountryContainer';

function App() {
  // https://restcountries.com/v3.1/region/${region}
  return (
    <main className="h-screen bg-[#282B30]">
      <div className="bg-black relative">
        <Hero />
      </div>
      <div className="lg:absolute top-[9.5rem] w-full">
        <CountryContainer />
      </div>
    </main>
  );
}

export default App;
