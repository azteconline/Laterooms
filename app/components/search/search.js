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
    }

    hotelNameChange(event) {
        
    }

    starRatingChange(event) {
        
    }

    facilitiesChange(event) {
       
    }

    render() {
        return (
            <section>
                <form>
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