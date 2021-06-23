import React from 'react';
import './FlightList.css';
import Flights from '../Flights/Flights.js';

/**
 * The purpose of the FlightList component is to simulate what a returned list of flights would look like in the Skye app (after querying the SkyScanner API, for example).
 * 
 * To help this simulation, the FlightList will make use of the Flights component repeatedly.
 */


class FlightList extends React.Component {
    render() {
        return(
            <div className="FlightList"> {
                this.props.flights.map(flights => {
                    return <Flights key={flights.id} flights={flights} />
                })
            }
            </div>
        )
    }
}


export default FlightList;