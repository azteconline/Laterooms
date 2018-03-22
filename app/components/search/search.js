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
            facilities: this.state.facilities,
            orderBy: this.state.orderBy
        };
        var response = searchHotels(request);
        this.setState({ searchResults: response.searchResults });
        event.preventDefault();
    }

    render() {
        return (
            <section className="lr-search">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="hotelName">Hotel Name</label>
                                        <input id="hotelName" value={this.state.hotelName} type="text" onChange={this.hotelNameChange} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="starRating">Star Rating</label>
                                        <select id="starRating" value={this.state.starRating} onChange={this.starRatingChange} className="form-control">
                                            <option value="">Any</option>
                                            <option value="1">1 star</option>
                                            <option value="2">2 star</option>
                                            <option value="3">3 star</option>
                                            <option value="4">4 star</option>
                                            <option value="5">5 star</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Facilites</label><br/>
                                    <div className="form-check form-check-inline">
                                        <input type="checkbox" id="carpark" value="car park" onChange={this.facilitiesChange} className="form-check-input" />
                                        <label htmlFor="carpark" className="form-check-label">Car Park</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="checkbox" id="pool" value="pool" onChange={this.facilitiesChange} className="form-check-input" />
                                        <label htmlFor="pool" className="form-check-label">Pool</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="checkbox" id="gym" value="gym" onChange={this.facilitiesChange} className="form-check-input" />
                                        <label htmlFor="gym" className="form-check-label">Gym</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="orderBy">Order By</label>
                                        <select id="orderBy" value={this.state.orderBy} onChange={this.orderByChange} className="form-control">
                                            <option value="">Any</option>
                                            <option value="ASC">Star Rating (lowest first)</option>
                                            <option value="DESC">Star Rating (highest first)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <button className="btn btn-primary swell">Search</button>
                                </div>
                            </div>
                        </form>

                        <div className="lr-results">
                            {
                                this.state.searchResults !== null && this.state.searchResults.length > 0 &&
                                this.state.searchResults.map(result => <Result result={result} key={result.Name} />)
                            }
                            {
                                this.state.searchResults !== null && this.state.searchResults.length === 0 &&
                                <div className="alert alert-warning">No hotels found - please try another search</div>}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}