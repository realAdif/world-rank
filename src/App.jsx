import Hero from './components/Hero';
import CountryContainer from './components/CountryContainer';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountryProvider } from './utils/CountryContext';

function App() {
  return (
    <CountryProvider>
      <Router>
        <main className="h-screen">
          <div className="bg-black relative">
            <Hero />
          </div>
          <h1>dsadasd</h1>
          <div className="lg:absolute top-[10.5rem] w-full pb-12">
            <Routes>
              <Route path="/country/:name" element={<CountryDetails />} />
              <Route path="/" element={<CountryContainer />} />
            </Routes>
          </div>
        </main>
      </Router>
    </CountryProvider>
  );
}

export default App;
