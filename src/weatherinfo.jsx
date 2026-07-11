import { useState } from 'react';
import SearchBox from './searchbox'
import InfoBox from './infoBox'
function WeatherInfo(){
    const [weatherData, setWeatherData] = useState({
        city: "Pune",
        temp: 26.89,
        country: "IN",
        visibility: 10000,
        wind: 6.1
    })  
    let updateWeatherData = (data) => {
        setWeatherData(data);
    }
    return(
        <>
            <h3> Weather Information </h3>
            <SearchBox updateWeatherData={updateWeatherData}/>
            <InfoBox info={weatherData}/>
        </>
    )
}
export default WeatherInfo