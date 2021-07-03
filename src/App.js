import React from 'react';
import './App.css';
import CityInput from './Components/CityInput';
import WeatherDetails from './Components/WeatherDetails';



class App extends React.Component {
  constructor(){
    super();
    this.state={
      cityName: '',
      route: 'search',
      temp: 0,
      windSpeed: 0,
      humidity: 0,
      condition: '',
      alert: '',
      icon: ''
      
    }
  }

  onCitySearchChange=(event)=>{
    this.setState({cityName: event.target.value});
  }

  onSearch=()=>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=dc8caf5e8f834de195f72918212506&q=${this.state.cityName}`)
    .then(response=>response.json()).then(data=>{
      if(Object.keys(data).length>1){
        if(data.location.name.toLowerCase()===this.state.cityName.toLocaleLowerCase()){
          this.setState({
            route: 'result', 
            temp: data.current.temp_c, 
            windSpeed: data.current.wind_kph, 
            humidity: data.current.humidity, 
            condition: data.current.condition.text,
            icon: data.current.condition.icon})
        } else {
          this.setState({route: 'search', alert: 'No City Found'});
        }
      }else {
        this.setState({route: 'search', alert: 'No City Found'});
      }
    })
  }

  onSearchButton=(event)=>{
    if(event.which===13){
      this.onSearch();
    }
  }

  render(){
    const {alert, route, temp, windSpeed, humidity, condition, icon} = this.state;

      return (
        <div className="App" >
        <div className="container">
          <CityInput onCitySearchChange={this.onCitySearchChange} onSearch={this.onSearch} onSearchButton={this.onSearchButton} className="searchBox"/>
        
        {route==='result'? <div>
        <WeatherDetails temp={temp} windSpeed={windSpeed} humidity={humidity} condition={condition} icon={icon}/>
      </div>:<div className="alert">{alert}</div>}
      </div>
      </div>
      );
   
  }

}

export default App;
