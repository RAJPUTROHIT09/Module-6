import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Service1 from './Service1';
import Service2 from './Service2';
import React, { Suspense } from 'react';
import Loader from './Loader';

// Lazy-loaded components with a delay of 2000 milliseconds
const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./Home'));
    }, 2000);
  });
});

const AboutUs = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./AboutUs'));
    }, 2000);
  });
});

const Contact = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./Contact'));
    }, 2000);
  });
});

const Service = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./Service'));
    }, 2000);
  });
});

function App() {
  return (
    <div className="App">
      {/* Suspense with Loader fallback */}
      <Suspense fallback={<Loader />}>
        {/* BrowserRouter for handling routing */}
        <BrowserRouter>
          {/* Routes component for defining routes */}
          <Routes>
            {/* Route for the home page */}
            <Route path='/' element={<Home />} />
            {/* Route for the about us page */}
            <Route path='/aboutus' element={<AboutUs />} />
            {/* Route for the contact page */}
            <Route path='/contact' element={<Contact />} />
            {/* Route for the service page with nested routes */}
            <Route path='/service' element={<Service />}>
              {/* Nested Route for Service1 */}
              <Route path='/service/service1' element={<Service1 />} />
              {/* Nested Route for Service2 */}
              <Route path='/service/service2' element={<Service2 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
