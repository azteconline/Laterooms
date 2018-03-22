jest.dontMock('../app/middleware/Search.js');
import { searchHotels } from '../app/middleware/Search.js';

describe('Search Middleware', () => {

    var request;

    beforeEach(() => {
        request = {
            hotelName: '',
            starRating: '',
            facilities: [],
            orderBy: ''
        }
    })

    it('should return all results when default params supplied', () => {
        var response = searchHotels(request);

        expect(response.searchResults.length).toEqual(4);
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

    it('should not change order when no orderBy param supplied', () => {
        var response = searchHotels(request);

        expect(response.searchResults[0].StarRating).toEqual(5);
        expect(response.searchResults[1].StarRating).toEqual(3);
        expect(response.searchResults[2].StarRating).toEqual(3);
        expect(response.searchResults[3].StarRating).toEqual(4);
    })

    it('should order ascending when ASC orderBy param supplied', () => {
        request.orderBy = 'ASC';
        var response = searchHotels(request);

        expect(response.searchResults[0].StarRating).toEqual(3);
        expect(response.searchResults[1].StarRating).toEqual(3);
        expect(response.searchResults[2].StarRating).toEqual(4);
        expect(response.searchResults[3].StarRating).toEqual(5);
    })

    it('should order descending when DESC orderBy param supplied', () => {
        request.orderBy = 'DESC';
        var response = searchHotels(request);

        expect(response.searchResults[0].StarRating).toEqual(5);
        expect(response.searchResults[1].StarRating).toEqual(4);
        expect(response.searchResults[2].StarRating).toEqual(3);
        expect(response.searchResults[3].StarRating).toEqual(3);
    })
})