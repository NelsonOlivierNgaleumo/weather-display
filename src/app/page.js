'use client';

import { useState } from 'react';

const api = {
  key: '6f7b4c2ca5007944f51455fb206e713a',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function Home() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    // console.log("Search Pressed!"); /* this ensure the search button is working when pressed */
    // console.log(search);
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setWeather(result);
      });
  };

  return (
    <div
      className="App"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <header className="App-header">
        {/* HEADER */}
        <h1>Weather App</h1>

        {/* Search box */}
        <div>
          <input type="text" placeholder="Enter City Name..." onChange={(e) => setSearch(e.target.value)} />

          {/* We need a button which is going to call the fetch method */}
          <button type="button" onClick={searchPressed}>
            Search
          </button>
        </div>
        {/* if weather is not undefined */}
        {typeof weather.main !== 'undefined' ? (
          <div>
            {/* Location */}
            {/* <p>NASHVILLE, USA</p> */}
            <p>{weather.name}</p>

            {/* Temperature F/C  */}
            {/* <p>43 *F</p> */}
            <p>{weather.main.temp}</p>

            {/* Conditions */}
            {/* <p>Cloudy</p> */}
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
          </div>
        ) : (
          ''
        )}
      </header>
    </div>
  );
}

export default Home;
