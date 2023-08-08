import DigiNavbar from './DigiNavbar.js';
import DigiHome from './DigiHome.js';
import DigiFooter from './DigiFooter.js';

function App() {
  return (
    <div>
      <h1> Welcome to DigiProfile</h1>
      <DigiNavbar/>
      <DigiHome/>
      <DigiFooter/>
{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
