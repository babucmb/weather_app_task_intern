const express = require('express')
const axios = require('axios')
const Weather = require('./models/Weather')
const cors = require('cors')
const connectDB = require('./db')
require('dotenv').config()

connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/getWeather', async (req, res) => {
  const { location } = req.body
  const apiKey = '8548924c33f1da9f441462d6e3942adc'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`

  try {
    const response = await axios.get(url)
    const data = response.data

    res.send({
      name: data.name,
      temp: data.main.temp,
      description: data.weather[0].description
    })
  } catch (err) {
    res.status(500).send({ error: 'City not found or API error' })
  }
})


app.post('/weather', async (req, res) => {
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).send({ error: 'Invalid JSON body' })
  }

  const { location, startDate, endDate, temp, description } = req.body

  if (!location || !startDate || !endDate) {
    return res.status(400).send({ error: 'Location and date range required' })
  }

  try {
    const entry = new Weather({ location, startDate, endDate, temp, description })
    const saved = await entry.save()
    res.status(201).send(saved)
  } catch (error) {
    console.error('Error saving to MongoDB:', error.message)
    res.status(500).send({ error: 'Error saving weather record' })
  }
})


app.get('/weather', async (req, res) => {
  try {
    const allData = await Weather.find().sort({ createdAt: -1 })
    res.status(200).send(allData)
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch weather data' })
  }
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
