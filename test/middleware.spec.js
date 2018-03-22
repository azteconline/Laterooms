jest.dontMock('../app/middleware/Search.js');
import { searchHotels } from '../app/middleware/Search.js';

describe('Search Middleware', () => {

    var request;

    beforeEach(() => {
        request = {
            hotelName: '',
            starRating: '',
            facilities: []
        }
    })

    it('should return all results when default params supplied', () => {
        var response = searchHotels(request);

        expect(response.searchResults.length).toEqual(3);
    })

    it('should return all matching hotels by name when hotelName param supplied', () => {
        request.hotelName = 'hoteltwo';

        var response = searchHotels(request);

        expect(response.searchResults.length).toEqual(1);

        expect(response.searchResults[0].Name).toEqual('hoteltwo');
    })

    it('should return all matching hotels by rating when starRating param supplied', () => {
        request.starRating = 3;

        var response = searchHotels(request);

        expect(response.searchResults.length).toEqual(2);
    })

    it('should return all matching hotels with facility when single hotel facility param supplied', () => {
        request.facilities = ['car park'];

        var response = searchHotels(request);

        expect(response.searchResults.length).toEqual(2);
    })

    it('should return all matching hotels with both facility when two facility params supplied', () => {
        request.facilities = ['car park', 'gym'];

        var response = searchHotels(request);

        expect(response.searchResults.length).toEqual(1);
    })
})