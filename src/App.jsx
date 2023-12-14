import Hero from './components/Hero';
import CountryContainer from './components/CountryContainer';

function App() {
  return (
    <main className="h-screen">
      <div className="bg-black relative">
        <Hero />
      </div>
      <div className="lg:absolute top-[9.5rem] w-full pb-12">
        <CountryContainer />
      </div>
    </main>
  );
}

export default App;
