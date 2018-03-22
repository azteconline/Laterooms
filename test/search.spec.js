import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Search from '../app/components/search/search.js';
import Result from '../app/components/search/result.js';

jest.dontMock('../app/components/search/search.js');
jest.dontMock('../app/components/search/result.js');

describe('Search Components', () => {

    describe('Search', () => {

        it('should render search without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Search />, div);
        })

        it('should contain all required form elements', () => {
            var search = TestUtils.renderIntoDocument(
                <Search />
            );

            var form = TestUtils.findRenderedDOMComponentWithTag(search, 'form');

            var hotelName = TestUtils.scryRenderedDOMComponentsWithTag(search, 'input')[0];
            expect(hotelName.id).toEqual('hotelName');
            expect(hotelName.type).toEqual('text');

            var starRating = TestUtils.scryRenderedDOMComponentsWithTag(search, 'select')[0];
            expect(starRating.id).toEqual('starRating');

            var carpark = TestUtils.scryRenderedDOMComponentsWithTag(search, 'input')[1];
            expect(carpark.id).toEqual('carpark');
            expect(carpark.type).toEqual('checkbox');

            var pool = TestUtils.scryRenderedDOMComponentsWithTag(search, 'input')[2];
            expect(pool.id).toEqual('pool');
            expect(pool.type).toEqual('checkbox');

            var gym = TestUtils.scryRenderedDOMComponentsWithTag(search, 'input')[3];
            expect(gym.id).toEqual('gym');
            expect(gym.type).toEqual('checkbox');

            var orderBy = TestUtils.scryRenderedDOMComponentsWithTag(search, 'select')[1];
            expect(orderBy.id).toEqual('orderBy');

            var button = TestUtils.findRenderedDOMComponentWithTag(search, 'button');
            expect(button.textContent).toEqual('Search');
        })

    })

    describe('Result', () => {

        it('should render result without crashing', () => {
            const div = document.createElement('div');
            const dummyResult = {
                Name: 'Rob`s hotel',
                StarRating: 5,
                Facilities: ['gym', 'sauna']
            }
            ReactDOM.render(<Result result={dummyResult} />, div);
        })

        it('should display search result correctly', () => {

            const dummyResult = {
                Name: 'Rob`s hotel',
                StarRating: 5,
                Facilities: ['gym','sauna']
            }

            var result = TestUtils.renderIntoDocument(
                <Result result={dummyResult} />
            );

            var hotelName = TestUtils.findRenderedDOMComponentWithTag(result, 'h3');
            expect(hotelName.textContent).toEqual('Rob`s hotel');

            var starRating = TestUtils.findRenderedDOMComponentWithTag(result, 'h4');
            expect(starRating.textContent).toEqual('5 star');

            var facilitiesList = TestUtils.findRenderedDOMComponentWithTag(result, 'ul');
            var facilitiesItems = TestUtils.scryRenderedDOMComponentsWithTag(result, 'li');
            expect(facilitiesItems.length).toEqual(2);
        })
    })
})