﻿export function searchHotels(searchParams) {
    return {
        searchResults: [
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
        ]
    }
};