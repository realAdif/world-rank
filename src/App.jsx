import Hero from './components/Hero';
import CountryContainer from './components/CountryContainer';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className="h-screen">
        <div className="bg-black relative">
          <Hero />
        </div>
        <div className="lg:absolute top-[9.5rem] w-full pb-12">
          <Routes>
            <Route path="/country/:name" element={<CountryDetails />} />
            <Route path="/" element={<CountryContainer />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
