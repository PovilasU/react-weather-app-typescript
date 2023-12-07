import {  weather_interpretation, formatDate } from './utils.ts';
import Forecast from './Forecast';

interface WeatherDisplayProps {
  info: {
    daily: {
      temperature_2m_max: Record<string, number>,
      temperature_2m_min: Record<string, number>,
      time: string
    },
    hourly: any,
    current_weather: {
      time: string,
      temperature: number,
      weathercode: string
    }
  },
  selection: {
    name: string,
    admin1: string,
    country: string
  }
}

export default function WeatherDisplay({ info, selection }: WeatherDisplayProps) {

  const {
    daily,   
    current_weather
  } = info;

  const {
    temperature_2m_max,
    temperature_2m_min,
  } = daily;

  const currentTime = formatDate(current_weather.time);
  const day_min_temp = temperature_2m_min[Object.keys(temperature_2m_min)[0]];
  const day_max_temp = temperature_2m_max[Object.keys(temperature_2m_max)[0]];

  return (
    <>
      <div className='current-weather module'>
        <h2 className="">Today</h2>
        <h3 className="center">
          {selection.name},       
          &nbsp;{selection.country} As of {currentTime}  BST
        </h3>
        <div>        
          <div>
            <span className='heade-1'> {current_weather.temperature} &#176;C</span>
          </div>
          <span>{weather_interpretation(parseInt(current_weather.weathercode))}</span> <br></br>
          <span>day, {day_max_temp}&#176;C Night {day_min_temp}&#176;C</span>
        </div>
      </div>

      <Forecast info={info} type="Daily" />
      <Forecast info={info} type="Hourly" />
    </>
  );
}