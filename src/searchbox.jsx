import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function SearchBox({ updateWeatherData }) {
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '402d2b1fbfde6bdcc7acfd0c61dd17dd';

    const [city, setCity] = useState('');

    const getWeather = async (cityName) => {
        const response = await fetch(`${API_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`);
        const jsonResponse = await response.json();
        return jsonResponse;
    };

    const onChangeHandler = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!city.trim()) return;

        console.log(city);
        getWeather(city).then((data) => {
            console.log(data);
            const result = {
                city: city,
                temp: data.main.temp,
                country: data.sys.country,
                visibility: data.visibility,
                wind: data.wind.speed,
            };
            console.log(result);
            setCity('');
            updateWeatherData(result);
        });
    };
    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="city name" variant="outlined" required value={city} onChange={onChangeHandler}/>
            <br></br>         
            <br></br>
  

            <Button variant="contained" type="submit">
                SUBMIT
            </Button>
            <br></br>
            <br>
            </br>
            </form>
        </div>
    )
}
export default SearchBox