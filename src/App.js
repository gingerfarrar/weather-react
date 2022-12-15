import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather />

        <a
          href="https://github.com/gingerfarrar/weather-react"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Source Code On GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
