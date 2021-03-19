import "./App.css";
import * as os from "os";

function App() {
  const hostname = os.hostname();

  return (
    <div className="App">
      <header className="App-header">
        <p>Micro service demo from {hostname}</p>
      </header>
    </div>
  );
}

export default App;
