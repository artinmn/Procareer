import logo from './logo.svg';
import './App.css';
import Check1 from './components/Check1';
import Users from './components/Users';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      
      {/* <Check1/> */}
      <Users/>
      <Parent name="John Doe" location="Connecticut"/>
    </div>
  );
}

export default App;
