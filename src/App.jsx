import  "./App.css"
import CurrentWeather from "./Components/Current-weather/Current-weather";
import Search from "./Components/Search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../src/Components/Api"

const handelOnSearchChange = (searchData) => {
  const [lat, lon] = searchData.value.split("")

  const currentWeatherFeth = fetch(`${WEATHER_API_URL}/weather?lat={lat}&lon={lon}&appid=${WEATHER_API_KEY}`)
}

function App() {
  return (
    <div className="App">
      <Search onSearchChange={handelOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
