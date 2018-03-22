import React from 'react';
import Result from './Result.js';
import _ from 'underscore';
import { searchHotels } from '../../middleware/Search.js';

export default class Search extends React.Component {
    render() {
        return (
            <section>
                <form>
                    <label htmlFor="hotelName">Hotel Name</label>
                    <input id="hotelName" type="text" />
                    <br />
                    <label htmlFor="starRating">Star Rating</label>
                    <select id="starRating">
                        <option value="">Any</option>
                        <option value="1">1 star</option>
                        <option value="2">2 star</option>
                        <option value="3">3 star</option>
                        <option value="4">4 star</option>
                        <option value="5">5 star</option>
                    </select>
                    <br />
                    <label>Facilites</label>
                    <input type="checkbox" id="carpark" value="car park" /> <label htmlFor="carpark">Car Park</label>
                    <input type="checkbox" id="pool" value="pool" /> <label htmlFor="pool">Pool</label>
                    <input type="checkbox" id="gym" value="gym" /> <label htmlFor="gym">Gym</label>

                    <br /><br />
                    <button>search</button>
                </form>
            </section>
        );
    }
}