import React, { Component } from 'react';
import { ShowTemp } from './ShowTemp';
import { Input } from './Input';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Weather',
      temp: 0,
      city: '',
      state: '',
      zip: 78665,
      error: false,
      errorMessage: ''
    }
    this.key = process.env.REACT_APP_WEATHER_API_KEY;

    this.setZipcode = this.setZipcode.bind(this);
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
        const temp = this.kelvinToFahrenheit(res.main.temp);
        const city = res.name;
        this.setState({
          city: city,
          temp: temp,
          error: false
        })
      } else {
        this.setState({error: true, errorMessage: res.message})
      } 
    });
  }
  setZipcode(zip) {
    this.fetchWeather(zip);
  }
  kelvinToFahrenheit(k) {
    const temp = Math.floor((k * (9/5)) - 459.67);
    return temp;
  }
  render() {
    return (
      <div className="App">
        <Input setZipcode={this.setZipcode}/>
        <ShowTemp temp={this.state.temp} city={this.state.city} error={this.state.error} errorMessage={this.state.errorMessage}/>
      </div>
    );
  }
}

export default App;
