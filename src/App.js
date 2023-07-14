import logo from './logo.svg';
import './App.css';
import Props1 from './Props1';
import Props2 from './Props2';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import PropsClass from './PropsClass';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Page404 from './Page404';

function App() {

  // create new component inside App Component
  function Apple()
  {
    return(
      <h2>Apple</h2>
    );
  }
  return (
    <div className="App">
      {/* <Apple />
     
      <Props1 name="john" />
      <Props2 name="Mike" others={{city:'USA', phone:'1234'}} />

      <PropsClass name="Ramesh" email="ramesh@yahoo.com" /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path='/user' element={} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
