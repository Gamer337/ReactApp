import logo from './logo.svg';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>  
      </div>
      <div>
        <Login />
      </div>
    </>
  );
}

export default App;
