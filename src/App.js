import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Seattle" />
      </header>
    </div>
  );
}

export default App;
