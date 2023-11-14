import logo from './logo.svg';
import './App.css';
import NavBar from './/Components/NavBar/NavBar.js';
import Card from './/Components/Card/Card.js';

function App() {
  return (
    <div className="App">
        <NavBar />
        <h1>CS 230L</h1>
        <h2>Section - 002</h2>
        <p>WVU ID: 800360262</p>
        <p>Hi I am Hunter Harris</p>
        <Card />
    </div>
  );
}

export default App;
