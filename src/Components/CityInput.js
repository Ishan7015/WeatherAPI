import React from 'react';
import './CityInput.css';

const CityInput=({onCitySearchChange, onSearch, onSearchButton})=>{
    return(
        <div>
            <h1>CITY WEATHER FORCAST</h1>
            <input type='text' placeholder='City Name' name='CityName' onChange={onCitySearchChange} onKeyPress={onSearchButton}/>
            <button onClick={onSearch}  >Search</button>  
        </div>
    );
}

export default CityInput;