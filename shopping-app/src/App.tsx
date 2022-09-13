import Greeter from "./components/Greeter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greeter person="Mario" />
      <Greeter person="Mariarosa" />
    </div>
  );
}

export default App;
