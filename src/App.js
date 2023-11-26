import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer className="page-bottom">
          {" "}
          This project was coded by Nataly Sheludko and is{" "}
          <a
            href="https://github.com/NatalySheludko/main-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
