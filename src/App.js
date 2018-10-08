import React, { Component } from 'react';
import { ShowTemp } from './ShowTemp';
import { Input } from './Input';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      temp: 0,
      city: '',
      state: '',
      zip: 78665,
      error: false,
      errorMessage: '',
      sunrise: '',
      sunset: '',
      sky: '',
      icon: ''
    }
    this.key = process.env.REACT_APP_WEATHER_API_KEY;

    this.setZipcode = this.setZipcode.bind(this);
    this.getDate = this.getDate.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }
  componentDidMount() {
    this.fetchWeather(this.state.zip);
  }
  fetchWeather(zip) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${this.key}`)
    .then( res => res.json())
    .then( res => {
      console.log(res)
      if(res.coord){
        const date = this.getDate();
        const temp = this.kelvinToFahrenheit(res.main.temp);
        const sunrise = this.convertToTime(res.sys.sunrise);
        const sunset = this.convertToTime(res.sys.sunset);
        const city = res.name;
        const sky = res.weather[0].main;
        const icon = res.weather[0].icon;
        this.setState({
          date: date,
          city: city,
          temp: temp,
          error: false,
          sunrise: sunrise,
          sunset: sunset,
          sky: sky,
          icon: icon
        })
      } else {
        this.setState({error: true, errorMessage: res.message})
      } 
    });
  }
  setZipcode(zip) {
    this.fetchWeather(zip);
  }
  convertToTime(mil) {
    const date = new Date(mil * 1000);
    return date.toLocaleTimeString();
  }
  kelvinToFahrenheit(k) {
    const temp = Math.floor((k * (9/5)) - 459.67);
    return temp;
  }
  getDate() {
    const date = new Date();
    return date.toLocaleDateString();
  }

  render() {
    return (
      <div className="App">
        <Input setZipcode={this.setZipcode}/>
        <ShowTemp 
          date={this.state.date}
          temp={this.state.temp} 
          city={this.state.city} 
          error={this.state.error} 
          errorMessage={this.state.errorMessage} 
          sunrise={this.state.sunrise} 
          sunset={this.state.sunset} 
          sky={this.state.sky} 
          icon={this.state.icon}/>
      </div>
    );
  }
}

export default App;
