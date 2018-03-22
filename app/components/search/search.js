import React from 'react';
import Result from './Result.js';
import _ from 'underscore';
import { searchHotels } from '../../middleware/Search.js';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelName: '',
            starRating: '',
            facilities: [],
            searchResults: null
        };

        this.hotelNameChange = this.hotelNameChange.bind(this);
        this.starRatingChange = this.starRatingChange.bind(this);
        this.facilitiesChange = this.facilitiesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hotelNameChange(event) {
        this.setState({ hotelName: event.target.value });
    }

    starRatingChange(event) {
        this.setState({ starRating: event.target.value });
    }

    facilitiesChange(event) {
        var exists = _.contains(this.state.facilities, event.target.value);
        var facilities = this.state.facilities;
        if (!exists) {
            facilities.push(event.target.value);
        }
        else {
            facilities.splice(facilities.indexOf(event.target.value), 1);
        }
        this.setState({ facilities: facilities });
    }

    handleSubmit(event) {
        console.log('submitted');
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="hotelName">Hotel Name</label>
                    <input id="hotelName" value={this.state.hotelName} type="text" onChange={this.hotelNameChange} />
                    <br />
                    <label htmlFor="starRating">Star Rating</label>
                    <select id="starRating" value={this.state.starRating} onChange={this.starRatingChange}>
                        <option value="">Any</option>
                        <option value="1">1 star</option>
                        <option value="2">2 star</option>
                        <option value="3">3 star</option>
                        <option value="4">4 star</option>
                        <option value="5">5 star</option>
                    </select>
                    <br />
                    <label>Facilites</label>
                    <input type="checkbox" id="carpark" value="car park" onChange={this.facilitiesChange} /> <label htmlFor="carpark">Car Park</label>
                    <input type="checkbox" id="pool" value="pool" onChange={this.facilitiesChange} /> <label htmlFor="pool">Pool</label>
                    <input type="checkbox" id="gym" value="gym" onChange={this.facilitiesChange} /> <label htmlFor="gym">Gym</label>

                    <br /><br />
                    <button>search</button>
                </form>
            </section>
        );
    }
}