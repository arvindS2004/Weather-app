import React, { useState } from 'react';
import '../components/Weather.css';
import add from '../pages/addP.jpg'
import gojo from './gojo.png'

const api = {
    key: 'ba581e35f9ac08970dc88bf333f59582',
    base: "https://api.openweathermap.org/data/2.5/"
  }
function WeatherApp() {
  const [wetData, setwetData] = useState("");
  const [city, setcity] = useState(null)

  const search  = async(city)=>{
  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}&units=metric`);
    
   if (!response.ok){
      throw new Error("City not found");
    }
    const data = await response.json();
    console.log(data);
    setwetData(data);
  }
  catch (error){
      console.error(error);

    }
  }

  //      
  //     
  //     
  //     setwetData({
  //       humidity: data.main.humidity,
  //       windSpeed: data.wind.speed,
  //       temperature: Math.floor(data.main.temp),
  //       location: data.name
  //     });
  //   } catch (error) {
      
  //   }
  // }
  // useEffect(() => {
  //   search("London");
  // },[])

  const handleinput = (e)=>{
    setcity(e.target.value)
  }

  return (
    <div className="weather-app">
      <div className="search-bar">
        <input type="text" placeholder="Search" onChange={handleinput} />
        
        <button onClick={search}>
          <i className="fas fa-search"><img src={add} alt="" /> </i>
        </button>
      </div>

        <div className="weather-info">
        <img src={gojo} alt="Sunny" />
        <h2 className="temperature">45°C</h2>
        <h1 className="location">London</h1>
        
        <div className="wet-data">
          <div className="col">
            <img src={gojo} alt="Humidity" />
            <div>
              <p>60%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={gojo} alt="Humidity" />
            <div>
              <p>3.6 km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      
    </div>
  );
}

export default WeatherApp;