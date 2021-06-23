import React from 'react';
import './Flights.css';

/**
 * The purpose of the Flights component is to represent how a flight result in the Skye app will be formatted and styled.
 * 
 */

const Flights = ({data, Quotes, Carriers, Places}) => {
        return (
          <div className="FLIGHT RESULTS">
            {data&& Quotes.map(result =>{
              return <h2>Minimum Price: {result.MinPrice}</h2>
            })}
             {data&& Carriers.map(result =>{
              return <h2>Airline Carrier: {result.Name}</h2>
            })}
             {data&& Places.map(result =>{
              return (<div> 
              <h2>Name: {result.Name}</h2> 
              <h2>City Name: {result.CityName}</h2>
              </div>
              )
            })} 
          </div>
        )    
}



export default Flights;