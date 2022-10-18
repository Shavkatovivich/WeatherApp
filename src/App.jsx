import  "./App.css"
import CurrentWeather from "./Components/Current-weather/Current-weather";
import Search from "./Components/Search/Search";

const handelOnSearchChange = (searchData) => {
  console.log(searchData)
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
