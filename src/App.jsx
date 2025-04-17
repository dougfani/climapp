import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <SearchBar />
      <h1>São Paulo. SP</h1>
      <WeatherCard />
    </div>
  );
}

export default App;
