import logo from './logo.svg';
import './App.css';
import Props1 from './Props1';
import Props2 from './Props2';


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
      <Apple />
     
      <Props1 name="john" />
      <Props2 name="Mike" others={{city:'USA', phone:'1234'}} />
    </div>
  );
}

export default App;
