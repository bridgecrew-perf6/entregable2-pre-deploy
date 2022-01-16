import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios'
import Button from './components/Button';

function App() {

  const [weather, setWeather] = useState(null)

  useEffect(() => {

    const handleError = () => {
      console.log('No Permitiio el acceso a la Ubicaión');
    }
    const success = position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0fd7dea09efa6bba06404aec53fb8f9e`)
        .then(res => setWeather(res.data))
      console.log(weather);
    }
    navigator.geolocation.getCurrentPosition(success, handleError)
  }, [weather])

  const celcius = weather?.main.temp - 273.15

  function changeGreedes() {
    const farenheit = ((weather?.main.temp - 273.5) * 1.8 + 32)
    return farenheit
  }


  const textF = document.getElementById('f')
  const textC = document.getElementById('c')

  const mostrarOcultar = () => {

    textF.classList.toggle('hiden')

     if (textC.classList.contains('hiden')) {
       textC.classList.remove('hiden')

     } else {
       textC.classList.add('hiden')
     }

  }


  return (
    <div className='card'>
      <h1>Weather App</h1>
      <p> {weather?.name}, <span>{weather?.sys.country}</span> </p>
      <p className='sky'>{weather?.weather[0].description}</p>

      <p id='f'className='hiden' >Actual: {changeGreedes()} Fº</p>
      <p id='c'>Actual: {celcius} <span>Cº</span> </p>

      <p>Maxima: {weather?.main.temp_max - 273.15} <span>Cº</span> </p>
      <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
      <Button
        mostrarOcultar={mostrarOcultar}
      />
    </div>


  );
}

export default App;
