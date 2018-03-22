﻿import React from 'react';
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
        this.orderByChange = this.orderByChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hotelNameChange(event) {
        this.setState({ hotelName: event.target.value });
    }

    starRatingChange(event) {
        this.setState({ starRating: event.target.value });
    }

    orderByChange(event) {
        this.setState({ orderBy: event.target.value });
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
        var request = {
            hotelName: this.state.hotelName,
            starRating: this.state.starRating,
            facilities: this.state.facilities
        };
        var response = searchHotels(request);
        this.setState({ searchResults: response.searchResults });
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
                    <br />
                    <select id="orderBy" value={this.state.orderBy} onChange={this.orderByChange}>
                        <option value="">Any</option>
                        <option value="ASC">Star Rating (lowest first)</option>
                        <option value="DESC">Star Rating (highest first)</option>
                    </select>
                    <br /><br />
                    <button>search</button>
                </form>

                <div>
                    {
                        this.state.searchResults !== null && this.state.searchResults.length > 0 &&
                        this.state.searchResults.map(result => <Result result={result} key={result.Name} />)
                    }
                    {
                        this.state.searchResults !== null && this.state.searchResults.length === 0 &&
                        <div>No hotels found - please try another search</div>}
                </div>
            </section>
        );
    }
}