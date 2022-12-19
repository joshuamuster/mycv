import logo from './profilewheel.png';
import './App.css';
import background from './images/og-paper-background.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${background})` }}>
        <p>
          Eventually this will be my CV. Probably have some interactive elements.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          For now, enjoy the many faces of me.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
