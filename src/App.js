import "./App.css";
import "./index.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <Weather city="crewe" />
      <div>
        Coded by <a href="https://github.com/BethJW">Beth Williamson</a>,
        open-source on{" "}
        <a href="https://github.com/BethJW/weatherapp-react">Github</a> and
        hosted on <a href="https://react-weather-bjw.netlify.app/">Netlify</a>
      </div>
    </div>
  );
}

export default App;
