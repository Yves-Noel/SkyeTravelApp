import React from 'react';
import Flights from '../Flights/Flights';
import './SearchBar.css';

/**
 * The purpose of the searchBar component is to search for flights in the Skye App.
 * 
 */

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            Quotes: [],
            Carriers: [],
            Places: [],
            Currencies: [],
            // country: 'US',
            currency: '',
            // locale: 'en-US',
            originPlace: '',
            destinationPlace: '',
            outboundPartialDate: '',
            inboundPartialDate: '',
           sortBy: 'MinPrice',
        };

        this.handleSearch = this.handleSearch.bind(this);
    }


/**
 * 
 *(UNFINISHED PART OF THE PROJECT)
 */
    // const sortByOptions = {
    //     'Cheapest to Highest Priced': 'MinPrice', 
    // }:


/**
 * (UNFINISHED PART OF THE PROJECT)
 * The purpose of the renderSortByOptions() is to dynamically create the list items needed to display the sort options (Minimum Price).
 */
    // renderSortByOptions() {
    //     return Object.keys(sortByOptions).map(sortByOption => {
    //         let sortByOptionValue = sortByOptions[sortByOption];
    //         return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>;
    //     });
    // }


    handleSearch(event) {
        this.props.searchSkyScanner(this.state.sortBy);
        event.preventDefault();
    }

    handleChange=(e, name) =>{
        const value = e.target.value;
        this.setState({[e.target.name]:value})
        // console.log(this.country, this.currency, this.locale, this.originPlace, this.destinationPlace, this.outboundPartialDate, this.inboundPartialDate)

    } 

 

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log('test')

        
        fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/${this.state.currency}/en-US/${this.state.originPlace}/${this.state.destinationPlace}/${this.state.outboundPartialDate}?inboundpartialdate=${this.state.inboundPartialDate}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f4ab23d298msh2e33345ec3d505cp126e14jsnbf36cf8d1fa6",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.json()
        }).then(response => {
            this.setState({Quotes: response.Quotes, data: response, Carriers: response.Carriers, Places: response.Places, Currencies: response.Currencies})
            console.log(response.Quotes, response[0])
        })
        .catch(err => {
            console.error(err);
        });

    }


    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        }
        return '';

    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }

   
    
    render() {
        const {data, Quotes, Carriers, Places, Currencies} = this.state
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                      <li>{this.renderSortByOptions}</li>
                    </ul>
                </div>
                <div className="SearchBar-fields" >
                    <form onSubmit={this.handleSubmit}>
                  <input placeholder="Origin (E.G JFK-sky)" name='originPlace'onChange={(e)=>this.handleChange(e,'originPlace')}/>
                  <input placeholder="Destination (E.G SFO-sky)git" name='destinationPlace' onChange={(e)=>this.handleChange(e,'destinationPlace')}/>
                  <input placeholder="Outbound Date" name='outboundPartialDate' onChange={(e)=>this.handleChange(e,'outboundPartialDate')}/>
                  <input placeholder="Inbound Date" name='inboundPartialDate' onChange={(e)=>this.handleChange(e,'inboundPartialdate')}/>
                  <input placeholder="Currency" name='currency' onChange={(e)=>this.handleChange(e,'currency')}/>
                  <button >Search Flight</button>
                  </form>
                </div>
                {data&&<Flights data={data} Quotes={Quotes} Carriers={Carriers} Places={Places} Currencies={Currencies}></Flights>}
            </div>

        );

    }

}


export default SearchBar;



