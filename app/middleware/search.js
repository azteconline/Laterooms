import _ from 'underscore';

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
        }
    ];

    var results = data;

    if (searchParams.hotelName !== '') {
        results = _.where(data, { Name: searchParams.hotelName });
    }

    return {
        searchResults: results
    }
};