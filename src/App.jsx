import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './context/appContext';
import Hero from './layout/Hero';
import CountryContainer from './components/CountryContainer';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <Router>
      <AppContextProvider>
        <main className="h-screen">
          <div className="bg-black relative">
            <Hero />
          </div>
          <div className="lg:absolute top-[10.5rem] w-full pb-12">
            <Routes>
              <Route path="/country/:name" element={<CountryDetails />} />
              <Route path="/" element={<CountryContainer />} />
            </Routes>
          </div>
        </main>
      </AppContextProvider>
    </Router>
  );
}

export default App;
