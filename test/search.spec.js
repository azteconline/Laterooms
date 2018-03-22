jest.dontMock('../app/middleware/Search.js');
import { searchHotels } from '../app/middleware/Search.js';

describe('Search Middleware', () => {
    it('should return all results when default params supplied', () => {
        var request = {
            hotelName: '',
            starRating: '',
            facilities: []
        }

        var response = searchHotels(request);

        expect(response.searchResults.length).toEqual(3);
    })
})