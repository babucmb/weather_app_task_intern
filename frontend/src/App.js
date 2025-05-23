import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState(null)

  const fetchWeather = async () => {
    const res = await axios.post('https://weather-backend-iug2.onrender.com/getWeather', { location })
    setWeather(res.data)
  }

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Weather App</h1>
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Enter city or place"
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={fetchWeather} style={{ marginLeft: '10px', padding: '10px' }}>Search</button>
      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.temp} °C</p>
          <p>Condition: {weather.description}</p>
        </div>
      )}
    </div>
  )
}

export default App
