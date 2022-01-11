import { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState('');
  
  const GetWeather = () =>{
    var options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {q: {location}, days: '3'},
      headers: {
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    };
    
    axios.request(options).then((response) => {
      setLocation(location)
      setWeather(response.data["current"]);
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder='Search...'
        />
      <button  onClick={GetWeather}>Get Weather</button>
      <h2>{location}</h2>
      <p>{`Temperature: ${weather.temp_c} ॰ Celcius / ${weather.temp_f} Fahrenheit`}</p>
      <p>{`Humidity: ${weather.humidity}`}</p>
      <p>{`Feels Like ${weather.feelslike_c} Celcius`}</p>
      <p>{`Wind Speed : ${weather.wind_kph} km per hr`}</p>
    </div>
  );
}

export default App;
