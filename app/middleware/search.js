﻿import _ from 'underscore';

export function searchHotels(searchParams) {

    const data = [
        {
            "Name": "hotelone",
            "StarRating": 5,
            "Facilities": ["car park", "pool"]
        },
        {
            "Name": "hoteltwo",
            "StarRating": 3,
            "Facilities": ["car park", "gym"]
        },
        {
            "Name": "hotelthree",
            "StarRating": 3,
            "Facilities": []
        },
        {
            "Name": "hotelfour",
            "StarRating": 4,
            "Facilities": []
        }
    ];

    var results = data;

    if (searchParams.hotelName !== '') {
        results = _.where(results, { Name: searchParams.hotelName });
    }

    if (searchParams.starRating !== '') {
        results = _.where(results, { StarRating: parseInt(searchParams.starRating) });
    }

    if (searchParams.facilities.length>0) {
        results = _.filter(results, function (f) {
            var noMatch=false;
            searchParams.facilities.forEach(function (item) {
                if (!_.contains(f.Facilities, item)) {
                    noMatch = true;
                }
            });
            return noMatch ? null:f;
        });
    }

    if (searchParams.orderBy !== '') {
        results = searchParams.orderBy == 'ASC' ? _.sortBy(results, 'StarRating') : _.sortBy(results, 'StarRating').reverse(); 
    }

    return {
        searchResults: results
    }
};