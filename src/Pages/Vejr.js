import React, { useEffect, useState } from "react";
import "../Vejr.css"
import { CircularProgress, Slide, TextField } from "@mui/material";

function Vejr() {
  const [cityName, setCityName] = useState("Danmark")
  const [inputText, setInputText] = useState("")
  const [data, setData] = useState ({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=da&appid=2e374187bdee3d77b818eb28603af67b&units=metric`
    )
      .then((res) => {
        if (res.status === 200) {
          error && setError(false)
          return res.json()
        } else {
          throw new Error("Noget gik galt :/")
        }
      })
       .then((data) => {
        console.log(data)
        setData(data)
       })
       .catch(() => setError(true))
       .finally(() => setLoading(false))
  }, [cityName, error])

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCityName(e.target.value)
      setInputText("")
    }
  }

  return (
    <div className="bg_img">
      {!loading ? (
        <>
          <TextField 
            variant="filled" 
            label="Søg lokation" 
            className="input"
            error={error}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleSearch}
          />

      <h1 className="city">{data.name}</h1>
      <div className="group">
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather-icon" />
        <h1 className="weather">{data.weather[0].description}</h1>
      </div>

        <h1 className="temp">{data.main.temp.toFixed()} °C</h1>
        
        <Slide direction="right" timeout={800} in={!loading}>
          <div className="box_container">
            <div className="box">
              <p>Luftfugtighed</p>
              <h1>{data.main.humidity.toFixed()}%</h1>
            </div>

            <div className="box">
              <p>Vind</p>
              <h1>{data.wind.speed.toFixed()} m/s</h1>
            </div>

            <div className="box">
              <p>Føles som</p>
              <h1>{data.main.feels_like.toFixed()} °C</h1>
            </div>
          </div>
        </Slide>
            </>
          ) : (
            <CircularProgress />
          )}
    </div>
  )
}

export default Vejr;